import BreadcrumbFour from "@/src/common/breadcrumbs/breadcrumb-4";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react";
import IntegrationArea from "../homes/home-5/integration-area";
import FeatureArea from "../homes/home-5/feature-area";

const Integrations = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbFour />
            <FeatureArea style_integraton={true} />
            <IntegrationArea style_integraton={true}/>
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Integrations;
