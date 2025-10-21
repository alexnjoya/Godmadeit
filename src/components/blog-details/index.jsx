import BreadcrumbSix from "@/src/common/breadcrumbs/breadcrumb-6";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react";
import Banner from "./banner";
import Portfolio from "./portfolio";
import PostboxArea from "./postbox-area";

const BlogDetails = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbSix />
            <Banner />
            <PostboxArea />
            <Portfolio />
          </main>
          <FooterFive style_contact={true} style_team={true} bg_style={false} />
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
