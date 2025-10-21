import HeaderFive from "@/src/layout/headers/header-5";
import FooterFive from "@/src/layout/footers/footer-5"; 
import React from "react";
import RegisterArea from "./register-area";

const Register = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <RegisterArea />
          </main>
          <FooterFive style_contact={true} style_team={true} />
        </div>
      </div>
    </>
  );
};

export default Register;
