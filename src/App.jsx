import { useState } from "react";
import "./App.css";
import img from "./assets/image.jpg";
import { FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import html1 from "./assets/html/html (1).png";
import html2 from "./assets/html/html (2).png";
import html4 from "./assets/html/html (3).png";
import html3 from "./assets/html/html .png";
import css1 from "./assets/css/arquivo-css.png";
import css2 from "./assets/css/css-3 (1).png";
import css3 from "./assets/css/css-3.png";
import css4 from "./assets/css/css.png";
import js1 from "./assets/js/arquivo-js.png";
import js2 from "./assets/js/js (1).png";
import js3 from "./assets/js/js (2).png";
import js4 from "./assets/js/js.png";

function App() {
  const [activeContent, setActiveContent] = useState(1);

  return (
    <>
      <div className="content">
        <img src={img} alt="" />
      </div>

      <div className="botoes">
        <button onClick={() => setActiveContent(1)} className="buttHtml">
          <span className="icon">
            <FaHtml5 />
          </span>
          <span className="text">HTML</span>
        </button>
        <button onClick={() => setActiveContent(2)} className="buttCss">
          <span className="icon">
            <FaCss3Alt />
          </span>
          <span className="text">CSS</span>
        </button>
        <button onClick={() => setActiveContent(3)} className="buttJs">
          <span className="icon">
            <FaJsSquare />
          </span>
          <span className="text">JS</span>
        </button>
      </div>

      <div style={{ display: activeContent === 1 ? "block" : "none" }}>
        <div className="fudoHtml"></div>
        <img src={html1} alt="" className="imgA" />
        <img src={html2} alt="" className="imgB" />
        <img src={html3} alt="" className="imgC" />
        <img src={html4} alt="" className="imgD" />
      </div>

      <div style={{ display: activeContent === 2 ? "block" : "none" }}>
        <img src={css1} alt="" className="imgA" />
        <img src={css2} alt="" className="imgB" />
        <img src={css3} alt="" className="imgC" />
        <img src={css4} alt="" className="imgD" />
      </div>

      <div style={{ display: activeContent === 3 ? "block" : "none" }}>
        <img src={js1} alt="" className="imgA" />
        <img src={js2} alt="" className="imgB" />
        <img src={js3} alt="" className="imgC" />
        <img src={js4} alt="" className="imgD" />
      </div>
    </>
  );
}

export default App;
