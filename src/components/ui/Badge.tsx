import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
  className?: string;
}

/**
 * Komponen Badge untuk menampilkan reference, status, atau kategori
 * Digunakan untuk menampilkan Book reference dan lainnya
 */
export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'sm',
  className 
}: Readonly<BadgeProps>) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
    primary: 'bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-100',
    success: 'bg-success-100 text-success-800 dark:bg-success-900 dark:text-success-100',
    warning: 'bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-100',
    danger: 'bg-danger-100 text-danger-800 dark:bg-danger-900 dark:text-danger-100',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  };
  
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
  };
  
  return (
    <span className={cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    )}>
      {children}
    </span>
  );
}