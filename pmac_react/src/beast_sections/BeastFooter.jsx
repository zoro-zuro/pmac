import React from 'react';
import footerBrandLogo from '../assets/footer_brand_logo.png';
import footerImg from '../assets/footer_png.jpg';
import footerCapabilities from '../assets/footer_capablities_png.jpg';
import footerArrowR from '../assets/footer_arrow-r.png';
import contactIcon from '../assets/contact_icon.png';
import mailIcon from '../assets/mail_icon.png';
import mobileIcon from '../assets/mobile_icon.png';
import locationIcon from '../assets/location_icon.png';
import social1 from '../assets/social_logo-1.png';
import social2 from '../assets/social_logo-2.png';
import social3 from '../assets/social_logo-3.png';

function BeastFooter() {
  const pages = [
    { name: 'Home', active: true },
    { name: 'About', active: false },
    { name: 'Case Studies', active: false },
    { name: 'Services', active: false },
    { name: 'Facilities', active: false },
    { name: 'Contact', active: false },
    { name: 'Capabilities', active: false },
    { name: 'Privacy Policy', active: false }
  ];

  const resources = [
    'Quality Standards', 'Process Overview', 'Compliance',
    'Error 404', 'Certifications', 'Licenses'
  ];

  return (
    <footer className="beast-footer" style={{
      width: '100%',
      minHeight: '910.61px',
      height: 'auto',
      backgroundImage: `linear-gradient(180deg, #151216 0%, rgba(21, 18, 22, 0.7) 100%), url(${footerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '70px 0',
      position: 'relative',
      overflow: 'hidden',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {/* Sticky Right Arrow */}
      <div style={{
        position: 'absolute',
        top: '240px',
        right: '27.5px',
        width: '38px',
        height: '38px',
        borderRadius: '19px',
        backgroundColor: 'rgba(42, 34, 47, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 5
      }}>
        <img src={footerArrowR} alt="next" style={{ width: '20px', height: '14px' }} />
      </div>

      <div className="footer-overall-container" style={{
        width: '1260px',
        height: 'auto',
        minHeight: '770.61px',
        maxWidth: '1260px',
        padding: '0 30px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 2,
        boxSizing: 'border-box'
      }}>
        <div className="elements-container" style={{
          width: '1200px',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '5.01px'
        }}>
          {/* Header Logos Container */}
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            height: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <img src={footerBrandLogo} alt="PMAC" style={{ width: '90.75px', height: '42px' }} />
            <div style={{ width: '98px', height: '42px', display: 'flex', gap: '10px', alignItems: 'center' }}>
              <img src={social1} alt="social" style={{ width: '26px', height: '26px' }} />
              <img src={social3} alt="social" style={{ width: '26px', height: '26px' }} />
              <img src={social2} alt="social" style={{ width: '26px', height: '26px' }} />
            </div>
          </div>

          <div style={{
            width: '100%',
            height: '1px',
            marginTop: '50px',
            backgroundImage: 'linear-gradient(to right, rgba(128, 121, 116, 0.4) 0%, rgba(128, 121, 116, 0.4) 60%, transparent 60%, transparent 100%)',
            backgroundSize: '5px 1px',
            backgroundRepeat: 'repeat-x'
          }}></div>

          {/* Cards Container */}
          <div style={{
            width: '100%',
            maxWidth: '1200px',
            height: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            marginTop: '50px'
          }}>
            <div style={{
              flex: '1 1 500px',
              height: '90px',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              padding: '20px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxSizing: 'border-box'
            }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '20px', color: '#151216' }}>Request a quote</span>
              <div style={{ width: '38px', height: '38px', borderRadius: '19px', backgroundColor: '#2A222F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={footerArrowR} alt="go" style={{ width: '20px', height: '14px' }} />
              </div>
            </div>

            <div style={{
              flex: '1 1 500px',
              height: '90px',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              padding: '20px 16px',
              display: 'flex',
              alignItems: 'center',
              boxSizing: 'border-box'
            }}>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <img src={footerCapabilities} alt="" style={{ width: '100px', height: '50px', borderRadius: '7px', objectFit: 'cover' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '19.8px', color: '#151216' }}>Explore machining capabilities</span>
              </div>
            </div>
          </div>

          {/* Footer Details */}
          <div className="footer-details-wrapper" style={{
            width: '100%',
            maxWidth: '1200px',
            marginTop: '50px',
            display: 'flex',
            gap: '60px'
          }}>
            <div className="footer-col-area" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '24px', lineHeight: '28.8px', color: '#fff', margin: 0 }}>
                  <span style={{ fontWeight: 600 }}>Subscribe</span> to receive updates on precision manufacturing technologies.
                </p>
                <div style={{ width: '100%', maxWidth: '539.5px', height: '65px', position: 'relative' }}>
                  <input type="email" placeholder="Enter your email" style={{ width: '100%', height: '65px', backgroundColor: '#151216', border: '1px solid #151216', borderRadius: '10px', padding: '22px 50px 22px 20px', color: '#C4C2C0', fontFamily: 'Inter, sans-serif', fontSize: '16px', boxSizing: 'border-box' }} />
                  <img src={contactIcon} alt="send" style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', width: '12px', height: '15px', filter: 'brightness(0) invert(1)' }} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '19px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '20px', color: '#fff' }}>Contact us</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                      <img src={mailIcon} alt="mail" style={{ width: '20px', height: '20px' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#AAA6A2' }}>info@pmacindia.com</span>
                    </div>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                      <img src={mobileIcon} alt="phone" style={{ width: '20px', height: '20px' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#AAA6A2', textDecoration: 'underline' }}>044-47193023</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18.8px', maxWidth: '280px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '20px', color: '#fff' }}>Address</span>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <img src={locationIcon} alt="location" style={{ width: '20px', height: '20px', marginTop: '2px' }} />
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: '20.8px', color: '#AAA6A2', margin: 0 }}>
                      B70/2, Sipcot Industrial Park, Irungattukottai, Sriperumpudur, Chennai - 602105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="vertical-sep" style={{ width: '2px', minHeight: '487.61px', backgroundImage: 'linear-gradient(to bottom, rgba(128, 121, 116, 0.4) 0%, rgba(128, 121, 116, 0.4) 60%, transparent 60%, transparent 100%)', backgroundSize: '2px 10px', backgroundRepeat: 'repeat-y' }}></div>

            <div className="footer-col-area" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '70px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '20px', color: '#fff' }}>Pages</span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auth-fill, minmax(120px, 1fr))', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px 40px' }}>
                    {pages.map((link, idx) => (
                      <span key={idx} style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: link.active ? '#fff' : '#AAA6A2', cursor: 'pointer' }}>{link.name}</span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '20px', color: '#fff' }}>Resources</span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px 40px' }}>
                    {resources.map((link, idx) => (
                      <span key={idx} style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', color: '#AAA6A2', cursor: 'pointer' }}>{link}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ fontFamily: 'Rubik, sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '20.8px', color: '#FFFFFF' }}>
                © 2026 PMAC Precision Systems Pvt. Ltd. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BeastFooter;
