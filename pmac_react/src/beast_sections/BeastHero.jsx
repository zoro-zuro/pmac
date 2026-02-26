import React from 'react';
import BeastNavbar from './BeastNavbar';
import heroImage from '../assets/hero_png.jpg';
import pointsIcon from '../assets/points_icon_brand.png';
import contactIcon from '../assets/contact_icon.png';
import pauseIcon from '../assets/pause_icon.png';

function BeastHero() {
  const points = [
    'Industrial Robotics Integration',
    'Inline Quality Control',
    'Automated Assembly',
    'High-Tolerance Machining'
  ];

  return (
    <section className="beast-hero-section" style={{
      width: '100%',
      height: '961.4px',
      marginTop: '-4px', // top: -4px
      backgroundColor: '#151216',
      opacity: 1,
      paddingTop: '170px',
      paddingRight: '90px',
      paddingBottom: '100px',
      paddingLeft: '90px',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      {/* Navbar integrated into the section */}
      <BeastNavbar />

      {/* Hero Overall Container */}
      <div className="hero-overall-container" style={{
        width: '1260px',
        height: '702px',
        maxWidth: '1260px',
        paddingRight: '30px',
        paddingLeft: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        opacity: 1,
        boxSizing: 'border-box',
        zIndex: 2
      }}>
        {/* Hero Header */}
        <div className="hero-header" style={{
          width: '1200px',
          height: '154px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          opacity: 1
        }}>
          {/* Title */}
          <h1 style={{
            width: '769.57px', // Increased width to fit 2 lines perfectly
            margin: 0,
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: '64px',
            lineHeight: '76.8px',
            color: '#FFFFFF',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            whiteSpace: 'pre' // Using 'pre' to respect exact line breaks and avoid unexpected wrapping
          }}>
            Tech-Driven{'\n'}
            Precision Manufacturing
          </h1>

          {/* Right Container */}
          <div style={{
            width: '430.43px',
            height: '95.8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '14px',
            opacity: 1
          }}>
            {/* Request a Quote Button */}
            <div className='hero-header-button' style={{
              width: '207px',
              height: '60px',
              maxWidth: '430.42px',
              borderRadius: '20px',
              backgroundColor: 'rgba(149, 80, 201, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 25px',
              gap: '10px',
              cursor: 'pointer',
              boxSizing: 'border-box',
              opacity: 1
            }}>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '17.6px',
                color: '#FFFFFF',
                textAlign: 'center',
                verticalAlign: 'middle'
              }}>Request a Quote</span>
              <img src={contactIcon} alt="icon" style={{ width: '14px', height: '20px', opacity: 1 }} />
            </div>

            {/* Subtext */}
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '20.8px',
              color: '#FFFFFF',
              verticalAlign: 'middle',
              textAlign: 'right'
            }}>
              From CNC machining to automated sub-assembly lines
            </span>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="hero-image-container" style={{
          width: '1200px',
          height: '500px',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden',
          opacity: 1
        }}>
          <img src={heroImage} alt="Hero" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />

          {/* Points Overlay */}
          <div className="points-overlay" style={{
            position: 'absolute',
            bottom: '12px',
            left: '20px',
            width: '876px',
            height: '48px',
            borderRadius: '20px',
            backgroundColor: 'rgba(21, 18, 22, 0.2)',
            backdropFilter: 'blur(2px)',
            padding: '10px 15px',
            display: 'flex',
            gap: '10px',
            boxSizing: 'border-box',
            opacity: 1
          }}>
            {points.map((point, index) => (
              <div key={index} style={{
                height: '28px',
                minWidth: 'fit-content',
                borderRadius: '20px',
                backgroundColor: '#FFFFFF',
                padding: '4px 10px 5px 10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxSizing: 'border-box'
              }}>
                <img src={pointsIcon} alt="point" style={{ width: '14px', height: '14px' }} />
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '18.2px',
                  color: 'rgba(21, 18, 22, 1)',
                  verticalAlign: 'middle',
                  whiteSpace: 'nowrap'
                }}>{point}</span>
              </div>
            ))}
          </div>

          {/* Pause Button Overlay */}
          <div className='hero-image-pause-button'
            style={{
              position: 'absolute',
              bottom: '12px',
              right: '20px',
              width: '40px',
              height: '40px',
              borderRadius: '20px',
              backgroundColor: 'rgba(21, 18, 22, 0.2)',
              backdropFilter: 'blur(2px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              opacity: 1
            }}>
            <img src={pauseIcon} alt="pause" style={{
              width: '12px',
              height: '20.8px',
              paddingTop: '2.84px',
              paddingBottom: '1.96px',
              boxSizing: 'border-box'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeastHero;
