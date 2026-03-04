import { Accessibility, Shield, BugOff, IterationCw, ChromeIcon, GithubIcon} from 'lucide-react';
import { cn } from '@/lib/utils';

const BADGES = [
  {
    icon: Accessibility,
    title: 'Web3 Accessible',
    description: 'We only stop at 95%',
    color: 'text-green-600',
  },
  {
    icon: Shield,
    title: 'We use AuthO',
    description: 'Security Audits are also included',
    color: 'text-blue-600',
  },
  {
    icon: BugOff,
    title: 'Bug Free sites',
    description: 'We reduce the amount of bugs.',
    color: 'text-orange-600',
  },
  {
    icon: IterationCw,
    title: 'We Iterate ',
    description: 'If we dont solve it the first time, we keep on trying',
    color: 'text-purple-600',
  },
  {
    icon: ChromeIcon,
    title: 'Chorme Dev Tools',
    description: 'We develop using Chrome Dev',
    color: 'text-purple-600',
  },
  {
    icon: GithubIcon,
    title: 'Github',
    description: 'We use Version Control',
    color: 'text-purple-600',
  },

];

interface TrustBadgesProps {
  className?: string;
  variant?: 'simple' | 'card';
}

export function TrustBadges({
  className,
  variant = 'simple',
}: TrustBadgesProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
        className,
      )}
    >
      {BADGES.map((badge, index) => (
        <div
          key={index}
          className={cn(
            'flex items-center gap-4 p-4 transition-all',
            variant === 'card' &&
              'rounded-xl border bg-card shadow-sm hover:shadow-md',
          )}
        >
          <div
            className={cn('rounded-full p-2.5 bg-secondary/50', badge.color)}
          >
            <badge.icon className='h-6 w-6' />
          </div>
          <div>
            <h3 className='font-semibold text-sm leading-none mb-1.5'>
              {badge.title}
            </h3>
            <p className='text-xs text-muted-foreground'>{badge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
