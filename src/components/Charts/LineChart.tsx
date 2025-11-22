import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  data: {
    labels: string[];
    datasets: { label: string; data: number[]; borderColor?: string; backgroundColor?: string }[];
  };
};

export default function LineChart({ data }: Props) {
  const cfg = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: false }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: getComputedStyle(document.documentElement).getPropertyValue('--ns-muted') || '#6b7280',
          font: { family: 'Noto Sans', size: 12, weight: '400' }
        }
      },
      y: {
        grid: { color: '#DFDBD8' },
        ticks: {
          color: getComputedStyle(document.documentElement).getPropertyValue('--ns-muted') || '#6b7280',
          font: { family: 'Noto Sans', size: 12, weight: '400' }
        }
      }
    }
  };

  return <Line data={data} options={cfg as any} />;
}