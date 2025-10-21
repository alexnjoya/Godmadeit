import portfolio_data from '@/src/data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// Extract unique categories
const categories = [
    "all",
    ...new Set(portfolio_data.map((item) => item.category)),
];

const PortfolioGrid = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [items, setItems] = useState(portfolio_data);

    const filterItems = (cateItem) => {
        setActiveCategory(cateItem);

        if (cateItem === "all") {
            return setItems(portfolio_data);
        } else {
            const findItems = portfolio_data.filter((findItem) => {
                return findItem.category === cateItem;
            });
            setItems(findItems);
        }
    };

    return (
        <>
            <div className="tp-project-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="portfolio-filter masonary-menu text-center mb-50">
                                {categories.map((cate, i) => (
                                    <button
                                        onClick={() => filterItems(cate)}
                                        key={i}
                                        className={`${cate === activeCategory ? "active" : ""}`}
                                    >
                                        <span>{cate}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {items.map((item, i) => (
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
                </div>
            </div>
        </>
    );
};

export default PortfolioGrid;

