import React from 'react';

export default function ActivityList({ items, dense = false }: { items: { id: string; text: string; time: string }[]; dense?: boolean }) {
  return (
    <ul className={dense ? 'space-y-2 text-sm' : 'space-y-3'}>
      {items.map(it => (
        <li key={it.id} className="flex items-start justify-between">
          <div className="text-sm text-gray-700">{it.text}</div>
          <div className="text-xs text-gray-400">{it.time}</div>
        </li>
      ))}
    </ul>
  );
}