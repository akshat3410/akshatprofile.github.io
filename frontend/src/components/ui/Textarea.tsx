import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({ label, className = '', ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-400 font-medium">{label}</label>
      <textarea
        className={`bg-white border border-gray-300 rounded p-3 text-black focus:border-lime-primary focus:outline-none transition-colors min-h-[120px] ${className}`}
        {...props}
      />
    </div>
  );
}
