import React from 'react';

export default function PrincipaleDashboard() {
  return (
    <div className="space-y-6">
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-600 mt-2">Quick stats and KPIs for the principale role.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-50 p-4 rounded">Students: 1,234</div>
          <div className="bg-gray-50 p-4 rounded">Teachers: 56</div>
          <div className="bg-gray-50 p-4 rounded">Active Classes: 12</div>
        </div>
      </section>

      <section className="bg-white p-6 rounded shadow-sm">
        <h3 className="font-medium">Recent Activity</h3>
        <ul className="mt-3 space-y-2">
          <li className="flex items-center justify-between">
            <div>New student registered</div>
            <div className="text-sm text-gray-500">2 hours ago</div>
          </li>
          <li className="flex items-center justify-between">
            <div>Teacher invited</div>
            <div className="text-sm text-gray-500">1 day ago</div>
          </li>
        </ul>
      </section>
    </div>
  );
}