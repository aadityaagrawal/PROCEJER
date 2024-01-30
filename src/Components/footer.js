import React from "react";
import facebookLogo from "../Assets/Images/facebook_icons.svg";
import instagramLogo from "../Assets/Images/instagram_icons.svg";
import twitterLogo from "../Assets/Images/twitter_icons.svg";
import youtubeLogo from "../Assets/Images/youtube_icons.svg";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start px-5 py-3">
      <div>
        <p style={{ textAlign: "justify", fontWeight: "lighter" }}>
          <b>Company Overview: </b> Procejer.com stands at the forefront of
          innovation, dedicated to delivering cutting-edge solutions for
          businesses in the ever-evolving digital landscape. As a dynamic
          technology company, we specialize in developing comprehensive ERP
          solutions tailored to meet the unique needs of small and medium-sized
          enterprises.
        </p>
        <p style={{ textAlign: "justify", fontWeight: "lighter" }}>
          <b>Our Vision: </b> At Procejer.com, we are trying to empower
          businesses through seamless digital transformation. We envision a
          future where organizations can thrive by leveraging advanced
          technologies that streamline operations, enhance productivity, and
          foster sustainable growth.
        </p>
        <p style={{ textAlign: "justify", fontWeight: "lighter" }}>
          <b>Our Mission: </b> To craft intuitive and efficient ERP solutions
          that redefine the way businesses operate. By combining our technical
          expertise with a deep understanding of industry-specific challenges,
          we aim to provide robust tools that catalyze success and innovation.
        </p>
      </div>

      <hr />
      <div className="d-flex justify-content-between">
        <a
          className="text-white"
          href="https://mdbootstrap.com/"
          style={{ fontWeight: "lighter", textDecoration: "none" }}
        >
          © 2023 Procejer.com
        </a>

        <div
          className="d-flex justify-content-between"
          style={{ width: "180px" }}
        >
          <div>
            <a href="www.facebook.com">
              <img src={facebookLogo} height={"32px"} alt="Facebook Logo"></img>
            </a>
          </div>
          <div>
            <a href="www.instagram.com">
              <img
                src={instagramLogo}
                height={"32px"}
                alt="Instagram Logo"
              ></img>
            </a>
          </div>
          <div>
            <a href="www.twitter.com">
              <img src={twitterLogo} height={"32px"} alt="Twitter Logo" />
            </a>
          </div>
          <div>
            <a href="www.youtube.com">
              <img src={youtubeLogo} height={"32px"} alt="Youtube Logo"></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
