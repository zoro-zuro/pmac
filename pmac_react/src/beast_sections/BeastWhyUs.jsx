import React from 'react';
import whyUsL from '../assets/why_us-l.png';
import whyUsR from '../assets/why_us-r.png';
import pointsIconBrand from '../assets/points_icon_brand.png';
import progressPng from '../assets/progress_png.png';
import contactIcon from '../assets/contact_icon.png';

function BeastWhyUs() {
    const cards = [
        {
            title: 'Precision Manufacturing Expertise',
            subtitle: 'Hands-on experience across CNC machining and component finishing environments.'
        },
        {
            title: 'End-to-End Production Support',
            subtitle: 'From prototyping to batch manufacturing and final assembly.'
        },
        {
            title: 'Process-Driven Implementation',
            subtitle: 'Reduced cycle time. Improved dimensional accuracy.'
        }
    ];

    return (
        <section className="beast-why-us" style={{
            width: '100%',
            minHeight: '888.59px',
            backgroundColor: 'rgba(248, 239, 255, 1)',
            padding: '130px 140px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Decorations */}
            <img
                src={whyUsL}
                alt="decoration"
                style={{
                    position: 'absolute',
                    top: -440,
                    left: -100,
                    width: '275px',
                    height: '1180px',
                    objectFit: 'contain',
                    zIndex: 1
                }}
            />
            <img
                src={whyUsR}
                alt="decoration"
                style={{
                    position: 'absolute',
                    bottom: -330,
                    right: -100,
                    width: '275px',
                    height: '1180px',
                    objectFit: 'contain',
                    zIndex: 1
                }}
            />

            <div className="beast-why-us-container" style={{
                width: '1160px',
                maxWidth: '1160px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0 30px',
                position: 'relative',
                zIndex: 2,
                gap: '80px' // Precise 80px gap between header and content container
            }}>
                {/* Header */}
                <div style={{
                    width: '1100px',
                    height: '204px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <h2 style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '52px',
                        lineHeight: '62.4px',
                        color: 'rgba(21, 18, 22, 1)',
                        margin: 0,
                        textAlign: 'center',
                        width: '100%'
                    }}>
                        What Makes Us The Right Choice
                    </h2>
                    <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '20.8px',
                        color: 'rgba(112, 108, 106, 1)',
                        margin: 0,
                        textAlign: 'center',
                        maxWidth: '1100px'
                    }}>
                        Our approach is engineered for high-precision manufacturing environments, combining<br />
                        domain expertise with production-driven implementation to solve real factory floor challenges.
                    </p>

                    <div style={{ marginTop: '10px' }}>
                        <a
                            href="#quote"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                backgroundColor: 'rgba(149, 80, 201, 1)',
                                padding: '20px 25px',
                                borderRadius: '20px',
                                color: '#fff',
                                textDecoration: 'none',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                fontSize: '18px',
                                width: '202px',
                                height: '60px',
                                justifyContent: 'center',
                                transition: 'transform 0.2s ease'
                            }}
                        >
                            <span className='whitespace-nowrap'>Request a Quote</span>
                            <img src={contactIcon} alt="icon" style={{ width: '16px', height: '16px', filter: 'brightness(0) invert(1)' }} />
                        </a>
                    </div>
                </div>

                {/* Content Section */}
                <div style={{
                    width: '990px',
                    height: '354.59px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '30px'
                }}>
                    {/* Row 1: Three Cards */}
                    <div style={{
                        display: 'flex',
                        gap: '30px',
                        width: '990px',
                        height: '200.59px'
                    }}>
                        {cards.map((card, index) => (
                            <div key={index} style={{
                                width: '310px',
                                height: '200.59px',
                                backgroundColor: '#fff',
                                borderRadius: '10px',
                                padding: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    width: '262px',
                                    height: '48px'
                                }}>
                                    <img src={pointsIconBrand} alt="icon" style={{ width: '18px', height: '18px' }} />
                                    <h3 style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '20px',
                                        lineHeight: '24px',
                                        color: 'rgba(21, 18, 22, 1)',
                                        margin: 0
                                    }}>
                                        {card.title}
                                    </h3>
                                </div>
                                <p style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '20.8px',
                                    color: 'rgba(112, 108, 106, 1)',
                                    margin: 0
                                }}>
                                    {card.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: One Wide Card */}
                    <div style={{
                        width: '990px',
                        height: '124px',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        padding: '12px 20px 12px 12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '50px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px',
                            width: '785.28px',
                            height: '100px'
                        }}>
                            <img
                                src={progressPng}
                                alt="Case Study"
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '5.01px',
                                    objectFit: 'cover'
                                }}
                            />
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8.9px',
                                width: '670.28px'
                            }}>
                                <h3 style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '20px',
                                    lineHeight: '24px',
                                    color: 'rgba(21, 18, 22, 1)',
                                    margin: 0
                                }}>
                                    Production workflow optimization – Automotive components
                                </h3>
                                <p style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '14px',
                                    lineHeight: '18.2px',
                                    color: 'rgba(21, 18, 22, 1)',
                                    margin: 0
                                }}>
                                    We streamlined the machining workflow for a tier-1 automotive supplier by integrating toolpath optimization and real-time machine monitoring systems.
                                </p>
                            </div>
                        </div>

                        <a href="#" style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20.8px',
                            color: 'rgba(149, 80, 201, 1)',
                            textDecoration: 'underline',
                            whiteSpace: 'nowrap'
                        }}>
                            Read case study
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BeastWhyUs;
