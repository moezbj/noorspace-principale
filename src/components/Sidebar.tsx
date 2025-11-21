import React from 'react';
import clsx from 'clsx';

type NavItem = {
  key: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: string | number;
};

type Props = {
  open: boolean;
  onToggle: () => void;
  activeKey?: string;
};

const ICONS = {
  dashboard: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 13h8V3H3v10zM3 21h8v-6H3v6zM13 21h8V11h-8v10zM13 3v6h8V3h-8z" fill="currentColor" />
    </svg>
  ),
  students: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0H4z" fill="currentColor" />
    </svg>
  ),
  teachers: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2L2 7l10 5 10-5-10-5zm0 7v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  classes: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M7 20h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

const nav: NavItem[] = [
  { key: 'dashboard', label: 'Dashboard', href: '#', icon: ICONS.dashboard },
  { key: 'students', label: 'Students', href: '#', icon: ICONS.students },
  { key: 'teachers', label: 'Teachers', href: '#', icon: ICONS.teachers },
  { key: 'classes', label: 'Classes', href: '#', icon: ICONS.classes }
];

export default function Sidebar({ open, onToggle, activeKey = 'dashboard' }: Props) {
  return (
    <aside
      aria-label="Sidebar"
      className={clsx(
        'flex flex-col h-screen transition-all duration-300 ease-in-out select-none',
        open ? 'w-64' : 'w-16',
        'bg-[color:var(--ns-primary)] text-white'
      )}
    >
      {/* Top: logo + toggle */}
      <div className="flex items-center justify-between px-3 py-3 border-b border-white/10">
        <div className={clsx('flex items-center gap-3', !open && 'justify-center w-full')}> 
          <div
            className={clsx(
              'flex items-center justify-center w-10 h-10 rounded-md bg-white/10 text-white font-bold',
              'shrink-0'
            )}
            aria-hidden
          >
            N
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold leading-none">Noorspace</span>
              <span className="text-xs text-white/80 leading-none">Principale</span>
            </div>
          )}
        </div>

        <button
          aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
          onClick={onToggle}
          className="p-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <svg className="w-4 h-4 transform" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            ) : (
              <path d="M6 6h12M6 12h12M6 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto mt-2">
        <ul className="py-2">
          {nav.map(item => {
            const isActive = item.key === activeKey;
            return (
              <li key={item.key} className="relative">
                <a
                  href={item.href}
                  className={clsx(
                    'flex items-center gap-3 px-3 py-2 mx-2 rounded-md transition-colors',
                    isActive ? 'bg-white/10 text-white' : 'text-white/90 hover:bg-white/5',
                    !open && 'justify-center'
                  )}
                  title={!open ? item.label : undefined}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={clsx('inline-flex items-center justify-center shrink-0', !open ? 'w-6' : 'w-6')}> 
                    {item.icon}
                  </span>

                  {/* label + optional badge */}
                  <div className={clsx('flex items-center justify-between w-full', !open && 'hidden')}> 
                    <span className={clsx('ml-1 text-sm')}>{item.label}</span>
                    {item.badge && <span className="ml-2 text-xs bg-white/10 px-2 py-0.5 rounded">{item.badge}</span>} 
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer / actions */}
      <div className="p-3 border-t border-white/10"> 
        <button
          className={clsx(
            'flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors',
            'text-white/90 hover:bg-white/5',
            !open && 'justify-center'
          )}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M12 12v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 10l6-6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={clsx('text-sm', !open && 'hidden')}>Settings</span>
        </button>

        <button
          className={clsx(
            'mt-2 flex items-center gap-3 w-full px-3 py-2 rounded-md transition-colors',
            'text-white/90 hover:bg-white/5',
            !open && 'justify-center'
          )}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M16 17v-5a4 4 0 10-8 0v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 22a2 2 0 002-2H10a2 2 0 002 2z" fill="currentColor" />
          </svg>
          <span className={clsx('text-sm', !open && 'hidden')}>Sign out</span>
        </button>
      </div>
    </aside>
  );
}