export const kpiData = [
  { id: 'students', label: 'Students', value: '1,234', delta: '+3.4%' },
  { id: 'teachers', label: 'Teachers', value: '56', delta: '+1.2%' },
  { id: 'classes', label: 'Active Classes', value: '12', delta: '+0.5%' }
];

export const chartData = {
  labels: Array.from({ length: 30 }).map((_, i) => `Day ${i + 1}`),
  datasets: [
    {
      label: 'Active Students',
      data: Array.from({ length: 30 }).map(() => Math.floor(800 + Math.random() * 500)),
      borderColor: 'rgba(34,197,94,1)',
      backgroundColor: 'rgba(34,197,94,0.15)'
    }
  ]
};

export const activities = [
  { id: 'a1', text: 'New student registered: Ali Hassan', time: '2 hours ago' },
  { id: 'a2', text: 'Teacher invited: Ms. Salma', time: '1 day ago' },
  { id: 'a3', text: 'Class updated: Math 101', time: '3 days ago' }
];