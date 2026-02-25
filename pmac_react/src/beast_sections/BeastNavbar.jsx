import React, { useState } from 'react';
import logo from '../assets/pmac_logo.png';
import contactIcon from '../assets/contact_icon.png';

function BeastNavbar() {
  const [activeLink, setActiveLink] = useState('home');

  const arrowSvg = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5625 4.6875L8.23438 9.01562L3.89062 4.6875L2.45312 6.125L8.21875 12.1875L14 6.125L12.5625 4.6875Z" fill="#222222" />
    </svg>
  );

  return (
    <header className="beast-navbar-wrapper" style={{
      width: '100%',
      position: 'absolute',
      top: '30px',
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 10,
      opacity: 1
    }}>
      <div className="beast-navbar-container" style={{
        width: '1200px',
        height: '64px',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        boxSizing: 'border-box'
      }}>
        {/* Logo */}
        <div style={{
          width: '90.75px',
          height: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <img src={logo} alt="PMAC Logo" style={{ width: '90.75px', height: '24px', paddingRight: '1.88px', paddingLeft: '1.88px' }} />
        </div>

        {/* Elements Container (Nav Items + CTC) */}
        <div className="nav-elements" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px'
        }}>
          {/* Nav Items */}
          <nav style={{
            height: '36.8px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span
                onClick={() => setActiveLink('home')}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '20.8px',
                  color: activeLink === 'home' ? 'rgba(149, 80, 201, 1)' : 'rgba(34, 34, 34, 1)',
                  cursor: 'pointer',
                  verticalAlign: 'middle'
                }}
              >Home</span>

              {/* Facilities */}
              <div style={{
                width: '122px',
                height: '36.8px',
                marginLeft: '8px',
                marginRight: '8px',
                padding: '7.9px 18px',
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '86px',
                  height: '21px',
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: '20px',
                  boxSizing: 'border-box',
                  position: 'relative'
                }}>
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '20.8px',
                    color: activeLink === 'facilities' ? 'rgba(149, 80, 201, 1)' : 'rgba(34, 34, 34, 1)',
                    verticalAlign: 'middle',
                    whiteSpace: 'nowrap'
                  }}>Facilities</span>
                  <div style={{ position: 'absolute', right: 0 }}>{arrowSvg}</div>
                </div>
              </div>

              {/* About */}
              <span
                onClick={() => setActiveLink('about')}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '20.8px',
                  color: activeLink === 'about' ? 'rgba(149, 80, 201, 1)' : 'rgba(34, 34, 34, 1)',
                  cursor: 'pointer',
                  verticalAlign: 'middle'
                }}
              >About</span>

              {/* Case Studies */}
              <span
                onClick={() => setActiveLink('case-studies')}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '20.8px',
                  color: activeLink === 'case-studies' ? 'rgba(149, 80, 201, 1)' : 'rgba(34, 34, 34, 1)',
                  cursor: 'pointer',
                  marginLeft: '35px',
                  verticalAlign: 'middle',
                  whiteSpace: 'nowrap'
                }}
              >Case Studies</span>
            </div>
          </nav>

          {/* CTC */}
          <div style={{
            width: '156px',
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '23.4px',
              color: 'rgba(149, 80, 201, 1)',
              verticalAlign: 'middle'
            }}>Contact now</span>
            <div style={{
              width: '35px',
              height: '35px',
              borderRadius: '17.5px',
              backgroundColor: 'rgba(149, 80, 201, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img src={contactIcon} alt="contact" style={{
                width: '14px',
                height: '18px',
                filter: 'brightness(0) invert(1)',
                marginLeft: "4px"
              }} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default BeastNavbar;
