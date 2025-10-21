import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react";
import CtaArea from "../contact/cta-area";
import PortfolioGrid from "./portfolio-grid";

const Portfolio = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top="Our" title_bottom="Portfolio" />
            <HeroBanner title="Our" subtitle="Portfolio" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
            <PortfolioGrid />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;

