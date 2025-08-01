import policyIcon from '../assets/PolicyWebpartIcon.png';
import { Link } from 'react-router-dom';
import { handleCheckout } from '../services/stripeService';
import { useState } from 'react';

export default function PolicyAcknowledgementTracker() {
  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
    setLoading(true);
    
    try {
                        await handleCheckout({
                    productId: 'prod_SlMyUF6OnalPfm',
                    successUrl: `${window.location.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
                    cancelUrl: `${window.location.origin}/solutions/policy-acknowledgement-tracker`,
                  });
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

     return (
     <section className="max-w-6xl mx-auto py-8 px-4">
       <div className="flex flex-col sm:flex-row items-center mb-4">
         <img src={policyIcon} alt="Policy Acknowledgement Tracker Icon" className="w-12 h-12 mr-0 sm:mr-3 mb-2 sm:mb-0 object-contain" />
         <h1 className="text-xl sm:text-2xl font-bold text-brand-dark text-center sm:text-left">Policy Acknowledgement Tracker</h1>
       </div>
               <p className="text-base sm:text-lg text-gray-700 mb-6 text-center sm:text-left">
          Streamline compliance management with our SharePoint-integrated policy tracking solution. Track acknowledgements in real-time, maintain comprehensive audit trails, and ensure regulatory compliance across your organization.
        </p>

        {/* Quick Value Proposition */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-700 mb-2">📋</div>
              <h4 className="font-semibold text-gray-800 text-base">Easy Setup</h4>
              <p className="text-sm text-gray-600">Quick SharePoint integration</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-700 mb-2">⚡</div>
              <h4 className="font-semibold text-gray-800 text-base">Real-time Tracking</h4>
              <p className="text-sm text-gray-600">Instant acknowledgment updates</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-700 mb-2">🔒</div>
              <h4 className="font-semibold text-gray-800 text-base">Compliance Ready</h4>
              <p className="text-sm text-gray-600">Complete audit trails</p>
            </div>
          </div>
        </div>
      
             {/* Editions Comparison */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                   {/* Standard Edition */}
          <div className="border border-green-200 rounded-lg p-4 bg-green-50 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-lg font-semibold text-green-700">📋 Standard</h3>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">Available</span>
            </div>
                        <ul className="text-base text-gray-700 space-y-1 mb-4 flex-grow">
               <li>• SharePoint Integration</li>
               <li>• Policy Dashboard</li>
               <li>• Real-time Tracking</li>
               <li>• Audit Trails</li>
             </ul>
             <div className="text-center mb-3">
               <div className="text-3xl font-bold text-green-700">$175</div>
               <div className="text-sm text-gray-600">one-time payment</div>
             </div>
            <button
              onClick={handleBuyNow}
              disabled={loading}
              className={`w-full inline-flex items-center justify-center px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg'
              }`}
            >
              {loading ? 'Processing...' : 'Buy Now'}
            </button>
          </div>

                   {/* Custom Edition */}
          <div className="border border-purple-200 rounded-lg p-4 bg-purple-50 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-lg font-semibold text-purple-700">⚙️ Custom</h3>
              <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full">Contact Us</span>
            </div>
                        <ul className="text-base text-gray-700 space-y-1 mb-4 flex-grow">
               <li>• All Standard Features</li>
               <li>• Custom Integrations</li>
               <li>• Tailored Workflows</li>
               <li>• Dedicated Support</li>
             </ul>
             <div className="text-center mb-3">
               <div className="text-xl font-semibold text-purple-700">Custom Pricing</div>
               <div className="text-sm text-gray-600">tailored to your needs</div>
             </div>
            <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 hover:shadow-lg transition-all duration-300">
              Get Quote
            </Link>
          </div>

          {/* Enterprise Edition */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-lg font-semibold text-gray-600">🏢 Enterprise</h3>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">Coming Soon</span>
            </div>
                        <ul className="text-base text-gray-500 space-y-1 mb-4 flex-grow">
               <li>• Teams Notifications</li>
               <li>• Automated Reminders</li>
               <li>• Compliance Reporting</li>
               <li>• Custom Workflows</li>
             </ul>
             <div className="text-center mb-3">
               <div className="text-xl font-semibold text-gray-600">TBD</div>
               <div className="text-sm text-gray-500">pricing to be announced</div>
             </div>
            <button disabled className="w-full inline-flex items-center justify-center px-4 py-2 bg-gray-400 text-gray-600 font-semibold rounded-lg cursor-not-allowed opacity-60">
              Coming Soon
            </button>
          </div>
       </div>

                                                                     {/* Bottom Info & Actions */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                   {/* Technical Info */}
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col h-full">
             <h4 className="font-semibold text-gray-800 mb-2 text-base">🔧 Technical</h4>
             <ul className="text-sm text-gray-600 space-y-1 flex-grow">
               <li>• SharePoint web part (.sppkg)</li>
               <li>• PnPjs REST API integration</li>
               <li>• Complete documentation</li>
               <li>• 30-day support</li>
             </ul>
           </div>

           {/* Trust & Guarantee */}
           <div className="bg-blue-50 rounded-lg p-4 flex flex-col h-full">
             <h4 className="font-semibold text-gray-800 mb-2 text-base">🛡️ Guarantee</h4>
             <ul className="text-sm text-gray-600 space-y-1 flex-grow">
               <li>• 7-day money-back guarantee</li>
               <li>• Secure Stripe payment</li>
               <li>• Instant download</li>
               <li>• No recurring fees</li>
             </ul>
           </div>

                                           {/* Demo Request */}
                         <div className="bg-yellow-50 rounded-lg p-4 flex flex-col h-full">
               <h4 className="font-semibold text-gray-800 mb-2 text-base">📞 Need Help?</h4>
               <p className="text-sm text-gray-600 mb-3 flex-grow">Get expert guidance on implementation and customization</p>
               <div className="mt-auto">
                                  <Link to="/contact" className="w-full inline-flex items-center justify-center px-3 py-2 bg-yellow-500 text-yellow-900 font-semibold rounded text-base hover:bg-yellow-600 transition-colors">
                    Request Consultation
                  </Link>
               </div>
             </div>
       </div>
    </section>
  );
} 