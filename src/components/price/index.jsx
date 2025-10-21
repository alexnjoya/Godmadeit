import BreadcrumbFive from "@/src/common/breadcrumbs/breadcrumb-5";
import TestimonialArea from "@/src/common/testimonial-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react";
import Brand from "../about/brand";
import CtaArea from "../contact/cta-area";
import AnswerQuestion from "../../common/answer-question";
import PlanArea from "./plan-area";
import PriceArea from "./price-area";

const Price = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbFive />
            <PriceArea />
            <PlanArea />
            <Brand />
            <TestimonialArea />
            <AnswerQuestion style_service={true}/>
             <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true}/>
        </div>
      </div>
    </>
  );
};

export default Price;
