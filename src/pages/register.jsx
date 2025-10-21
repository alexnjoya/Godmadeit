import React from "react";
import SEO from "../common/seo";
import Register from "../components/register";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Blai - Get Started"} />
      <Register />
    </Wrapper>
  );
};

export default index;
