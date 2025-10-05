import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

/**
 * Komponen Button yang reusable dengan berbagai variant dan ukuran
 * Mengikuti design system yang konsisten dengan Tailwind classes
 */
export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  disabled,
  ...props 
}: Readonly<ButtonProps>) {
  const baseClasses = 'font-medium transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500 border-transparent',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-500 border-gray-200',
    success: 'bg-success-500 text-white hover:bg-success-600 focus:ring-success-500 border-transparent',
    warning: 'bg-warning-500 text-white hover:bg-warning-600 focus:ring-warning-500 border-transparent',
    danger: 'bg-danger-500 text-white hover:bg-danger-600 focus:ring-danger-500 border-transparent',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-50 focus:ring-gray-500 border-gray-200',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-4 py-2 text-sm rounded-xl',
    lg: 'px-6 py-3 text-base rounded-xl',
  };
  
  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        'border-2',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}