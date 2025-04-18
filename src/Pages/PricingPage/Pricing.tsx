import React from "react";
import PricingCard from "./PricingCard";

const Pricing: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Standard Version"
          price="$29/month"
          features={["Basic Support", "Limited Features", "1 User"]}
          ctaText="Contact Us for Standard Version"
        />
        <PricingCard
          title="Suite Version"
          price="$59/month"
          features={[
            "Advanced Support",
            "Additional Features",
            "5 Users",
            "Priority Updates",
          ]}
          ctaText="Contact Us for Suite Version"
        />
        <PricingCard
          title="Deluxe Version"
          price="$99/month"
          features={[
            "Premium Support",
            "All Features",
            "Unlimited Users",
            "Dedicated Account Manager",
            "API Access",
          ]}
          ctaText="Contact Us for Deluxe Version"
        />
      </div>
    </div>
  );
};

export default Pricing;
