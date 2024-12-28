import React, { useState } from 'react';
import { Media } from './workImages/workindex';
import "./work.css";
import CloseIcon from '@mui/icons-material/Close';

function Work() {
    const[file,setFile]=useState(null);
  return (
    <div className='workContainer'>
        <h1>In this gallery you can see a selection of my work. I hope you enjoy.</h1>
        <div className='workGird'>
            {Media.map((file,index)=>(
                <div className='workbox' key={index} onClick={()=>setFile(file)}>
                    <img src={file.url} alt="work"/>
                </div>

            )
            )}
        </div>

        <div className='popupWorkBox' style={{display: file?'block':"none"}}>
            <span onClick={()=>setFile(null)}><CloseIcon style={{height:"20px",width:"20px"}}/></span>
            <img src={file?.url} alt='work'/>

        </div>
    </div>
  )
}

export default Work