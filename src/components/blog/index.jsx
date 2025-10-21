import BreadcrumbTwo from "@/src/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react";
import CtaArea from "../contact/cta-area";
import BlogGrid from "./blog-grid";
import Portfolio from "./portfolio";

const Blog = () => {
  return (
    <>
      <HeaderFive />
      <main>
        <BreadcrumbTwo title={"Read our blogs"} innertitle={"Blog"} />
        <BlogGrid />
        <Portfolio />
        <CtaArea />
      </main>
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default Blog;
