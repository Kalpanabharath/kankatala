import React from "react";
import "./Categories.css";
import kanchipiram from "../../assets/kanchipuram.png";
import kalamkari from "../../assets/kalamkari.png";
import patam from "../../assets/patan.png";
import banarasi from "../../assets/banarasi.png";
import paithani from "../../assets/paithani.png";

const Categories = () => {
  return (
    <div className="categories">
      <h3 className="title">Shop Categories</h3>
      <div className="gridcontainer">
        <div className="categoriesdivone">
          <img src={kanchipiram} alt="kanchipuramimg" /> <p>Kanchipuram</p>
        </div>
        <div className="categoriesdivtwo ">
          <img src={kalamkari} alt="kalamkariimg" /> <p>Kalamkari</p>
        </div>
        <div className="categoriesdithree">
          <img src={patam} alt="patamimg" /> <p>Patan Patola</p>
        </div>
        <div className="categoriesdivfour">
          <img src={banarasi} alt="banarasiimg" /> <p>Banarasi</p>
        </div>
        <div className="categoriesdivfive">
          <img src={paithani} alt="paithaniimg" /> <p>Paithani</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
