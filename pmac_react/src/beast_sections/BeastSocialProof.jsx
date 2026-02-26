import React from 'react';
import productionHead from '../assets/production_head.jpg';
import arrowL from '../assets/about_arrow-l.png';
import arrowR from '../assets/about_arrow-r.png';
import decorator from '../assets/about_img_decorator.png';
import brand0 from '../assets/trusted_company-0.png';
import brand1 from '../assets/trusted_company-1.png';
import brand2 from '../assets/trusted_company-2.png';
import brand3 from '../assets/trusted_company-3.png';
import brand4 from '../assets/trusted_company-4.png';
import brand5 from '../assets/trusted_company-5.png';
import trustedIcon from '../assets/trusted_icon-0.png';

function BeastSocialProof() {
    const brands = [trustedIcon, brand0, brand1, brand2, brand3, brand4, brand5];

    return (
        <section className="beast-social-proof" style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: '130px 90px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative'
        }}>
            <div style={{
                width: '1260px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {/* About Container (Testimonial) */}
                <div className="about-container" style={{
                    width: '1260px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '40px'
                }}>
                    {/* Content Left */}
                    <div className="content-container" style={{
                        width: '820px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '59.99px'
                    }}>
                        <p style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 300,
                            fontSize: '38px',
                            lineHeight: '45.6px',
                            color: 'rgba(21, 18, 22, 1)',
                            margin: 0
                        }}>
                            PMAC significantly improved our component consistency and reduced our machining lead time across multiple production batches.
                        </p>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '820px'
                        }}>
                            <div className='about-testimony-person-details' style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <img src={productionHead} alt="Production Head" style={{
                                    display: 'none',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '4px',
                                    objectFit: 'cover',
                                    marginBottom: '8px'
                                }} />
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px'
                                }}>

                                    <span className='about-testimony-person-details-name' style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 500,
                                        fontSize: '20px',
                                        lineHeight: '24px',
                                        color: 'rgba(21, 18, 22, 1)'
                                    }}>M. Sundari</span>
                                    <span className='about-testimony-person-details-position' style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 400,
                                        fontSize: '16px',
                                        lineHeight: '20.8px',
                                        color: 'rgba(112, 108, 106, 1)'
                                    }}>Production head</span>
                                </div>

                            </div>

                            <div style={{ display: 'flex', gap: '12px' }}>
                                <div style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '19px',
                                    backgroundColor: 'rgba(248, 239, 255, 1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <img src={arrowL} alt="prev" style={{ width: '14px', height: '14px' }} />
                                </div>
                                <div style={{
                                    width: '38px',
                                    height: '38px',
                                    borderRadius: '19px',
                                    backgroundColor: 'rgba(248, 239, 255, 1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}>
                                    <img src={arrowR} alt="next" style={{ width: '14px', height: '14px' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="testimony-lap-image" style={{
                        width: '330px',
                        height: '292.17px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img src={decorator} alt="" style={{
                            position: 'absolute',
                            width: '329.98px',
                            height: '282.84px',
                            zIndex: 1
                        }} />
                        <div style={{
                            width: '210px',
                            height: '210px',
                            borderRadius: '20px',
                            backgroundColor: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2,

                        }}>
                            <img src={productionHead} alt="Production Head" style={{
                                width: '170px',
                                height: '170px',
                                borderRadius: '10px',
                                objectFit: 'cover'
                            }} />
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="about-separator" style={{
                    width: '100%',
                    height: '1px',
                    borderBottom: '1px dashed rgba(112, 108, 106, 1)',
                    margin: '50px 0'
                }}></div>

                {/* Trusted Brand Container */}
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <span style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '20.8px',
                        color: 'rgba(112, 108, 106, 1)'
                    }}>
                        Trusted manufacturing partner to leading OEMs and Tier-1 suppliers.
                    </span>

                    <div style={{
                        width: '1200px',
                        height: '70px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {/* Fades */}
                        <div style={{
                            position: 'absolute',
                            left: 0,
                            top: '-10px',
                            width: '90px',
                            height: '90px',
                            background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 65%)',
                            zIndex: 3,
                            pointerEvents: 'none'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            right: 0,
                            top: '-10px',
                            width: '90px',
                            height: '90px',
                            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 65%)',
                            zIndex: 3,
                            pointerEvents: 'none'
                        }}></div>

                        <div style={{
                            display: 'flex',
                            gap: '45px',
                            width: '100%',
                            justifyContent: 'space-between'
                        }}>
                            {brands.map((brand, idx) => (
                                <div key={idx} style={{
                                    width: '137px',
                                    height: '70px',
                                    borderRadius: '10px',
                                    border: '1px dashed rgba(128, 121, 116, 0.4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '15px'
                                }}>
                                    <img src={brand} alt={`brand-${idx}`} style={{
                                        maxWidth: '87px',
                                        maxHeight: '40px',
                                        objectFit: 'contain',
                                        opacity: 0.8
                                    }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BeastSocialProof;
