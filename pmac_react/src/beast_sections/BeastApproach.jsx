import React from 'react';
import decorL from '../assets/approach_section_l_decoration.png';
import decorR from '../assets/approach_section_r_decoration.png';
import approachIcon from '../assets/approach_icon.png';

function BeastApproach() {
    const steps = [
        {
            number: '1',
            title: 'Production Assessment',
            text: 'We evaluate existing machining workflows, material handling systems, and quality checkpoints to identify performance gaps.'
        },
        {
            number: '2',
            title: 'Process Engineering',
            text: 'We develop optimized CNC programs and automation-ready assembly procedures for stable production output.'
        },
        {
            number: '3',
            title: 'Monitoring & Optimization',
            text: 'We continuously track machining accuracy, cycle time, and tool wear to improve long-term production efficiency'
        }
    ];

    return (
        <section className="beast-approach" style={{
            width: '100%',
            minHeight: '643.48px',
            backgroundColor: 'rgba(248, 239, 255, 1)',
            padding: '129.1px 90px 130px 90px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            {/* Decorations */}
            <img src={decorL} alt="" style={{
                position: 'absolute',
                left: -30,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '150px',
                height: '1316.22px',
                objectFit: 'contain',
                zIndex: 1
            }} />
            <img src={decorR} alt="" style={{
                position: 'absolute',
                right: -30,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '150px',
                height: '1316.22px',
                objectFit: 'contain',
                zIndex: 1
            }} />

            <div className="beast-approach-container" style={{
                width: '1260px',
                maxWidth: '1260px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0 30px',
                gap: '69.99px',
                position: 'relative',
                zIndex: 2
            }}>
                <h2 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '46px',
                    lineHeight: '55.2px',
                    color: 'rgba(21, 18, 22, 1)',
                    textAlign: 'center',
                    margin: 0,
                    maxWidth: '800px'
                }}>
                    A Structured Approach to Precision Manufacturing
                </h2>

                <div className="beast-approach-steps" style={{
                    width: '1200px',
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '140px',
                    position: 'relative'
                }}>
                    {/* Dashed Connector */}
                    <div style={{
                        position: 'absolute',
                        top: '25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '900px',
                        height: '1px',
                        borderBottom: '1px dashed rgba(149, 80, 201, 1)',
                        zIndex: 1
                    }}></div>

                    {steps.map((step, index) => (
                        <div key={index} style={{
                            width: '306.66px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '19.9px',
                            zIndex: 2
                        }}>
                            <div style={{
                                width: '80px',
                                height: '50px',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <img src={approachIcon} alt="" style={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    top: 0,
                                    left: 0,
                                    objectFit: 'contain'
                                }} />
                                <span style={{
                                    position: 'relative',
                                    fontFamily: 'Inter, sans-serif',
                                    fontWeight: 400,
                                    fontSize: '20px',
                                    color: '#fff', // From image it's white number on purple icon
                                    zIndex: 3,
                                    marginRight: 18
                                }}>{step.number}</span>
                            </div>

                            <h3 style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                fontSize: '23.8px',
                                lineHeight: '28.8px',
                                color: 'rgba(21, 18, 22, 1)',
                                textAlign: 'center',
                                margin: 0
                            }}>
                                {step.title}
                            </h3>

                            <p style={{
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '20.8px',
                                color: 'rgba(112, 108, 106, 1)',
                                textAlign: 'center',
                                margin: 0
                            }}>
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BeastApproach;
