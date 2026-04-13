import React, { useState } from 'react';
import { SectionHeader, FilterRow, Banner, HHThumb } from './UI';
import { almostFree } from '../data';

const CATS = ['All Deals', 'Food', 'Activities', 'Fitness', 'Entertainment', 'Experiences'];

export default function AlmostFreeTab() {
  const [cat, setCat] = useState('All Deals');
  const [aiQuery, setAiQuery] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  const filtered = almostFree.filter(a =>
    cat === 'All Deals' || a.category === cat
  );

  const savings = a => Math.round((1 - a.now / a.was) * 100);

  const askAI = async () => {
    if (!aiQuery.trim()) return;
    setAiLoading(true);
    setAiResult('');
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `You are a helpful local deals assistant for the Denver, CO area. The user is in Golden, CO. Help them find amazing deals and almost-free experiences nearby. Be concise and specific — 2-3 sentences max.`,
          messages: [{ role: 'user', content: aiQuery }],
        }),
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === 'text')?.text || 'No response';
      setAiResult(text);
    } catch {
      setAiResult('Could not connect. Add your API key in Vercel environment variables.');
    }
    setAiLoading(false);
  };

  return (
    <div>
      <Banner variant="amber" label="Almost Free" title="Deals too good to pass up" sub="Hyper-local offers near Golden, CO" />

      <div className="ai-bar">
        <input
          className="ai-input"
          placeholder="Ask AI: 'best deal for date night?'"
          value={aiQuery}
          onChange={e => setAiQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && askAI()}
        />
        <button className="ai-btn" onClick={askAI} disabled={aiLoading}>
          {aiLoading ? '...' : '✦ Ask'}
        </button>
      </div>

      {aiLoading && (
        <div className="ai-result">
          <div className="ai-result-label">AI is thinking</div>
          <div className="loading-dots"><span /><span /><span /></div>
        </div>
      )}
      {aiResult && !aiLoading && (
        <div className="ai-result">
          <div className="ai-result-label">✦ AI Recommendation</div>
          {aiResult}
        </div>
      )}

      <FilterRow options={CATS} active={cat} onChange={setCat} />
      <SectionHeader title="Near you" count={filtered.length} />

      {filtered.length === 0 && (
        <div className="empty"><div className="empty-icon">💸</div>No deals found</div>
      )}

      {filtered.map(a => (
        <a
          key={a.id}
          href={a.url}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <div className="card-row">
            <HHThumb img={a.img} title={a.title} />
            <div className="almost-body">
              <div className="almost-title">{a.title}</div>
              <div className="almost-sub">{a.venue} · {a.dist} · {a.detail}</div>
              <div className="price-row">
                <span className="price-was">${a.was}</span>
                <span className="price-now">${a.now}</span>
                <span className="save-badge">Save {savings(a)}%</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
