// Service for fetching purchase details and download links
const WORKER_URL = 'https://stripe-checkout-worker.automatehubstudio.workers.dev';

export interface PurchaseDetails {
  sessionId: string;
  customerEmail: string;
  customerName: string;
  product: {
    id: string;
    name: string;
    price: number;
    priceDisplay: string;
  };
  paymentStatus: string;
  amountTotal: number;
  amountTotalDisplay: string;
  currency: string;
  downloadUrl: string | null;
  receiptUrl: string | null;
  expiresAt: string;
}

export const getPurchaseDetails = async (sessionId: string): Promise<PurchaseDetails> => {
  try {
    const response = await fetch(`${WORKER_URL}/purchase-details?session_id=${sessionId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch purchase details');
    }

    const purchaseDetails: PurchaseDetails = await response.json();
    return purchaseDetails;
  } catch (error) {
    console.error('Error fetching purchase details:', error);
    throw error;
  }
};

export const downloadFile = async (downloadUrl: string): Promise<void> => {
  try {
    // Create a temporary link and click it to trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading file:', error);
    throw error;
  }
}; 