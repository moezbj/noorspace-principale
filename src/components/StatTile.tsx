import React from 'react';
import clsx from 'clsx';

type Props = {
  icon?: React.ReactNode;
  title: string;
  value?: string | number;
  subtext?: string;
  actionLabel?: string;
  className?: string;
};

export default function StatTile({ icon, title, value, subtext, actionLabel, className }: Props) {
  return (
    <div className={clsx('bg-ns-card border border-ns-border rounded-[8px] shadow-sm', className)}>
      <div className="p-4 flex items-center gap-3">
        {icon && <div className="w-8 h-8 flex items-center justify-center">{icon}</div>}
        <div className="min-w-0">
          <div className="text-sm font-semibold truncate">{title}</div>
          {subtext && <div className="text-xs text-ns-muted truncate">{subtext}</div>}
        </div>
        {value !== undefined && <div className="ml-auto text-base font-semibold">{value}</div>}
      </div>
      {actionLabel && (
        <div className="border-t border-ns-border px-4 py-3">
          <button className="px-3 py-1.5 text-xs rounded bg-white border border-ns-border hover:bg-gray-50">{actionLabel}</button>
        </div>
      )}
    </div>
  );
}