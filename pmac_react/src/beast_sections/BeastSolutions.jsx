import React from 'react';
import solutions1 from '../assets/solutions-1.png';
import solutions2 from '../assets/solutions-2.jpg';
import solutions3 from '../assets/soutions-3.png';
import learnMoreIcon from '../assets/learnmore_icon.png';
import arrowLeftIcon from '../assets/arrow-left_icon.png';
import arrowRightIcon from '../assets/arrow-right_icon.png';

function BeastSolutions() {
  const solutions = [
    {
      title: "High-Tolerance CNC Machining",
      subtitle: "Manufacture critical components with micron-level accuracy",
      image: solutions1
    },
    {
      title: "Automated Sub-Assembly",
      subtitle: "High-precision multi-axis machining engineered for complex OEM- components.",
      image: solutions2
    },
    {
      title: "Surface Finishing & Coating",
      subtitle: "Industrial-grade anodizing, plating, and coating for enhanced durability.",
      image: solutions3
    }
  ];

  return (
    <section id="solutions" className="beast-solutions" style={{
      backgroundColor: 'rgba(21, 18, 22, 1)',
      width: '100%',
      minHeight: '931.58px',
      padding: '129px 90px 130px 90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative'
    }}>
      <div className="beast-solutions-container" style={{
        width: '1260px',
        maxWidth: '1260px',
        display: 'flex',
        flexDirection: 'column',
        padding: '0 30px',
        gap: '69.99px'
      }}>
        <h2 style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '52px',
          lineHeight: '62.4px',
          color: '#fff',
          textAlign: 'center',
          margin: 0,
          width: '100%'
        }}>
          Precision-Driven Manufacturing Solutions
        </h2>

        <div className="beast-solutions-grid-wrapper" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '35px'
        }}>
          <div className="beast-solutions-grid" style={{
            display: 'flex',
            gap: '30px',
            width: '1194px'
          }}>
            {solutions.map((sol, index) => (
              <div key={index} className="beast-solution-card" style={{
                width: '381.5px',
                height: '455.59px',
                backgroundColor: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                padding: 0,          // Override legacy CSS
                textAlign: 'left',   // Override legacy CSS
                border: 'none',       // Override legacy CSS
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  width: '381.5px',
                  height: '250px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={sol.image}
                    alt={sol.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>

                <div style={{
                  padding: '20px',
                  height: '205.59px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '36px',
                  textAlign: 'left'
                }}>
                  <div style={{
                    width: '338px',
                    height: '109.59px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8.9px'
                  }}>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 300,
                      fontSize: '24px',
                      lineHeight: '28.8px',
                      color: '#151216',
                      margin: 0,
                      textAlign: 'left'
                    }}>
                      {sol.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '20.8px',
                      color: 'rgba(112, 108, 106, 1)',
                      margin: 0,
                      textAlign: 'left'
                    }}>
                      {sol.subtitle}
                    </p>
                  </div>

                  <a href="#" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: 'rgba(149, 80, 201, 1)',
                    textDecoration: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19.2px'
                  }}>
                    <span>Learn more</span>
                    <img src={learnMoreIcon} alt="arrow" style={{ width: '14px', height: '14px', filter: 'brightness(0) saturate(100%) invert(43%) sepia(85%) saturate(824%) hue-rotate(242deg) brightness(88%) contrast(87%)' }} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            gap: '14px',
            alignSelf: 'flex-end'
          }}>
            <button style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(42, 34, 47, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: 'none',
              transition: 'background-color 0.2s ease'
            }}>
              <img src={arrowLeftIcon} alt="prev" style={{ width: '24px', height: '24px' }} />
            </button>
            <button style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(42, 34, 47, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: 'none',
              transition: 'background-color 0.2s ease'
            }}>
              <img src={arrowRightIcon} alt="next" style={{ width: '24px', height: '24px' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeastSolutions;
