import React, { useEffect, useState } from "react";
import "./home.css";
import imgSlide from "./slidedata";

import { Link } from "react-router-dom";

function Home() {
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (imgIndex === 3) {
        setImgIndex(0);
      } else {
        setImgIndex(imgIndex + 1);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [imgIndex]);

  const bgStyle = {
    backgroundImage: `url(${imgSlide[imgIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };
  return (
    <>
      <div className="home">
        <div className="slide" style={bgStyle}>
          <h1>Transform Your Space with HD Design</h1>
          <p>Premium interior design solutions for modern living</p>
          <Link to="/contactme">
            <button className="contact">Contact us</button>
          </Link>
        </div>
      </div>

      <div className="services">
        <h1 className="t">OUR SERVICES</h1>
        <div className="row1">
          <div className="col1">
            <h1>Residential Design</h1>
            <p>Custom home interiors tailored to your lifestyle</p>
          </div>
          <div className="col1">
            <h1>Comertial Design</h1>
            <p>Professional workspace solutions</p>
          </div>
          <div className="col1">
            <h1>Renovation</h1>
            <p>Complete home transformation services</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
