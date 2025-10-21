import React from "react";
import SEO from "../common/seo";
import Service from "../components/service";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Features"} />
      <Service />
    </Wrapper>
  );
};

export default index;
