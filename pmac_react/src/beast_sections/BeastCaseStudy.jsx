import React from 'react';
import processPng from '../assets/progress_png.png';
import locationIcon from '../assets/location_icon.png';
import testimonyPerson from '../assets/testimony-person.jpg';

function BeastCaseStudy() {
    return (
        <section id="case-studies" className="beast-case-study" style={{
            width: '100%',
            minHeight: '927.49px',
            backgroundColor: 'rgba(21, 18, 22, 1)',
            padding: '128.79px 120px 130px 120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div className="beast-case-study-container" style={{
                width: '1200px',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                gap: '60px'
            }}>
                {/* Top: About PMAC / Case Study Details */}
                <div className="about-pmac-container" style={{
                    display: 'flex',
                    gap: '60px',
                    alignItems: 'flex-start'
                }}>
                    {/* Left Container */}
                    <div className="left-container" style={{
                        width: '333px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px'
                    }}>
                        <img src={processPng} alt="Process" style={{
                            width: '333px',
                            height: '333px',
                            borderRadius: '20px',
                            objectFit: 'cover'
                        }} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px',
                            width: '333px'
                        }}>
                            <h3 style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                fontSize: '20px',
                                lineHeight: '24px',
                                color: '#fff',
                                margin: 0
                            }}>
                                PMAC Pvt.Ltd
                            </h3>
                            <div style={{
                                width: '100%',
                                height: '1px',
                                borderBottom: '1px dashed rgba(128, 121, 116, 0.4)'
                            }} />
                            <div style={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'flex-start'
                            }}>
                                <img src={locationIcon} alt="location" style={{ width: '20px', height: '20px', marginTop: '2px' }} />
                                <p style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '20.8px',
                                    color: '#fff',
                                    margin: 0
                                }}>
                                    B70/2, Sipcot Industrial Park, Irungattukottai, Sriperumpudur, Chennai - 602105
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Separator */}
                    <div style={{
                        width: '1px',
                        height: '478.17px',
                        borderRight: '1px dashed rgba(128, 121, 116, 0.4)'
                    }} />

                    {/* Right Container */}
                    <div className="pmac-about-content" style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '119.9px'
                    }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '49px' }}>
                            <h2 style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                fontSize: '38px',
                                lineHeight: '45.6px',
                                color: '#fff',
                                margin: 0
                            }}>
                                Production Line Automation – Automotive Components
                            </h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '19px' }}>
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                    <span style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '20.8px',
                                        color: 'rgba(170, 166, 162, 1)',
                                        whiteSpace: 'nowrap'
                                    }}>Challenge:</span>
                                    <p style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '20.8px',
                                        color: '#fff',
                                        margin: 0
                                    }}>
                                        Inconsistent part inspection and manual machining validation causing production delays.
                                    </p>
                                </div>
                                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                                    <span style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '20.8px',
                                        color: 'rgba(170, 166, 162, 1)',
                                        whiteSpace: 'nowrap'
                                    }}>Solution:</span>
                                    <p style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '20.8px',
                                        color: '#fff',
                                        margin: 0
                                    }}>
                                        Integrated CNC monitoring and automated inline quality inspection systems.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <span style={{
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '20.8px',
                                    color: 'rgba(112, 108, 106, 1)'
                                }}>Result :</span>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <div style={{
                                        width: 'fit-content',
                                        height: '49px',
                                        backgroundColor: 'rgba(42, 34, 47, 1)',
                                        borderRadius: '10px',
                                        padding: '10px 14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        <span style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 300,
                                            fontSize: '23.6px',
                                            color: '#fff'
                                        }}>40%</span>
                                        <span className='whitespace-nowrap' style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            color: 'rgba(196, 194, 192, 1)'
                                        }}>35% Reduction in cycle time</span>
                                    </div>
                                    <div style={{
                                        width: 'fit-content',
                                        height: '49px',
                                        backgroundColor: 'rgba(42, 34, 47, 1)',
                                        borderRadius: '10px',
                                        padding: '10px 14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        <span style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 300,
                                            fontSize: '23.6px',
                                            color: '#fff'
                                        }}>2X</span>
                                        <span style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            color: 'rgba(196, 194, 192, 1)'
                                        }}>1.8X Improvement in dimensional accuracy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#" style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20.8px',
                            color: 'rgba(196, 194, 192, 1)',
                            textDecoration: 'underline',
                            width: 'fit-content'
                        }}>
                            Read case study
                        </a>
                    </div>
                </div>

                {/* Bottom: Testimony Container */}
                <div className="testimony-container" style={{
                    width: '1200px',
                    height: '110px',
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    padding: '30px 40px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '30px'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        width: '363px'
                    }}>
                        <img src={testimonyPerson} alt="S. Karthikeyan" style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '25px',
                            objectFit: 'cover'
                        }} />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 300,
                                fontSize: '20px',
                                lineHeight: '24px',
                                color: 'rgba(21, 18, 22, 1)'
                            }}>S. Karthikeyan</span>
                            <span style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '18.2px',
                                color: 'rgba(112, 108, 106, 1)'
                            }}>Plant Operations Lead</span>
                        </div>
                    </div>

                    <p style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '20px',
                        lineHeight: '24px',
                        color: 'rgba(21, 18, 22, 1)',
                        margin: 0,
                        flex: 1
                    }}>
                        PMAC helped us standardize machining accuracy across our batch production. Our rejection rate has significantly dropped since implementation."
                    </p>
                </div>
            </div>
        </section>
    );
}

export default BeastCaseStudy;
