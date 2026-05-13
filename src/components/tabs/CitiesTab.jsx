import React from 'react';
import { Building2, Award, RotateCw } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { cities } from '../../data';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CitiesTab() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const textColor = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.55)';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  const cityChartData = {
    labels: ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai', 'Delhi'],
    datasets: [{
      label: 'Revenue (₹)',
      data: [16300, 15700, 11200, 10500, 6600],
      backgroundColor: ['#1a3c6e', '#1a5f7e', '#1a7a5c', '#c27a17', '#888'],
      borderWidth: 0
    }]
  };

  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ₹${ctx.raw.toLocaleString()}`
        }
      }
    },
    scales: {
      x: { ticks: { color: textColor, font: { size: 11 }, callback: v => '₹' + v.toLocaleString() }, grid: { color: gridColor } },
      y: { ticks: { color: textColor, font: { size: 11 }, autoSkip: false } }
    }
  };

  const loyalCustomers = [
    { name: 'Rahul Sharma', product: 'Training', freq: 3, revenue: 6500 },
    { name: 'Ananya Das', product: 'Treats', freq: 3, revenue: 2800 },
    { name: 'Pooja Shah', product: 'Grooming', freq: 3, revenue: 4600 },
  ];

  return (
    <div>
      <div className="hd-card" style={{ marginBottom: '12px' }}>
        <div className="hd-card-title">
          <Building2 size={15} />
          City revenue & customer breakdown
        </div>
        <div style={{ position: 'relative', width: '100%', height: '240px' }}>
          <Bar data={cityChartData} options={chartOptions} />
        </div>
      </div>

      <div className="hd-row hd-row-2">
        <div className="hd-card">
          <div className="hd-card-title">
            <Award size={15} />
            City rankings
          </div>
          <table className="hd-table">
            <thead>
              <tr>
                <th>#</th>
                <th>City</th>
                <th>Revenue</th>
                <th>Avg order</th>
                <th>Repeats</th>
              </tr>
            </thead>
            <tbody>
              {cities.map((city, idx) => (
                <tr key={city.name}>
                  <td style={{ fontWeight: '500', color: idx === 0 ? '#c27a17' : '#888' }}>{idx + 1}</td>
                  <td>{city.name}</td>
                  <td>₹{city.revenue.toLocaleString()}</td>
                  <td>₹{city.avgOrder.toLocaleString()}</td>
                  <td>{city.repeats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="hd-card">
          <div className="hd-card-title">
            <RotateCw size={15} />
            Hyderabad loyalty spotlight
          </div>
          <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '10px' }}>
            3 out of 6 repeat customers are from Hyderabad — the strongest loyalty market.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {loyalCustomers.map(customer => (
              <div 
                key={customer.name}
                style={{
                  background: 'var(--color-background-secondary)',
                  borderRadius: '8px',
                  padding: '8px 10px',
                  borderLeft: '3px solid #1a8a5c'
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: '500', color: 'var(--color-text-primary)' }}>
                  {customer.name}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                  {customer.product} · freq {customer.freq} · ₹{customer.revenue.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
