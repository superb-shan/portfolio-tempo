import React from "react";

const AboutMe = () => {

  return (
    <>
    <div style={{display: "flex", width: "100%", paddingLeft: "100px", paddingRight: "100px", justifyContent: "space-around"}}>

    {/* Left Panel */}
    <div
      className="contactInfo"
    >
      <h4 className="contentTitle">Education</h4>
      <p className="infoDescription">My Education and the scores I secured </p>
      <ul className="listInfo">
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
            <i class="icon fa-solid fa-star"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Bachelor's In Computer Science & Engineering</h6>
              <span className="infoValue">8.9 CGPA</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
            <i class="icon fa-solid fa-star"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">HSC</h6>
              <span className="infoValue">94.56%</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
            <i class="icon fa-solid fa-star"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">SSLC</h6>
              <span className="infoValue">92.4%</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    {/* Right Panel */}

    <div
      className="contactInfo"
      
    >
      <h4 className="contentTitle">Languages</h4>
      <p className="infoDescription">Known languages and its proficiency in them </p>
      <ul className="listInfo">
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
            <i class="icon fa-solid fa-star"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">English</h6>
              <span className="infoValue">Full Professional Proficiency</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
            <i class="icon fa-solid fa-star"></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Tamil</h6>
              <span className="infoValue">Native or Bilingual Proficiency</span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-star "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Hindi</h6>
              <span className="infoValue">Limited Working Proficiency
              </span>
            </div>
          </div>
        </li>
        <li>
          <div className="personalContactInfo">
            <span className="infoIcon">
              <i className="icon fa-solid fa-star "></i>{" "}
            </span>
            <div className="mediaWrap">
              <h6 className="infoType">Kannada</h6>
              <span className="infoValue">Native or Bilingual Proficiency</span>
            </div>
          </div>
        </li>
      </ul>
    </div>


    </div>
    </>
  );
};

export default AboutMe;
