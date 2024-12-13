import React from "react";
import "./satiabovekaha.css";
import lakhone from "../../assets/lakhone.png";
import lakhtwo from "../../assets/lakhtwo.png";
import lakhthree from "../../assets/lakhthree.png";
import lakhborder from "../../assets/lakhborder.png";

const Sariabovekaha = () => {
  return (
    <div className="sariabovekaha">
      <div class="imagesari">
        <div class="kahaone">
          <img src={lakhone} alt="lakhimg" />
          <p>Printed Sarees</p>
        </div>
        <div class="kahatwo">
          <img src={lakhtwo} alt="lakhtwo" />
          <h3 className="title">SAREES ABOVE LAKH</h3>
        </div>
        <div class="kahathree">
          <img src={lakhthree} alt="lakhthree" />
          <p>Sarees under 10,000</p>
        </div>
      </div>
      <img src={lakhborder} alt="" className="sariabovekahaimgboredre" />
    </div>
  );
};

export default Sariabovekaha;
