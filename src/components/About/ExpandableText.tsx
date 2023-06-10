import { useState } from "react";

interface Props {
  children: string[];
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 516 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const showedText = children[0].substring(0, maxChars);
  const text = isExpanded ? children : showedText;
 
    const buttonStyle = {
      color: "#6237f0",
      borderRadius: "5px",
    };

  return (
    <div className="aboutInfo">
      {text} ...
      <button style={buttonStyle} onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "По-малко" : "Повече"}
      </button>
    </div>
  );
};

export default ExpandableText;
