import React, { useState, useEffect } from 'react';
import './App.css';
import EventsTab from './EventsTab';
import ConcertsTab from './ConcertsTab';
import ActivitiesTab from './ActivitiesTab';
import HappyHoursTab from './HappyHoursTab';
import FreeStuffTab from './FreeStuffTab';
import AlmostFreeTab from './AlmostFreeTab';

const TABS = [
  { id: 'events',      label: 'Free Events' },
  { id: 'concerts',    label: 'Concerts'    },
  { id: 'activities',  label: 'Activities'  },
  { id: 'happyhours',  label: 'Happy Hours' },
  { id: 'freestuff',   label: 'Free Stuff'  },
  { id: 'almostfree',  label: 'Almost Free' },
];

export default function App() {
  const [tab, setTab] = useState('events');

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }, []);

  const renderTab = () => {
    switch (tab) {
      case 'events':      return <EventsTab />;
      case 'concerts':    return <ConcertsTab />;
      case 'activities':  return <ActivitiesTab />;
      case 'happyhours':  return <HappyHoursTab />;
      case 'freestuff':   return <FreeStuffTab />;
      case 'almostfree':  return <AlmostFreeTab />;
      default:            return <EventsTab />;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <div className="logo-mark">🎉</div>
            <span className="logo-text">Denver<span>Free</span></span>
          </div>
          <button className="location-btn">
            <span className="loc-dot" />
            Golden, CO
          </button>
        </div>
        <nav className="tabs">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`tab-btn ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="content">
        {renderTab()}
      </main>
    </div>
  );
}
