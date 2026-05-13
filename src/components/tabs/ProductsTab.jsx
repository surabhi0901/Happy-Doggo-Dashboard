import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ProductsTab() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const textColor = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.55)';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  const productChartData = {
    labels: ['Revenue (₹)', 'Avg Order (₹)', 'Orders × 1000'],
    datasets: [
      { label: 'Training', data: [38900, 6483, 6000], backgroundColor: '#1a3c6e', borderWidth: 0 },
      { label: 'Treats', data: [11500, 1917, 6000], backgroundColor: 'transparent', borderColor: '#c27a17', borderWidth: 2, borderDash: [4, 3] },
      { label: 'Grooming', data: [9900, 3300, 3000], backgroundColor: '#1a8a5c', borderWidth: 0 },
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.dataset.label}: ${ctx.raw.toLocaleString()}`
        }
      }
    },
    scales: {
      x: { ticks: { color: textColor, font: { size: 11 } }, grid: { color: gridColor } },
      y: { ticks: { color: textColor, font: { size: 11 }, callback: v => '₹' + v.toLocaleString() }, grid: { color: gridColor } }
    }
  };

  return (
    <div>
      <div className="hd-card" style={{ marginBottom: '12px' }}>
        <div className="hd-card-title">
          <BarChart3 size={15} />
          Product performance comparison
        </div>
        <div className="hd-legend">
          <span><span className="hd-legend-dot" style={{ background: '#1a3c6e' }}></span>Training</span>
          <span><span className="hd-legend-dot" style={{ background: 'transparent', border: '1.5px dashed #c27a17', width: '8px', height: '8px' }}></span>Treats</span>
          <span><span className="hd-legend-dot" style={{ background: '#1a8a5c' }}></span>Grooming</span>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '260px' }}>
          <Bar data={productChartData} options={chartOptions} />
        </div>
      </div>

      <div className="hd-row hd-row-2">
        <div className="hd-card">
          <div className="hd-card-title">
            <span>🏆</span>
            Training
          </div>
          <div className="hd-kpi-val" style={{ fontSize: '28px', marginBottom: '4px' }}>₹38,900</div>
          <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '10px' }}>6 orders · ₹6,483 avg</div>
          <div className="hd-pill high" style={{ marginBottom: '6px' }}>Primary revenue driver</div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)', marginTop: '8px' }}>
            100% of high-freq buyers are Training customers. Drives 64.5% of all revenue. Highest LTV product.
          </div>
        </div>
        <div className="hd-card">
          <div className="hd-card-title">
            <TrendingUp size={15} />
            Treats vs Grooming
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Treats</div>
              <div style={{ fontSize: '20px', fontWeight: '500', color: 'var(--color-text-primary)' }}>₹11,500</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>6 orders · ₹1,917 avg</div>
              <div className="hd-pill low" style={{ marginTop: '6px' }}>Funnel entry</div>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Grooming</div>
              <div style={{ fontSize: '20px', fontWeight: '500', color: 'var(--color-text-primary)' }}>₹9,900</div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>3 orders · ₹3,300 avg</div>
              <div className="hd-pill med" style={{ marginTop: '6px' }}>Upsell bridge</div>
            </div>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>
            Use Treats as a low-friction entry point → upsell to Grooming → convert to Training for 3.4× higher AOV.
          </div>
        </div>
      </div>
    </div>
  );
}
