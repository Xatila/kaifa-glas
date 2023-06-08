import { useEffect } from "react";

import ExpandableText from "./ExpandableText";
import "./About.css";
import { AboutText } from "../AboutText";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="component-wrapper">
      <div className="wide-picture">
        <img src="pictures/wide.jpg" alt="Wide Picture" />
      </div>
      <div className="content">
        <h2>Какво е KAIFA GLASS?</h2>
        <ExpandableText>{AboutText}</ExpandableText>
      </div>
      <div className="profile-cards">
        <div className="profile-card">
          <img src="pictures/profile1.png" alt="Profile 1" />
          <h3>Основател</h3>
          <p>Кевин Балиев - основател на "KAIFA Glass"</p>
        </div>
        <div className="profile-card">
          <img src="pictures/profile2.jpg" alt="Profile 2" />
          <h3>Съосновател</h3>
          <p>Александрина Иманова - съосновател на "KAIFA Glass"</p>
        </div>
      </div>
    </div>
  );
};

export default About;
