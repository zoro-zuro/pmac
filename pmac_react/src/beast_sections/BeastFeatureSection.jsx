import React from 'react';
import progressPng from '../assets/progress_png.png';
import progressIcon1 from '../assets/progress_icon-1.png';
import progressIcon2 from '../assets/progress_icon-2.png';
import progressDecoL from '../assets/progress_decoration-l.png';
import progressDecoR from '../assets/progress_decoration-r.png';

function BeastFeatureSection() {
  return (
    <section id="about" className="beast-feature-section" style={{
      backgroundColor: '#F5F0F9',
      padding: '120px 90px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Decorations */}
      <img
        src={progressDecoL}
        alt="decoration"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '400px',
          opacity: 0.8,
          pointerEvents: 'none'
        }}
      />
      <img
        src={progressDecoR}
        alt="decoration"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '400px',
          opacity: 0.8,
          pointerEvents: 'none'
        }}
      />

      <div className="container-md" style={{
        position: 'relative',
        zIndex: 2,
        display: 'flex',
        alignItems: 'center',
        gap: '60px'
      }}>
        {/* Left Image */}
        <div style={{
          flex: 1,
          borderRadius: '32px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <img
            src={progressPng}
            alt="Engineering Progress"
            style={{

              height: '570px',
              display: 'block',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Right Content */}
        <div style={{
          flex: 1.2,
          width: '570px',
          height: '570px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <h2 style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '52px',
              lineHeight: '62.4px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: '#151216',
              margin: '0 0 14px 0',
            }}>
              Engineering Progress <br />
              Through Automation
            </h2>

            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '20.8px',
              letterSpacing: '0%',
              verticalAlign: 'middle',
              color: 'rgba(21, 18, 22, 0.7)',
              margin: 0,
              maxWidth: '540px'
            }}>
              Accelerating component manufacturing using integrated CNC, robotics, and in-line inspection systems.
              Our workflows reduce cycle time, improve dimensional accuracy, and ensure batch-to-batch consistency
              across critical industrial applications.
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '24px'
          }}>
            {/* Feature 1 */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <img
                src={progressIcon1}
                alt="Expertise"
                style={{
                  width: '48px',
                  height: '48px',
                  display: 'block'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 className="whitespace-nowrap" style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: '#151216',
                  margin: 0
                }}>
                  Production-Focused Expertise
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '20.8px',
                  color: 'rgba(112, 108, 106, 1)',
                  margin: 0,
                  maxWidth: '290px'
                }}>
                  Our engineering teams bring hands-on experience in precision component manufacturing and automation-driven workflows.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              <img
                src={progressIcon2}
                alt="Engineering"
                style={{
                  width: '48px',
                  height: '48px',
                  display: 'block'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <h3 className='whitespace-nowrap' style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: '#151216',
                  margin: 0
                }}>
                  Validated Process Engineering
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '20.8px',
                  color: 'rgba(112, 108, 106, 1)',
                  margin: 0,
                  maxWidth: '290px'
                }}>
                  Tested machining strategies that improve cycle time, dimensional stability, and batch consistency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeastFeatureSection;
