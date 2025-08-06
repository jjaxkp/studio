import { Zap } from 'lucide-react';

interface LoadingProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Loading({ message = 'Loading...', size = 'md' }: LoadingProps) {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12'
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="relative">
        <Zap className={`${sizeClasses[size]} text-primary animate-pulse`} />
        <div className="absolute inset-0 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{message}</p>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="h-12 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-8">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}