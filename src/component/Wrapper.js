import React from "react";
import "../style/wrapperStyle.css";
function Wrapper(props) {
  const { SubTitleComp, image, style, heading, showButton, buttonText } = props;
  return (
    <div className="wrapper-container">
      <div className="wrapper-image-container">
        <img src={image} alt="" className="wrap-image" style={style}></img>
      </div>
      <div className="wrapprer-text">
        <h4 className="wrapper-heading {props.newClass}">{heading}</h4>
        {SubTitleComp ? <SubTitleComp /> : props.p}
        {showButton && <button className="wrapper-button">{buttonText}</button>}
      </div>
    </div>
  );
}

export default Wrapper;
