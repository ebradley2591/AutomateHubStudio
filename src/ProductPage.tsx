import React from "react";
import { useNavigate } from "react-router-dom";

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

const ProductPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelect = (productId: string) => {
    navigate(`/checkout?productId=${productId}`);
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Select a Product</h1>
      <div className="grid gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <div className="text-2xl font-bold mb-4">{product.price}</div>
            <button
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
              onClick={() => handleSelect(product.id)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage; 