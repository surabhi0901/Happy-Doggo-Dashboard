import React from 'react';
import { IndianRupee, BarChart3, RotateCw, Star } from 'lucide-react';
import { kpis } from '../data';

const iconMap = {
  IndianRupee,
  BarChart3,
  RotateCw,
  Star,
};

export default function KPICards() {
  return (
    <div className="hd-kpis">
      {kpis.map((kpi, idx) => {
        const Icon = iconMap[kpi.icon];
        return (
          <div key={idx} className="hd-kpi">
            <div className="hd-kpi-label">
              {Icon && <Icon size={14} />}
              {kpi.label}
            </div>
            <div className="hd-kpi-val">{kpi.value}</div>
            <div className="hd-kpi-note">{kpi.note}</div>
          </div>
        );
      })}
    </div>
  );
}
