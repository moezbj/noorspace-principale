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
    }
  };

  return <Line data={data} options={cfg as any} />;
}