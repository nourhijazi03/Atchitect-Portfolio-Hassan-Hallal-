import React, { useState } from "react";
import "./threesixty.css";
import img1 from "./media360/img1.jpg";
import img2 from "./media360/img2.jpg";
import img3 from "./media360/img3.jpg";
import img4 from "./media360/img4.jpg";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";



function Threesixty() {
  const [img360,setImg360] = useState(
    "img1"
  );
  console.log(img360);
  return (
    <div className="section360">
      <h1>Take a tour</h1>
      <div className="container360">
        <div className="card360">
          <img src={img1} onClick={() => setImg360("img1")} alt="360" />
        </div>
        <div className="card360">
          <img src={img2} onClick={()=> setImg360("img2")} alt="360" />
        </div>
        <div className="card360">
          <img src={img3} onClick={() => setImg360("img3")} alt="360" />
        </div>
        <div className="card360">
          <img src={img4} onClick={() => setImg360("img4")} alt="360" />
        </div>
      </div>




      <div className="bdiv360">
        {img360==="img1" &&
       <div className="sdiv360">
       <ReactPhotoSphereViewer src={img1} height={'100%'} width={"100%"}
       ></ReactPhotoSphereViewer>

       </div>
        }
      {img360==="img2" &&
        <div className="sdiv360">
       <ReactPhotoSphereViewer src={img2} height={'100%'} width={"100%"}
       ></ReactPhotoSphereViewer>
        </div>
      }
      {img360==="img3" &&
        <div className="sdiv360">
       <ReactPhotoSphereViewer src={img3} height={'100%'} width={"100%"}
       ></ReactPhotoSphereViewer>
        </div>
      }

      {img360==="img4" &&
        <div className="sdiv360">
       <ReactPhotoSphereViewer src={img4} height={'100%'} width={"100%"} className="testtt"
       ></ReactPhotoSphereViewer>
        </div>
      }
  </div>
</div>
  );
}

export default Threesixty;
