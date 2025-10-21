import portfolio_data from '@/src/data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PortfolioArea = () => {
    // Show first 6 portfolio items
    const featured_projects = portfolio_data.slice(0, 6);

    return (
        <>
            <div className="tp-project-area pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="tp-about__section-box text-center mb-60">
                                <h4 className="inner-section-subtitle">OUR WORK</h4>
                                <h3 className="tp-section-title">Innovative Solutions We've Built</h3>
                                <p>From startups to enterprises, we deliver world-class software solutions worldwide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {featured_projects.map((item, i) => (
                            <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                                <div className="tp-project-item p-relative">
                                    <div className="tp-project-item__img fix">
                                        <Image src={item.thumb_img} alt="project-img" style={{ width: '100%', height: 'auto' }} />
                                    </div>
                                    <div className="tp-project-item__content">
                                        <div className="tp-project-item__brand-logo mb-15">
                                            <Image src={item.brand_logo} alt="brand-logo" />
                                        </div>
                                        <span className="tp-project-item__subtitle">{item.job_title}</span>
                                        <h4 className="tp-project-item__title">
                                            <Link href="/project-details">{item.title}</Link>
                                        </h4>
                                        <p>{item.des}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-project-btn text-center mt-20">
                                <Link className="tp-btn-inner tp-btn-hover alt-color-black" href="/portfolio">
                                    <span>View All Projects</span>
                                    <b></b>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioArea;

