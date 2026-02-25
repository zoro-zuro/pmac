import React from 'react';

function BeastStats() {
  const stats = [
    {
      title: "Enabling industrial output through controlled production",
      subtitle: "",
      isTextOnly: true
    },
    {
      title: "65%",
      subtitle: "Reduced machining cycle time",
      isTextOnly: false
    },
    {
      title: "30+",
      subtitle: "Automation engineers",
      isTextOnly: false
    },
    {
      title: "150k",
      subtitle: "Components produced monthly",
      isTextOnly: false
    }
  ];

  return (
    <section className="beast-stats-section" style={{
      backgroundColor: '#F5F0F9',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      borderTop: '1px dashed #706C6A',
      borderBottom: '1px dashed #706C6A',
    }}>
      <div className="beast-stats-container" style={{
        width: '1200px',
        height: '149.8px',
        display: 'flex',
        alignItems: 'center',
        borderLeft: '1px dashed #706C6A',
        borderRight: '1px dashed #706C6A',
      }}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="beast-stat-block"
            style={{
              width: index === 0 ? '340px' : '286.6px', // Adjusted to fill 1200px: 340 + (286.6 * 3) ≈ 1200
              height: '149.8px',
              padding: '40px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: index < stats.length - 1 ? '1px dashed #706C6A' : 'none',
              textAlign: 'center'
            }}
          >
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: stat.isTextOnly ? '20px' : '30.9px',
              lineHeight: stat.isTextOnly ? '26px' : '38.4px',
              color: 'rgba(21, 18, 22, 1)',
              margin: 0,
              width: '100%',
              maxWidth: index === 0 ? '300px' : '228px'
            }}>
              {stat.title}
            </div>
            {stat.subtitle && (
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '20.8px',
                color: 'rgba(112, 108, 106, 1)',
                marginTop: '4px',
                whiteSpace: 'nowrap'
              }}>
                {stat.subtitle}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BeastStats;
