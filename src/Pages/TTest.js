import React from 'react';
import testimg from "./img1.jpg";
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

function TTest() {
  return (
    <div>
        <h1>My Work(360 View)</h1>
        <div className='cards360'>
            <div className='card360' style={{width:"100px",height:"100px"}}>
                <img src={testimg} style={{width:"100%",height:"100%"}}/>
            </div>
        </div>
    <div style={{height:"100vh",width:"90%", margin:"auto"}}>
    <ReactPhotoSphereViewer src={testimg} height={'90%'} width={"90%"}></ReactPhotoSphereViewer>
    </div>
    </div>
  )
}

export default TTest