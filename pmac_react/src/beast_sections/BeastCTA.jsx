import React from 'react';
import contactDecoration from '../assets/contact_section_decoration.png';

function BeastCTA() {
  return (
    <section id="contact" className="beast-cta-section" style={{
      width: '100%',
      backgroundColor: '#fff',
      padding: '110px 90px 130px 90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div className="beast-cta-container" style={{
        width: '1200px',
        height: '342.2px',
        backgroundColor: 'rgba(248, 239, 255, 1)',
        borderRadius: '20px',
        position: 'relative',
        display: 'flex',
        padding: '50px 50px 50px 90px',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}>
        {/* Decoration - Bottom Left */}
        <img src={contactDecoration} alt="" style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 'auto',
          height: 'auto',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Title Plate */}
        <div style={{
          width: '240px',
          zIndex: 2,
          position: 'relative',
          paddingTop: '0px'
        }}>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: '24px',
            lineHeight: '28.8px',
            color: 'rgba(21, 18, 22, 1)',
            margin: 0
          }}>
            Have production requirements? Our engineering team can help.
          </h2>
        </div>

        {/* Elements Container */}
        <div className="elements-container" style={{
          width: '770.38px',
          height: '242.2px',
          marginLeft: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '15.5px', // Adjusted to fit height
          zIndex: 2,
          position: 'relative'
        }}>
          {/* First Row: 2 Columns */}
          <div style={{
            display: 'flex',
            gap: '15px',
            height: '180.41px'
          }}>
            {/* Column Left (Inputs) */}
            <div style={{
              width: '377.69px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              <input
                type="text"
                placeholder="Full name"
                style={{
                  width: '377.69px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #fff',
                  padding: '15.5px 20px',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: 'rgba(21, 18, 22, 1)'
                }}
              />
              <input
                type="email"
                placeholder="Email address"
                style={{
                  width: '377.69px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #fff',
                  padding: '15.5px 20px',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: 'rgba(21, 18, 22, 1)'
                }}
              />
              <input
                type="text"
                placeholder="Contact number"
                style={{
                  width: '377.69px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #fff',
                  padding: '15.5px 20px',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: 'rgba(21, 18, 22, 1)'
                }}
              />
            </div>

            {/* Column Right (Textarea) */}
            <div style={{ width: '377.69px' }}>
              <textarea
                placeholder="Details"
                style={{
                  width: '377.69px',
                  height: '180.41px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #fff',
                  padding: '15px 20px',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '19.6px',
                  color: 'rgba(21, 18, 22, 1)',
                  resize: 'none'
                }}
              />
            </div>
          </div>

          {/* Second Row: Submit Button */}
          <div style={{ width: '100%' }}>
            <button style={{
              width: '100%',
              height: '46.29px', // Calculated to fit 242.2 total height
              backgroundColor: 'rgba(43, 10, 61, 1)',
              color: 'rgba(243, 243, 243, 1)',
              borderRadius: '10px',
              border: 'none',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '19.2px',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeastCTA;
