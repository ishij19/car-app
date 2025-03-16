import React from 'react';

interface TabsProps {
  children: React.ReactNode;
  defaultValue: string;
  className?: string;
}

export function Tabs({ children, defaultValue, className }: TabsProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {children}
    </div>
  );
}

interface TabsTriggerProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function TabsTrigger({ children, value, className }: TabsTriggerProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export function TabsContent({ children, value, className }: TabsContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}