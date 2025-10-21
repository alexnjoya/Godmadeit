import AboutArea from "@/src/common/about-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JourneyArea from "./journey-area";
 
const About = () => {
  return (
    <>
      <HeaderFive />
      <Breadcrumb title_top="About"  title_bottom="Blai" />
      <HeroBanner title="About" subtitle="Blai" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
      <Brand />
      <CompanyArea />
      <AboutArea />
      <JourneyArea />
      <CtaArea />
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default About;
