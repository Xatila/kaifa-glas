import React, { useRef } from "react";
import "./OrderButton.css";

const OrderButton = () => {
  const ref = useRef<HTMLButtonElement>(null);
  setTimeout(() => {
    let butt = ref.current;
    butt?.classList.remove("animate");
  }, 7000);
  return (
    <button ref={ref} className="order animate">
      <span className="default">
        <svg viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
      </span>
      <div className="box"></div>
      <div className="truck">
        <div className="back"></div>
        <div className="front">
          <div className="window"></div>
        </div>
        <div className="light top"></div>
        <div className="light bottom"></div>
      </div>
      <div className="lines"></div>
    </button>
  );
};

export default OrderButton;
