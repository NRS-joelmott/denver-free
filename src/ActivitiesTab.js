import React, { useState } from 'react';
import { Card, SectionHeader, FilterRow, Banner } from './UI';
import { activities } from './data/index';

const CATS = ['All', 'Fitness', 'Arts & Craft', 'Cooking', 'Tech & Skills', 'Wellness'];
const tagColor = { 'Instructor-led': 'tag-purple', 'Expert-led': 'tag-purple', 'Chef-led': 'tag-amber', 'Weekly': 'tag-teal', 'New series': 'tag-teal', 'New': 'tag-teal', 'Supplies incl.': 'tag-amber', 'All levels': 'tag-blue', 'First class': 'tag-green' };

export default function ActivitiesTab() {
  const [cat, setCat] = useState('All');
  const filtered = activities.filter(a => cat === 'All' || a.category === cat);
  return (
    <div>
      <Banner variant="purple" label="Free Activities" title="Instructor-led. Organized. Actually free." sub='Classes, workshops & guided groups — not just "go outside"' />
      <FilterRow options={CATS} active={cat} onChange={setCat} />
      <SectionHeader title="Near Golden this week" count={filtered.length} />
      {filtered.length === 0 && <div className="empty"><div className="empty-icon">🧘</div>No activities found</div>}
      {filtered.map(a => (
        <Card key={a.id} img={a.img} title={a.title} sub={`${a.venue} · ${a.day}`}
          tags={[{ label: 'Free', color: 'tag-green' }, ...a.tags.map(t => ({ label: t, color: tagColor[t] || 'tag-blue' }))]}
          url={a.url}
          right={<><span className="price-free">FREE</span><span className="dist-text">{a.dist}</span></>}
        />
      ))}
    </div>
  );
}
