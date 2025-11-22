import React from 'react';

type KPI = {
  id: string;
  label: string;
  value: string;
  delta?: string;
};

export default function KPICards({ data }: { data: KPI[] }) {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {data.map(k => (
        <div
          key={k.id}
          className="bg-ns-card border border-ns-border rounded-[20px] p-6 flex items-center justify-between [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]"
        >
          <div>
            <div className="text-xs text-ns-muted tracking-wide">{k.label}</div>
            <div className="text-3xl font-semibold tracking-tight mt-1">{k.value}</div>
          </div>
          {k.delta && (
            <div className="flex items-center gap-1 text-sm text-[color:var(--ns-accent)]">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 18V6M12 6l-6 6M12 6l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>{k.delta}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}