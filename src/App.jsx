import React, { useState } from 'react';
import TopBar from './components/TopBar';
import KPICards from './components/KPICards';
import TabNavigation from './components/TabNavigation';
import OverviewTab from './components/tabs/OverviewTab';
import ProductsTab from './components/tabs/ProductsTab';
import CitiesTab from './components/tabs/CitiesTab';
import CustomersTab from './components/tabs/CustomersTab';
import InsightsTab from './components/tabs/InsightsTab';
import './index.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', component: OverviewTab },
    { id: 'products', label: 'Products', component: ProductsTab },
    { id: 'cities', label: 'Cities', component: CitiesTab },
    { id: 'customers', label: 'Customers', component: CustomersTab },
    { id: 'insights', label: 'Insights', component: InsightsTab },
  ];

  const activeTabComponent = tabs.find(t => t.id === activeTab)?.component;
  const TabComponent = activeTabComponent;

  return (
    <div className="hd-wrap">
      <TopBar />
      <KPICards />
      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      {TabComponent && <TabComponent />}
    </div>
  );
}
