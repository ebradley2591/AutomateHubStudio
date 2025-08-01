import { loadStripe } from '@stripe/stripe-js';

// Updated Stripe publishable key
export const stripePromise = loadStripe('pk_live_51RmdAgGPWIddTmC8tx7qpumZGPxIe4bdGd5OzOUZYhKnE9Dnyp8kLp8sHPG5vZKLlxCw2Ffijgml4ZMHeCHnZWGk006OIPmU3r');

export const products = [
  {
    id: "prod_SlMyUF6OnalPfm",
    name: "Policy Acknowledgment Tracker (SPFx Webpart)",
    description: "A professional SPFx webpart for tracking policy acknowledgments in SharePoint. Includes provisioning scripts and documentation.",
    price: 60000, // $600 in cents
    priceDisplay: "$600 one-time",
    file_key: "policy-acknowledgement-tracker-v1.zip",
    stripePriceId: "price_1Rr3xAGPWIddTmC8ofgGrzuR", // Test price ID for live testing
  },
  {
    id: "prod_SlpryMMVe02QJv",
    name: "Core Edition",
    description: "Essential features for small teams.",
    price: 9900, // $99 in cents
    priceDisplay: "$99/year",
    stripePriceId: "price_1RqIBXGPWIddTmC8hGU28dNw", // Test price ID
  },
  {
    id: "prod_SlprZSFKsUYSVD",
    name: "Professional Edition",
    description: "Advanced features for growing businesses.",
    price: 29900, // $299 in cents
    priceDisplay: "$299/year",
    stripePriceId: "price_1RqIBWGPWIddTmC8cZ7cdj2a", // Test price ID
  },
  {
    id: "prod_SlprpatTAnOtOb",
    name: "Enterprise Edition",
    description: "All features, premium support, and custom integrations.",
    price: 99900, // $999 in cents
    priceDisplay: "$999/year",
    stripePriceId: "price_1RqIBWGPWIddTmC8V0uazOO5", // Test price ID
  },
];

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
}; 