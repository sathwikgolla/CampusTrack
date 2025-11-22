import { cn } from '@/lib/utils';
import { User, BookOpen, Home, XCircle, Clock } from 'lucide-react';

const statusConfig = {
  'Teaching': { color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800', icon: BookOpen }, // Busy
  'In Cabin': { color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800', icon: Home }, // Available
  'Free': { color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800', icon: User }, // Available
  'On Leave': { color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800', icon: Clock }, // Not Available
  'Unavailable': { color: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800', icon: XCircle }, // Not Available
};

export function StatusBadge({ status, className }) {
  const config = statusConfig[status] || statusConfig['Unavailable'];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border',
        config.color,
        className
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {status}
    </span>
  );
}

