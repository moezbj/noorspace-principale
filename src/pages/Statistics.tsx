import React from 'react';
import StatTile from '../components/StatTile';

export default function Statistics() {
  const tiles = [
    { title: 'Total Students', value: '4,000' },
    { title: 'Active Teachers', value: '56' },
    { title: 'Classes', value: '120' },
    { title: 'Attendance Rate', value: '97%' },
    { title: 'New Registrations', value: '42' },
    { title: 'Exams Scheduled', value: '18' },
    { title: 'Library Loans', value: '230' },
    { title: 'Portal Messages', value: '1,245' },
    { title: 'Transport Routes', value: '15' },
    { title: 'Fees Collected', value: '$12k' },
    { title: 'Cafeteria Orders', value: '560' },
    { title: 'Events', value: '6' }
  ];

  return (
    <div className="space-y-6">
      <section className="bg-ns-card border border-ns-border p-6 rounded-[20px] [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]">
        <h2 className="text-xl font-semibold tracking-tight">Statistics</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiles.map((t, i) => (
            <StatTile key={i} title={t.title} value={t.value} />
          ))}
        </div>
      </section>
    </div>
  );
}