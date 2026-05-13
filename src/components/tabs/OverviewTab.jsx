import React, { useEffect } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { PieChart, BarChart3, MapPin } from 'lucide-react';
import { products, cities } from '../../data';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function OverviewTab() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const textColor = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.55)';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  const segmentChartData = {
    labels: ['High (>₹5K)', 'Medium (₹2K–5K)', 'Low (<₹2K)'],
    datasets: [{
      data: [38900, 15000, 6400],
      backgroundColor: ['#1a8a5c', '#1a3c6e', '#c27a17'],
      borderWidth: 0,
      hoverOffset: 6
    }]
  };

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

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '65%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ₹${ctx.raw.toLocaleString()} (${((ctx.raw / 60300) * 100).toFixed(1)}%)`
        }
      }
    }
  };

  useEffect(() => {
    // Animate bars on mount
    const timer = setTimeout(() => {
      document.querySelectorAll('.hd-seg-fill').forEach(el => {
        if (el.style.width === '0%') {
          const width = el.getAttribute('data-width');
          if (width) el.style.width = width;
        }
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="hd-row hd-row-2">
        <div className="hd-card">
          <div className="hd-card-title">
            <PieChart size={15} />
            Revenue by segment
          </div>
          <div className="hd-legend">
            <span><span className="hd-legend-dot" style={{ background: '#1a8a5c' }}></span>High &gt;₹5K — 64.5%</span>
            <span><span className="hd-legend-dot" style={{ background: '#1a3c6e' }}></span>Medium — 24.9%</span>
            <span><span className="hd-legend-dot" style={{ background: '#c27a17' }}></span>Low &lt;₹2K — 10.6%</span>
          </div>
          <div style={{ position: 'relative', width: '100%', height: '200px' }}>
            <Doughnut data={segmentChartData} options={doughnutOptions} />
          </div>
        </div>
        <div className="hd-card">
          <div className="hd-card-title">
            <BarChart3 size={15} />
            Revenue by product
          </div>
          <div className="hd-seg-bars">
            {products.map(prod => (
              <div key={prod.name} className="hd-seg-row">
                <div className="hd-seg-label">{prod.name}</div>
                <div className="hd-seg-track">
                  <div 
                    className="hd-seg-fill" 
                    style={{ width: '0%', background: prod.color }}
                    data-width={`${prod.percent}%`}
                  >
                    <span>₹{prod.revenue.toLocaleString()}</span>
                  </div>
                </div>
                <div className="hd-seg-meta">{prod.percent}%</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="hd-card-title">
              <MapPin size={15} />
              Revenue by city
            </div>
            <div className="hd-seg-bars">
              {cities.map(city => (
                <div key={city.name} className="hd-seg-row">
                  <div className="hd-seg-label">{city.name}</div>
                  <div className="hd-seg-track">
                    <div 
                      className="hd-seg-fill" 
                      style={{ width: '0%', background: city.color }}
                      data-width={`${(city.revenue / 16300) * 100}%`}
                    >
                      <span>₹{city.revenue.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="hd-seg-meta">{city.percent}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
