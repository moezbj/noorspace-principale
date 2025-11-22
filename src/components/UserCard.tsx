import React from 'react';
import clsx from 'clsx';

type Props = {
  avatarSrc: string;
  title: string;
  subtitle?: string;
  meta?: string;
  actions?: { label: string; onClick?: () => void }[];
  className?: string;
};

export default function UserCard({ avatarSrc, title, subtitle, meta, actions = [], className }: Props) {
  return (
    <div
      className={clsx(
        'bg-ns-card border border-ns-border rounded-[8px] shadow-sm',
        className
      )}
    >
      <div className="p-4 flex items-center gap-4">
        <img src={avatarSrc} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
        <div className="min-w-0">
          <div className="text-[15px] font-semibold truncate">{title}</div>
          {subtitle && <div className="text-xs text-ns-muted truncate">{subtitle}</div>}
          {meta && <div className="mt-1 text-xs text-ns-muted truncate">{meta}</div>}
        </div>
      </div>

      {actions.length > 0 && (
        <div className="border-t border-ns-border px-4 py-3 flex items-center gap-2">
          {actions.map((a, i) => (
            <button
              key={i}
              onClick={a.onClick}
              className="px-3 py-1.5 text-xs rounded bg-white border border-ns-border hover:bg-gray-50"
            >
              {a.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}