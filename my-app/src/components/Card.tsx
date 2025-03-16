import React from 'react';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Card({ children, onClick, className }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      {children}
    </div>
  );
}