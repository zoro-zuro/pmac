import React from 'react';
import blog1 from '../assets/blogs-1.png';
import blog2 from '../assets/blogs-2.png';
import blog3 from '../assets/blogs-3.png';
import contactIcon from '../assets/contact_icon.png';

function BeastBlogs() {
    const blogPosts = [
        {
            id: 1,
            image: blog1,
            category: 'CNC Automation',
            date: 'September 12, 2025',
            title: 'Optimizing multi-axis machining for high-volume component production',
            featured: true
        },
        {
            id: 2,
            image: blog2,
            category: 'Production Analytics',
            date: 'August 24, 2025',
            title: 'Using machining data to improve dimensional stability',
            featured: false
        },
        {
            id: 3,
            image: blog3,
            category: 'Process Engineering',
            date: 'August 12, 2025',
            title: 'Improving cycle efficiency through automated tool path optimization',
            featured: false
        }
    ];

    return (
        <section className="beast-blogs-section" style={{
            width: '100%',
            backgroundColor: '#fff',
            padding: '0 90px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '110px'
            // Gap before CTC section as requested
        }}>
            <div className="blogs-container" style={{
                width: '1260px',
                maxWidth: '1260px',
                height: '587.06px',
                display: 'flex',
                flexDirection: 'column',
                gap: '70px',
                padding: '0 30px'
            }}>
                {/* Header Container */}
                <div className="header-container" style={{
                    width: '1200px',
                    height: '63px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '30px'
                }}>
                    <h2 style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '52px',
                        lineHeight: '62.4px',
                        color: 'rgba(21, 18, 22, 1)',
                        margin: 0
                    }}>
                        Manufacturing Insights & Innovation
                    </h2>
                    <button style={{
                        width: '156.22px',
                        height: '60px',
                        backgroundColor: 'rgba(149, 80, 201, 1)',
                        borderRadius: '20px',
                        padding: '20px 25px',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        cursor: 'pointer'
                    }}>
                        <span className="whitespace-nowrap" style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '17.6px',
                            color: '#fff',
                            textAlign: 'center'
                        }}>View blogs</span>
                        <img src={contactIcon} alt="icon" style={{
                            width: '14px',
                            height: '14px',
                            filter: 'brightness(0) invert(1)'
                        }} />
                    </button>
                </div>

                {/* Blogs Card Container */}
                <div className="blogs-card-container" style={{
                    width: '1200px',
                    height: '454.06px',
                    display: 'flex',
                    gap: '20px'
                }}>
                    {blogPosts.map((post, index) => {
                        const isFeatured = post.featured;
                        return (
                            <div key={post.id} style={{
                                width: isFeatured ? '505.7px' : '327.14px',
                                height: '485.06px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px'
                            }}>
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '347.66px',
                                    borderRadius: '10px',
                                    overflow: 'hidden'
                                }}>
                                    <img src={post.image} alt={post.title} style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }} />
                                    {isFeatured && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '20px',
                                            left: '20px',
                                            backgroundColor: 'rgba(149, 80, 201, 1)',
                                            borderRadius: '5.01px',
                                            padding: '4px 10px 5.2px 10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <span style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '14px',
                                                lineHeight: '18.2px',
                                                color: '#fff'
                                            }}>Featured</span>
                                        </div>
                                    )}
                                </div>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '9.4px',
                                    width: '100%'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                        height: '24px'
                                    }}>
                                        <div style={{
                                            backgroundColor: 'rgba(248, 239, 255, 1)',
                                            borderRadius: '10px',
                                            padding: '2px 7px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <span style={{
                                                fontFamily: 'Inter, sans-serif',
                                                fontWeight: 400,
                                                fontSize: '14px',
                                                lineHeight: '19.6px',
                                                color: 'rgba(149, 80, 201, 1)'
                                            }}>{post.category}</span>
                                        </div>
                                        <span style={{
                                            fontFamily: 'Inter, sans-serif',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '20.8px',
                                            color: 'rgba(112, 108, 106, 1)'
                                        }}>{post.date}</span>
                                    </div>
                                    <h3 style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontWeight: 300,
                                        fontSize: '24px',
                                        lineHeight: '28.8px',
                                        color: 'rgba(21, 18, 22, 1)',
                                        margin: 0
                                    }}>
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default BeastBlogs;
