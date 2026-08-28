import React, { useState } from 'react';
import { Newspaper, ArrowRight, Search, Calendar } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const articles = [
    {
      id: 1,
      title: "Brolink Reaffirms Broker Centricity Through Broker Connect as Part of Its 2030 Strategy",
      excerpt: "Unveiling our roadmap to empower South African broker partners with expanded back-office support, digital websure integration, and dedicated portfolio managers.",
      category: "Strategy",
      date: "Nov 28, 2025",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Become Cybersafe: Best Practices to Secure Your Brolink Websure Account",
      excerpt: "Essential cybersecurity guidance for brokers and administrators handling policyholder data. Learn about MFA, phishing protection, and FSCA data protocols.",
      category: "CyberSecurity",
      date: "Jun 15, 2025",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Navigating Sustainability & ESG Risks in the Short-Term Insurance Industry",
      excerpt: "How Brolink is helping insurers and brokers assess climate weather patterns, sustainable repairs, and environmental underwriting standards in South Africa.",
      category: "Sustainability",
      date: "Mar 10, 2025",
      readTime: "5 min read"
    }
  ];

  const filteredArticles = articles.filter(art => {
    const matchesQuery = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || art.category === selectedTag;
    return matchesQuery && matchesTag;
  });

  return (
    <section id="news">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Newspaper style={{ width: 16, height: 16, color: '#20a3b6' }} />
            <span>Latest News & Market Insights</span>
          </div>
          <h2 className="section-title">
            Industry Insights & <span className="text-gradient">Strategic Updates</span>
          </h2>
          <p className="section-subtitle">
            Stay informed on short-term insurance trends, regulatory changes, technology releases, and cybersecurity best practices from Brolink.
          </p>
        </div>

        {/* Search & Tag Filter Bar */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' }}>
          
          {/* Tag Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            {['All', 'Strategy', 'CyberSecurity', 'Sustainability'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`audience-tab-btn ${selectedTag === tag ? 'active' : ''}`}
                style={{ padding: '8px 20px', fontSize: '0.85rem' }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <Search style={{ width: 16, height: 16, color: 'var(--text-muted)', position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              placeholder="Search news & strategy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '10px 16px 10px 40px', borderRadius: '12px', fontSize: '13px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', outline: 'none' }}
            />
          </div>

        </div>

        {/* 3-Column Articles Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {filteredArticles.map((art) => (
            <article 
              key={art.id}
              className="news-card"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                  <span style={{ fontSize: '10px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', background: 'rgba(32, 163, 182, 0.15)', color: '#00e5ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {art.category}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    <Calendar style={{ width: 14, height: 14, color: 'var(--text-muted)' }} />
                    <span>{art.date}</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.35 }}>
                  {art.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {art.excerpt}
                </p>
              </div>

              <div style={{ paddingTop: '20px', marginTop: '24px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: '#00e5ff' }}>
                <span>{art.readTime}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Read Article
                  <ArrowRight style={{ width: 14, height: 14 }} />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
