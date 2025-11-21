import React from 'react';
import KPICards from '../components/KPICards';
import LineChart from '../components/Charts/LineChart';
import ActivityList from '../components/ActivityList';
import { kpiData, chartData, activities } from '../mocks/dashboardData';

export default function PrincipaleDashboard() {
  return (
    <div className="space-y-6">
      <section className="bg-white p-6 rounded shadow-sm">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="text-gray-600 mt-2">Quick stats and KPIs for the principale role.</p>

        <KPICards data={kpiData} />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-4 rounded shadow-sm">
            <h3 className="text-sm font-medium mb-4">Active students (last 30 days)</h3>
            <LineChart data={chartData} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-sm font-medium mb-3">Recent Activity</h3>
            <ActivityList items={activities} />
          </div>
        </div>
      </section>

      <section className="bg-white p-6 rounded shadow-sm">
        <h3 className="font-medium">Recent Activity Feed</h3>
        <p className="text-sm text-gray-500 mt-2">Full activity stream and administrative actions.</p>
        <div className="mt-4">
          <ActivityList items={activities} dense />
        </div>
      </section>
    </div>
  );
}