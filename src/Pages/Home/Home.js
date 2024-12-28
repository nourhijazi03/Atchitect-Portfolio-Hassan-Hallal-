import React, { useEffect, useState } from "react";
import "./home.css";
import TypeWriter from "typewriter-effect";
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
    <div className="home">
      <div className="slide" style={bgStyle}>
        <div className="caption">
          <h2 className="firm-name">HD-Design</h2>
          <Link to="/contactme">
            <button className="contact">Contact us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
