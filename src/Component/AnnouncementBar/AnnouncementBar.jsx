import React from "react";
import "./AnnouncementBar.css";
import AnnouncementBarimg from "../../assets/AnnouncementBar.png";

const AnnouncementBar = () => {
  return (
    <div className="AnnouncementBar">
      <div className="overflow ">
        <p>
          <img src={AnnouncementBarimg} alt="AnnouncementBarpic" /> Free
          Shipping within India !
        </p>
        <p>Free International shipping on orders above Rs. 29,999</p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
