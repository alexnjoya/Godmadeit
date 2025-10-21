import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react"; 
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import ServiceArea from "./service-area";

const Service = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={"Our Top"} title_bottom={"Features"} />
            <HeroBanner title="Our Top" subtitle="Features" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
            <ServiceArea /> 
            <CardArea style_service={true} />
            <SalesArea style_service={true} />
            <TestimonialArea />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Service;
