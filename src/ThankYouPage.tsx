import React, { useState, useEffect } from "react";
import { getPurchaseDetails, downloadFile } from "./services/purchaseService";
import type { PurchaseDetails } from "./services/purchaseService";

const ThankYouPage: React.FC = () => {
  const [purchaseDetails, setPurchaseDetails] = useState<PurchaseDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  // Get session ID from URL
  const getSessionIdFromQuery = () => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    return params.get("session_id");
  };

  useEffect(() => {
    const sessionId = getSessionIdFromQuery();
    
    if (!sessionId) {
      setError("No session ID found. Please complete a purchase to view this page.");
      setLoading(false);
      return;
    }

    const fetchPurchaseDetails = async () => {
      try {
        setLoading(true);
        const details = await getPurchaseDetails(sessionId);
        setPurchaseDetails(details);
        setError(null);
      } catch (err) {
        console.error('Error fetching purchase details:', err);
        setError(err instanceof Error ? err.message : 'Failed to load purchase details');
      } finally {
        setLoading(false);
      }
    };

    fetchPurchaseDetails();
  }, []);

  // Real-time countdown timer
  useEffect(() => {
    if (!purchaseDetails?.expiresAt) return;

    const updateTimer = () => {
      const formattedTime = formatExpiryTime(purchaseDetails.expiresAt);
      setTimeRemaining(formattedTime);
    };

    // Update immediately
    updateTimer();

    // Update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [purchaseDetails?.expiresAt]);

  const handleDownload = async () => {
    if (!purchaseDetails?.downloadUrl) return;
    
    try {
      setDownloading(true);
      await downloadFile(purchaseDetails.downloadUrl);
    } catch (err) {
      console.error('Error downloading file:', err);
      setError('Failed to download file. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  const formatExpiryTime = (expiresAt: string) => {
    const expiryDate = new Date(expiresAt);
    const now = new Date();
    const diffMs = expiryDate.getTime() - now.getTime();
    
    if (diffMs <= 0) {
      return 'Expired';
    }
    
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);
    
    if (diffHours > 0) {
      return `${diffHours}h ${diffMinutes}m ${diffSeconds}s`;
    } else if (diffMinutes > 0) {
      return `${diffMinutes}m ${diffSeconds}s`;
    } else {
      return `${diffSeconds}s`;
    }
  };

  const getTimerColor = (timeRemaining: string) => {
    if (timeRemaining === 'Expired') return 'text-red-600';
    
    // Check if less than 1 hour remaining
    if (timeRemaining.includes('h')) {
      const hours = parseInt(timeRemaining.split('h')[0]);
      if (hours < 1) return 'text-orange-600';
    } else if (timeRemaining.includes('m')) {
      const minutes = parseInt(timeRemaining.split('m')[0]);
      if (minutes < 30) return 'text-orange-600';
    } else {
      return 'text-red-600'; // Less than 1 minute
    }
    
    return 'text-blue-700';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 px-4 py-12">
        <div className="bg-white/80 shadow-xl rounded-xl p-8 max-w-lg w-full text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-700 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700">Loading your purchase details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 px-4 py-12">
        <div className="bg-white/80 shadow-xl rounded-xl p-8 max-w-lg w-full text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-red-700 mb-4">Oops! Something went wrong</h1>
          <p className="text-gray-700 mb-6">{error}</p>
          <a 
            href="/solutions" 
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  if (!purchaseDetails) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 px-4 py-12">
        <div className="bg-white/80 shadow-xl rounded-xl p-8 max-w-lg w-full text-center">
          <h1 className="text-2xl font-bold text-gray-700 mb-4">Purchase Not Found</h1>
          <p className="text-gray-600 mb-6">We couldn't find your purchase details.</p>
          <a 
            href="/solutions" 
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 px-4 py-12">
      <div className="bg-white/80 shadow-xl rounded-xl p-8 max-w-2xl w-full">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="text-green-500 text-6xl mb-4">✅</div>
          <h1 className="text-3xl font-bold text-teal-700 mb-2">Thank You for Your Purchase!</h1>
          <p className="text-lg text-gray-600">Your order has been confirmed</p>
        </div>

        {/* Purchase Details */}
        <div className="bg-teal-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-teal-800 mb-4">Order Details</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Product:</span>
              <span className="font-medium">{purchaseDetails.product.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">{purchaseDetails.amountTotalDisplay}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="font-medium text-green-600 capitalize">{purchaseDetails.paymentStatus}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Customer:</span>
              <span className="font-medium">{purchaseDetails.customerName || purchaseDetails.customerEmail}</span>
            </div>
          </div>
        </div>

        {/* Download Section */}
        {purchaseDetails.downloadUrl && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Download Your Product</h2>
            <p className="text-blue-700 mb-4">
              Your download link is ready! Click the button below to download your product.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-blue-600">
                <span className="font-medium">Expires in:</span> 
                <span className={`ml-1 font-mono ${getTimerColor(timeRemaining)}`}>
                  {timeRemaining}
                </span>
              </div>
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {downloading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Downloading...
                  </>
                ) : (
                  <>
                    📥 Download Now
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Receipt Section */}
        {purchaseDetails.receiptUrl && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Purchase Receipt</h2>
            <p className="text-green-700 mb-4">
              Your official receipt is available from Stripe.
            </p>
            <a
              href={purchaseDetails.receiptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              📄 View Receipt
            </a>
          </div>
        )}

        {/* Email Notification */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-yellow-800 mb-4">Email Confirmation</h2>
          <p className="text-yellow-700 mb-2">
            We've sent a confirmation email to <strong>{purchaseDetails.customerEmail}</strong>
          </p>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Check your inbox for the download link</li>
            <li>• The email also contains your receipt</li>
            <li>• Check spam folder if you don't see it</li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need help? We're here to assist you!
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="mailto:support@automatehubstudio.com" 
              className="text-teal-700 underline hover:text-teal-800"
            >
              support@automatehubstudio.com
            </a>
            <span className="text-gray-400">|</span>
            <a 
              href="/solutions" 
              className="text-teal-700 underline hover:text-teal-800"
            >
              Browse More Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage; 