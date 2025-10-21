import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5"; 
import React from "react";
import SingnInArea from "./singn-in-area";

const SignIn = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <SingnInArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default SignIn;
