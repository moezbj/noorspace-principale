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
        <div key={k.id} className="bg-gray-50 p-4 rounded flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">{k.label}</div>
            <div className="text-2xl font-semibold">{k.value}</div>
          </div>
          {k.delta && <div className="text-sm text-green-600">{k.delta}</div>}
        </div>
      ))}
    </div>
  );
}