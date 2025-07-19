import React from "react";
import { useLocation } from "react-router-dom";

const products = [
  {
    id: "prod_Si4aZYRtrWx0j4",
    name: "Core Edition",
    description: "Essential features for small teams.",
    price: "$99/year",
  },
  {
    id: "prod_Si4bUV7p5hGFVU",
    name: "Professional Edition",
    description: "Advanced features for growing businesses.",
    price: "$299/year",
  },
  {
    id: "prod_Si4cFzwzgt98G6",
    name: "Enterprise Edition",
    description: "All features, premium support, and custom integrations.",
    price: "$999/year",
  },
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Checkout: React.FC = () => {
  const query = useQuery();
  const selectedProductId = query.get("productId");
  const filteredProducts = selectedProductId
    ? products.filter((p) => p.id === selectedProductId)
    : products;

  const handleBuyNow = async (productId: string) => {
    // TODO: Wire up to your Cloudflare Worker endpoint
    alert(`Would start checkout for product: ${productId}`);
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Choose Your Edition</h1>
      <div className="grid gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="text-2xl font-bold mb-4">{product.price}</div>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              onClick={() => handleBuyNow(product.id)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout; 