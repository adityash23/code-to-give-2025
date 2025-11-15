"use client";

import * as React from "react";
import { Card } from "./card";

export interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Card className="p-6">
      <p
        className={`text-gray-800 mb-4 ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        {quote}
      </p>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600 mt-1">{role}</p>
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </Card>
  );
};

