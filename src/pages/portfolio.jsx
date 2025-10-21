import React from "react";
import SEO from "../common/seo";
import Portfolio from "../components/portfolio";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blai - Our Portfolio"} />
      <Portfolio />
    </Wrapper>
  );
};

export default index;

