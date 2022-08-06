import React from "react";

const Accordion = ({data, active, setActive }) => {

  const {title, content } = data

  function toggleActive(title) {
    if (active === title) {
      setActive(null);
    } else {
      setActive(title);
    }
  }

  // if u want every time one accordian bydefault open and never close pass setActive(title) on onclick fuction

  return (
    <div className="accordion">
      <div className="accordionHeading" style={{borderRadius: active === title ? '8px 8px 0 0' : '8px'}} onClick={() => toggleActive(title)}>
        <div className="container" >
          <p>{title}</p>
          <span >
            {active === title ? "-" : "+"}
          </span>
        </div>
      </div>

      <div className={(active === title ? "show" : "") + " accordionContent"}>
        <div className="container">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
