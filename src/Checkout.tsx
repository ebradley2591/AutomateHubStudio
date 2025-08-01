import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { handleCheckout } from "./services/stripeService";
import { products, getProductById } from "./config/stripe";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Checkout: React.FC = () => {
  const query = useQuery();
  const selectedProductId = query.get("productId");
  const filteredProducts = selectedProductId
    ? products.filter((p) => p.id === selectedProductId)
    : products;

  const [loading, setLoading] = useState<string | null>(null);

  const handleBuyNow = async (productId: string) => {
    setLoading(productId);
    
    try {
      const product = getProductById(productId);
      if (!product) {
        throw new Error('Product not found');
      }

      await handleCheckout({
        productId,
        successUrl: `${window.location.origin}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/checkout?productId=${productId}`,
      });
    } catch (error) {
      console.error('Checkout error:', error);
      alert('There was an error processing your payment. Please try again.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose Your Edition</h1>
      <div className="grid gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="text-2xl font-bold mb-4">{product.priceDisplay}</div>
            <button
              className={`px-6 py-2 rounded transition ${
                loading === product.id
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
              onClick={() => handleBuyNow(product.id)}
              disabled={loading === product.id}
            >
              {loading === product.id ? 'Processing...' : 'Buy Now'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout; 