import React from 'react';
import systemsDecoration from '../assets/systems_decoration.png';
import systemsPng from '../assets/systems_png.png';
import icon1 from '../assets/systems_icon-1.png';
import icon2 from '../assets/systems_icon-2.png';
import icon3 from '../assets/systems_icon-3.png';
import icon4 from '../assets/systems_icon-4.png';
import icon5 from '../assets/systems_icon-5.png';
import icon6 from '../assets/systems_icon-6.png';

function BeastDigitalSection() {
  const solutions = [
    { icon: icon1, text: "CNC Process Automation" },
    { icon: icon2, text: "MES-Integrated Workflows" },
    { icon: icon3, text: "Predictive Tool Maintenance" },
    { icon: icon4, text: "Robotic Material Handling" },
    { icon: icon5, text: "Inline Quality Inspection" },
    { icon: icon6, text: "Production Data Monitoring" },
  ];

  return (
    <section className="beast-digital-section" style={{
      width: '100%',
      minHeight: '951px',
      backgroundColor: '#fff',
      padding: '130px 90px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center'
    }}>
      {/* Background Decorator */}
      <img
        src={systemsDecoration}
        alt="decoration"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%', // Cover half the section
          objectFit: 'cover',
          zIndex: 1
        }}
      />

      <div className="beast-digital-container" style={{
        width: '1260px',
        maxWidth: '1260px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Left Aligned
        padding: '0 30px',
        position: 'relative',
        zIndex: 2
      }}>
        <div className="header-content-box" style={{
          width: '720px',
          height: '531px',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          opacity: 1,
          zIndex: 2,
          boxSizing: 'border-box'
        }}>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '52px',
            lineHeight: '62.4px',
            color: 'rgba(21, 18, 22, 1)',
            margin: 0,
            textAlign: 'left',
            whiteSpace: 'nowrap'
          }}>
            Digitally Enabled Production Systems
          </h2>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '20.8px',
            color: 'rgba(112, 108, 106, 1)',
            margin: '26px 0 30px 0', // Adjusted bottom margin for gap to image
            textAlign: 'left',
            maxWidth: '680px' // Slightly reduced to fit in 720px box
          }}>
            We integrate advanced machining technologies and automated inspection platforms to help manufacturers achieve stable, high-efficiency production across complex component manufacturing environments.
          </p>

          <div style={{
            width: '720px',
            height: '370px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <img
              src={systemsPng}
              alt="Digital Systems"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        <div className="beast-digital-solutions" style={{
          marginTop: '70px',
          width: '1200px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          columnGap: '84px',
          rowGap: '30px',
          justifyContent: 'center'
        }}>
          {solutions.map((item, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                maxWidth: '446.83px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <img
                src={item.icon}
                alt="icon"
                style={{
                  width: '30px',
                  height: '30px',
                  objectFit: 'contain'
                }}
              />
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '26px',
                color: 'rgba(21, 18, 22, 1)',
                whiteSpace: 'nowrap'
              }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeastDigitalSection;
