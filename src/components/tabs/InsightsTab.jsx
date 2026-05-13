import React from 'react';
import { Lightbulb, Target, TrendingUp, Zap } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function InsightsTab() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const textColor = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.55)';
  const gridColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';

  const frequencyChartData = {
    labels: ['Freq 1', 'Freq 2', 'Freq 3', 'Freq 4', 'Freq 5'],
    datasets: [{
      label: 'Customers',
      data: [6, 3, 3, 2, 1],
      backgroundColor: ['#ccc', '#aaa', '#1a8a5c', '#1a5f7e', '#1a3c6e'],
      borderWidth: 0
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ${ctx.raw} customers`
        }
      }
    },
    scales: {
      x: { ticks: { color: textColor, font: { size: 11 }, autoSkip: false }, grid: { color: gridColor } },
      y: { ticks: { color: textColor, font: { size: 11 }, stepSize: 1 }, grid: { color: gridColor } }
    }
  };

  const insights = [
    {
      title: 'Target segment: High (>₹5,000)',
      body: '6 customers drive 64.5% of revenue at ₹6,483 avg. Each high-value client = 4× the revenue of a low-segment buyer. Aggressively acquire this profile via Training packages and premium outreach.',
      variant: 'default'
    },
    {
      title: 'Product priority: Training first',
      body: 'Training → Grooming → Treats is the revenue hierarchy. Use Treats as the ₹1,500–₹2,000 entry hook, then upsell to Training within 60 days for a 3.4× AOV lift.',
      variant: 'warn'
    },
    {
      title: 'Geographic focus: HYD + BLR',
      body: 'Hyderabad has the most repeat customers (3). Bangalore has the highest avg order (₹5,433). Deploy gated community drives and referral programs in these two cities first.',
      variant: 'suc'
    },
  ];

  const kpiTargets = [
    { label: 'New customers', value: '25+', note: 'by day 90' },
    { label: 'Monthly revenue', value: '₹1.5L', note: '2.5× current' },
    { label: 'Subscribers', value: '10', note: 'Pro members' },
    { label: 'Referral share', value: '30%', note: 'of new revenue' },
  ];

  const actionPlan = [
    { num: '1', text: 'Pro subscription ₹3,500/mo — target high-freq buyers' },
    { num: '2', text: 'Loyalty cashback after 3 purchases — 10% off 4th order' },
    { num: '3', text: 'WhatsApp breed-specific re-engagement: Day 7, 21, 30' },
    { num: '↑', text: 'Treats → Training upsell: free consult after 2nd Treats order' },
    { num: '★', text: 'Neighbourhood Pack: group training in gated communities' },
  ];

  return (
    <div>
      <div className="hd-row hd-row-2">
        <div>
          <div className="hd-card" style={{ marginBottom: '12px' }}>
            <div className="hd-card-title">
              <Lightbulb size={15} />
              Strategic insights
            </div>
            {insights.map((insight, idx) => (
              <div key={idx} className={`hd-insight ${insight.variant}`}>
                <div className="hd-insight-title">{insight.title}</div>
                <div className="hd-insight-body">{insight.body}</div>
              </div>
            ))}
          </div>
          <div className="hd-card">
            <div className="hd-card-title">
              <Target size={15} />
              90-day KPI targets
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {kpiTargets.map((kpi, idx) => (
                <div key={idx} className="hd-kpi">
                  <div className="hd-kpi-label">{kpi.label}</div>
                  <div className="hd-kpi-val">{kpi.value}</div>
                  <div className="hd-kpi-note">{kpi.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="hd-card" style={{ marginBottom: '12px' }}>
            <div className="hd-card-title">
              <TrendingUp size={15} />
              Purchase frequency distribution
            </div>
            <div style={{ position: 'relative', width: '100%', height: '180px' }}>
              <Bar data={frequencyChartData} options={chartOptions} />
            </div>
          </div>
          <div className="hd-card">
            <div className="hd-card-title">
              <Zap size={15} />
              Growth action plan
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {actionPlan.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <div 
                    style={{
                      background: item.num === '↑' ? '#c27a17' : item.num === '★' ? '#1a8a5c' : '#1a3c6e',
                      color: '#fff',
                      borderRadius: '4px',
                      fontSize: '10px',
                      padding: '2px 7px',
                      flexShrink: 0,
                      marginTop: '1px'
                    }}
                  >
                    {item.num}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-primary)' }}>
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
