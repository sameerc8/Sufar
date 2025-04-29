import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    "https://th.wallhaven.cc/lg/9d/9d3181.jpg",
    "https://th.wallhaven.cc/lg/9d/9d3181.jpg",
    "https://th.wallhaven.cc/lg/9d/9d3181.jpg",
  ];

  return (
    <div className="slider-container" style={{ width: "40%", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
