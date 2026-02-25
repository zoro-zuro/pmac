import React from 'react';
import industry1 from '../assets/industries-1.jpg';
import industry2 from '../assets/industries-2.png';
import industry3 from '../assets/industries-3.png';
import industry4 from '../assets/industries-4.png';
import pointsIconGray from '../assets/points_icon_gray.png';

function BeastIndustries() {
  const industries = [
    {
      title: "Agriculture",
      image: industry1,
      points: ["Precision components", "CNC machined", "Quality control"]
    },
    {
      title: "Oil and Gas",
      image: industry2,
      points: ["Mounting fixtures", "Machined items", "Critical tolerance"]
    },
    {
      title: "Locomotive Industry",
      image: industry3,
      points: ["Brake piston", "Housings", "Cylinders"]
    },
    {
      title: "Medical Devices",
      image: industry4,
      points: ["Grid Infrastructure", "Windmill", "General engineering"]
    }
  ];

  return (
    <section id="industries" className="beast-industries" style={{
      width: '100%',
      minHeight: '1323.06px',
      backgroundColor: 'rgba(21, 18, 22, 1)',
      padding: '130px 0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      boxSizing: 'border-box'
    }}>
      <div className="beast-industries-container" style={{
        width: '100%',
        maxWidth: '1260px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 30px',
        gap: '70px',
        boxSizing: 'border-box'
      }}>
        <h2 style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '52px',
          lineHeight: '62.4px',
          color: 'rgba(255, 255, 255, 1)',
          textAlign: 'center',
          margin: 0
        }}>
          Engineered For Critical Industries
        </h2>

        <div className="beast-industries-cards" style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          columnGap: '30px',
          rowGap: '25px',
          justifyContent: 'center'
        }}>
          {industries.map((ind, index) => (
            <div key={index} className="beast-industry-card" style={{
              width: '100%',
              maxWidth: '585px',
              backgroundColor: 'rgba(42, 34, 47, 0.25)',
              borderRadius: '20px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              boxSizing: 'border-box',
              margin: '0 auto'
            }}>
              <img
                src={ind.image}
                alt={ind.title}
                style={{
                  width: '100%',
                  height: '317.91px',
                  borderRadius: '10px',
                  objectFit: 'cover'
                }}
              />
              <h3 style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '32px',
                color: '#fff',
                margin: 0
              }}>
                {ind.title}
              </h3>
              <div style={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                {ind.points.map((point, pIndex) => (
                  <div key={pIndex} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <img src={pointsIconGray} alt="point" style={{ width: '14px', height: '14px' }} />
                    <span style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '22.4px',
                      color: 'rgba(255, 255, 255, 0.7)',
                      whiteSpace: 'nowrap'
                    }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeastIndustries;
