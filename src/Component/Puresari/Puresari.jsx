import React from "react";
import "./Puresari.css";
import sarileft from "../../assets/Kanjipuramleft.png";
import sariright from "../../assets/Kanjipuramright.png";

const Puresari = () => {
  return (
    <div className="Puresari">
      <div class="imagepuresari">
        <img src={sarileft} alt="kanjipuramleft" />
        <img src={sariright} alt="kanjipuramright" />
      </div>
      <div class="puresaritext">
        <h3 className="sariheadtext">Pure ZARI Kanchipuram</h3>
        <p className="sariparatext">Shop Now</p>
      </div>
    </div>
  );
};

export default Puresari;
