import React from "react";
import "./Arival.css";
import sarione from "../../assets/sarione.png";
import saritwo from "../../assets/saritwo.png";
import sarithree from "../../assets/sarithree.png";
import sarifour from "../../assets/sarifour.png";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Arivals = () => {
  let slide = [
    {
      sale: "50% sale",
      isFav: false,
      name: "Kanchipuram Silk Checks And Butta Purple Saree",
      price: "Rs 34,000",
      mrp: "Rs 65,000",
      img: sarione,
    },
    {
      sale: "50% sale",
      isFav: false,
      name: "Kanchipuram Silk Checks And Butta Purple Saree",
      price: "Rs 34,000",
      mrp: "Rs 65,000",
      img: saritwo,
    },
    {
      sale: "50% sale",
      isFav: false,
      name: "Kanchipuram Silk Checks And Butta Purple Saree",
      price: "Rs 34,000",
      mrp: "Rs 65,000",
      img: sarithree,
    },
    {
      sale: "50% sale",
      isFav: false,
      name: "Kanchipuram Silk Checks And Butta Purple Saree",
      price: "Rs 34,000",
      mrp: "Rs 65,000",
      img: sarifour,
    },
  ];

  return (
    <div className="arival">
      <h3 className="title">SHOP NEW ARRIVALS</h3>

      <Splide
        options={{
          rewind: true, // Allows to rewind (go back to the first slide)
          gap: "0.5rem", // Space between slides
          wrap: true, // Enable looping through the slides
          perPage: 4,
          arrows: false, // Disables the navigation arrows
          breakpoints: {
            1200: {
              perPage: 4, // Show 4 slides for large screens
            },
            800: {
              perPage: 3, // Show 3 slides for medium screens
            },
            600: {
              perPage: 2, // Show 2 slides for small screens
            },
            480: {
              perPage: 1, // Show 1 slide for very small screens
            },
          },
        }}
      >
        {slide.map((data, index) => (
          <SplideSlide key={index}>
            <div className="singleSlide">
              <div className="imageslide">
                <img src={data.img} alt="sariimage" />
                <div className="saleheart">
                  <p className="sale">{data.sale}</p>
                  {data.isFav ? (
                    <IoHeartSharp className="hearticon" />
                  ) : (
                    <IoHeartOutline className="hearticon" />
                  )}
                </div>
              </div>
              <div className="slidetext">
                <p>{data.name}</p>
                <div className="slideamount">
                  <p>{data.price}</p>
                  <p className="overridetext">{data.mrp}</p>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Arivals;
