import React from 'react';
import clsx from 'clsx';

type Props = {
  open: boolean;
  onToggle: () => void;
};

const nav = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'students', label: 'Students' },
  { key: 'teachers', label: 'Teachers' },
  { key: 'classes', label: 'Classes' },
];

export default function Sidebar({ open, onToggle }: Props) {
  return (
    <aside
      className={clsx(
        'bg-primary text-white transition-all duration-300 ease-in-out',
        open ? 'w-64' : 'w-16'
      )}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-4">
          <div className={clsx('flex items-center gap-2', !open && 'justify-center w-full')}>
            <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center font-bold">N</div>
            {open && <span className="font-semibold">Noorspace</span>}
          </div>
          <button
            aria-label="Toggle sidebar"
            onClick={onToggle}
            className="p-2 rounded hover:bg-white/10"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d={open ? "M6 6L18 18M6 18L18 6" : "M4 6h16M4 12h16M4 18h16"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <nav className="flex-1 mt-4">
          {nav.map(item => (
            <a
              key={item.key}
              href="#"
              className={clsx('flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors', !open && 'justify-center')}
            >
              <div className="w-6 h-6 bg-white/10 rounded" />
              {open && <span>{item.label}</span>}
            </a>
          ))}
        </nav>

        <div className="p-4">
          <button className="w-full bg-white/10 px-3 py-2 rounded">Sign out</button>
        </div>
      </div>
    </aside>
  );
}