import { useState } from "react";
import "./App.css";
import img from "./assets/image.jpg";
import { FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";

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
        <img src="./src/assets/html/html (1).png" alt="" className="imgA" />
        <img src="./src/assets/html/html (2).png" alt="" className="imgB" />
        <img src="./src/assets/html/html (3).png" alt="" className="imgC" />
        <img src="./src/assets/html/html.png" alt="" className="imgD" />
      </div>

      <div style={{ display: activeContent === 2 ? "block" : "none" }}>
        <img src="./src/assets/css/arquivo-css.png" alt="" className="imgA" />
        <img src="./src/assets/css/css-3 (1).png" alt="" className="imgB" />
        <img src="./src/assets/css/css-3.png" alt="" className="imgC" />
        <img src="./src/assets/css/css.png" alt="" className="imgD" />
      </div>

      <div style={{ display: activeContent === 3 ? "block" : "none" }}>
        <img src="./src/assets/js/arquivo-js.png" alt="" className="imgA" />
        <img src="./src/assets/js/js (1).png" alt="" className="imgB" />
        <img src="./src/assets/js/js (2).png" alt="" className="imgC" />
        <img src="./src/assets/js/js.png" alt="" className="imgD" />
      </div>
    </>
  );
}

export default App;
