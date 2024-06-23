import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const DailyMacrosChart = () => {
  const data = [
    { name: 'Carbohydrates', value: 400 },
    { name: 'Proteins', value: 300 },
    { name: 'Fats', value: 200 },
    { name: 'Others', value: 100 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default DailyMacrosChart;
