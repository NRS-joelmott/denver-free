import React, { useState } from 'react';
import { Card, SectionHeader, FilterRow, Banner } from './UI';
import { events } from './data/index';

const CATS = ['All', 'Today', 'This Weekend', 'Outdoors', 'Family', 'Arts'];
const tagMap = { 'Tonight': 'tag-red', 'This weekend': 'tag-purple', 'Outdoors': 'tag-teal', 'Family': 'tag-blue', 'Arts': 'tag-amber' };

export default function EventsTab() {
  const [cat, setCat] = useState('All');
  const filtered = events.filter(e => {
    if (cat === 'All') return true;
    if (cat === 'Today') return e.tags.includes('Tonight');
    if (cat === 'This Weekend') return e.tags.includes('This weekend');
    return e.category === cat;
  });
  return (
    <div>
      <Banner variant="purple" label="This weekend" title={`${events.length} free events near Golden`} sub="Golden Mill · Cherry Creek Arts · Botanic Gardens · + more" />
      <FilterRow options={CATS} active={cat} onChange={setCat} />
      <SectionHeader title="Upcoming" count={filtered.length} />
      {filtered.length === 0 && <div className="empty"><div className="empty-icon">🔍</div>No events found</div>}
      {filtered.map(e => (
        <Card key={e.id} img={e.img} title={e.title} sub={`${e.venue} · ${e.day}`}
          tags={e.tags.map(t => ({ label: t, color: tagMap[t] || 'tag-blue' }))}
          url={e.url}
          right={<><span className="price-free">FREE</span><span className="dist-text">{e.dist}</span></>}
        />
      ))}
    </div>
  );
}
