import VideoPopup from '@/src/modals/video-popup';
import React,{useState} from 'react';

const company_content ={
    sub_title:  "ABOUT BLAI",
    title: <>Building the Future <br />from Accra, Ghana</>,
    info_1: <>Blai is a worldwide custom software development and consulting company based in Accra, Ghana. We are committed to meeting the highest ethical standards by implementing world-class software solutions without compromising their quality or functionality.</>,
    info_2: <>We specialize in web and mobile app development, AI-powered tools, and blockchain-based systems, helping businesses innovate and stay competitive in a rapidly evolving digital landscape.</>,
    info_3: <>Our mission is to bridge cutting-edge technologies with real-world applications, empowering startups, enterprises, and organizations to launch impactful digital products.</>,
}
const {sub_title, title, info_1, info_2, info_3}  = company_content


const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="ab-company-area pt-105 pb-100">
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{info_1}</p>
                              <p className="pb-10">{info_2}</p>
                              <p><span>{info_3}</span></p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xl-4">
                        <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div>
                     </div>
                     <div className="col-xl-8">
                        <div className="row">

                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                                 <div className="ab-company-fun-fact">
                                    <span>SERVICES</span>
                                    <h4>5<em>+</em></h4>
                                    <p>Core Offerings</p>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>EXPERTISE</span>
                                    <h4>100<em>%</em></h4>
                                    <p>Quality Guarantee</p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-4 col-sm-4 mb-40">
                              <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                                 <div className="ab-company-fun-fact">
                                    <span>REACH</span>
                                    <h4>Global</h4>
                                    <p>Worldwide Service</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;