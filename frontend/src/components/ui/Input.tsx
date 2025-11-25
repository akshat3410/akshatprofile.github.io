import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-400 font-medium">{label}</label>
      <input
        className={`bg-white border border-gray-300 rounded p-3 text-black focus:border-lime-primary focus:outline-none transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}
