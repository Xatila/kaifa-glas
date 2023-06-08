import { useEffect } from "react";
import ExpandableText from "./ExpandableText";
import "./About.css";
import { AboutText } from "../AboutText";
import wide from "../../pictures/wide.jpg";
import theGiff from "../../pictures/Aboutgiff.gif";
import picture1 from "../../pictures/aboutPic1.jpg";
import picture2 from "../../pictures/aboutPic2.jpg";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="component-wrapper">
      <div className="wide-picture">
        <img src={wide} alt="Wide Picture" />
      </div>
      <div className="content">
        <h2>Какво е KAIFA GLASS?</h2>
        <ExpandableText>{AboutText}</ExpandableText>
      </div>
      <div className="picture-container">
        <img src={picture1} alt="" />
        <h1 style={{ textAlign: "center", padding:10 }}>
          Amazing Quality On Amazing Price, Welcome!
        </h1>
        <img src={picture2} alt="" />
      </div>
      <div className="profile-cards">
        <div className="profile-card">
          <img src={theGiff} alt="Giff" />
          <h3>Наистина здрави</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
