import React, { useMemo, useState } from 'react';
import KPICards from '../components/KPICards';
import LineChart from '../components/Charts/LineChart';
import ActivityList from '../components/ActivityList';
import { kpiData, chartData, activities } from '../mocks/dashboardData';
import { Doughnut } from 'react-chartjs-2';
import UserCard from '../components/UserCard';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PrincipaleDashboard() {
  const [tab, setTab] = useState<'Weekly' | 'Daily'>('Weekly');

  const monthlyLabels = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
  const monthlyData = useMemo(() => ({
    labels: monthlyLabels,
    datasets: [
      {
        label: 'Students',
        data: [1200, 1800, 2200, 2600, 2400, 2800, 3000, 3400, 3200, 3600, 3800, 4000],
        borderColor: 'rgba(27,48,62,1)',
      }
    ]
  }), []);

  const dailyData = useMemo(() => chartData, []);

  const percent70 = {
    labels: ['Filled', 'Empty'],
    datasets: [{
      data: [70, 30],
      backgroundColor: ['rgba(27,48,62,1)', '#E6E6E6'],
      borderWidth: 0
    }]
  };
  const percent20 = {
    labels: ['Filled', 'Empty'],
    datasets: [{
      data: [20, 80],
      backgroundColor: ['rgba(231,102,61,0.77)', '#E6E6E6'],
      borderWidth: 0
    }]
  };
  const donutOpts: any = {
    cutout: '70%',
    plugins: { legend: { display: false }, tooltip: { enabled: false } }
  };
  return (
    <div className="space-y-6">
      <section className="bg-ns-card border border-ns-border p-6 rounded-[20px] [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]">
        <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
        <p className="text-ns-muted mt-2">Quick stats and KPIs for the principale role.</p>

        <KPICards data={kpiData} />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-ns-card border border-ns-border p-6 rounded-[20px] [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Active students</h3>
              <div className="flex items-center bg-gray-200 rounded-[14px] p-1">
                {(['Weekly','Daily'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={t === tab ? 'px-3 py-1 rounded-[13px] bg-white text-gray-800 text-xs' : 'px-3 py-1 text-xs text-gray-500'}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <LineChart data={tab === 'Weekly' ? monthlyData : dailyData} />
          </div>

          <div className="bg-ns-card border border-ns-border p-6 rounded-[20px] [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]">
            <h3 className="text-sm font-medium mb-3">Recent Activity</h3>
            <ActivityList items={activities} />
          </div>
        </div>
      </section>

      <section className="bg-ns-card border border-ns-border p-6 rounded-[20px] [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]">
        <h3 className="font-medium">Recent Activity Feed</h3>
        <p className="text-sm text-ns-muted mt-2">Full activity stream and administrative actions.</p>
        <div className="mt-4">
          <ActivityList items={activities} dense />
        </div>
      </section>

        <section className="bg-ns-card border border-ns-border p-6 rounded-[20px] [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="relative flex items-center gap-4">
            <div className="w-32 h-32"><Doughnut data={percent70} options={donutOpts} /></div>
            <div>
              <div className="text-4xl font-semibold">70%</div>
              <div className="text-sm text-ns-muted">Students</div>
            </div>
          </div>
          <div className="relative flex items-center gap-4">
            <div className="w-32 h-32"><Doughnut data={percent20} options={donutOpts} /></div>
            <div>
              <div className="text-4xl font-semibold">20%</div>
              <div className="text-sm text-ns-muted">Growth</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ns-card border border-ns-border p-6 rounded-[20px] [box-shadow:0_10px_20px_rgba(0,0,0,0.06)]">
        <h3 className="font-medium mb-4">Users</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <UserCard
              key={i}
              avatarSrc="/src/assets/avatar-placeholder.png"
              title={`User ${i + 1}`}
              subtitle="Teacher"
              meta="Joined: Oct 2025"
              actions={[{ label: 'View' }, { label: 'Message' }]}
            />
          ))}
        </div>
      </section>
    </div>
  );
}