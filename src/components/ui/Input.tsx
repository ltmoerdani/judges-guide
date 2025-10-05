import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

/**
 * Komponen Input yang reusable dengan support untuk icons dan error states
 * Mengikuti design system yang konsisten
 */
export default function Input({ 
  className, 
  error,
  helperText,
  leftIcon,
  rightIcon,
  ...props 
}: Readonly<InputProps>) {
  const baseClasses = 'w-full px-4 py-3 border-2 rounded-lg text-base bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500';
  
  const errorClasses = error 
    ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
    : 'border-gray-300 hover:border-gray-400';
  
  const paddingClasses = cn(
    leftIcon && 'pl-11',
    rightIcon && 'pr-11'
  );

  return (
    <div className="relative">
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {leftIcon}
        </div>
      )}
      
      <input
        className={cn(
          baseClasses,
          errorClasses,
          paddingClasses,
          className
        )}
        {...props}
      />
      
      {rightIcon && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {rightIcon}
        </div>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-600">
          {helperText}
        </p>
      )}
    </div>
  );
}