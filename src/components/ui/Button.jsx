import { cn } from '@/lib/utils';

export function Button({ 
  children, 
  className, 
  variant = 'default', 
  size = 'default',
  ...props 
}) {
  const variants = {
    default: 'bg-primary hover:bg-primary/90 text-white shadow-soft hover:shadow-card',
    secondary: 'bg-accent-secondary hover:bg-accent-secondary/90 text-white shadow-soft hover:shadow-card',
    outline: 'border border-gray-300 dark:border-gray-600 text-text-primary dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent',
    ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800 text-text-secondary dark:text-gray-300',
    destructive: 'bg-red-600 hover:bg-red-700 text-white shadow-soft',
  };

  const sizes = {
    default: 'px-6 py-2.5 text-sm',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-3 text-base',
    icon: 'p-2.5',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
