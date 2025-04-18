import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  ctaText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  ctaText,
}) => {
  const handleContactClick = () => {
    alert(`Contact requested for ${title}. `);
  };

  return (
    <div className="border h-[600px] rounded-[8px] p-6 shadow-sm transition-transform hover:scale-105 flex justify-center items-start flex-col">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-4xl font-bold mb-4">{price}</p>
      <ul className="list-disc list-inside mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex-1" />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[6px] w-full"
        onClick={handleContactClick}
      >
        {ctaText}
      </button>
    </div>
  );
};

export default PricingCard;
