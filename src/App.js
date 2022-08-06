import React, {useState} from "react";
import Accordion from "./Accordion";
import "./styles.css";
import accordionData from "./content";
import Modal from "./Modal";
import Model1 from "./Model1";

export default function App() {


  // 0 indicates 1st will bydefualt open 
  const defaultOpen = accordionData[0].title

  const [active, setActive] = useState(defaultOpen);

  return (
    <div className="App">
      <div className="main-container">
      {
        accordionData.map((data, i) => (
          <Accordion data={data} active={active} setActive={setActive} key={i}/>
        ))
      }
      <Modal></Modal>
      <Model1></Model1>
      </div>
    </div>
  );
}
