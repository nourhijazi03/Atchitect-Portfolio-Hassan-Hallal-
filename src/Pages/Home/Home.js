import React from 'react';
import "./home.css";
import TypeWriter from "typewriter-effect";
import mainimg from "./Media/mainpic.jpg"

function Home() {
  return (
    <div className='home'>
        <div className='imgsmall'>
            <img src={mainimg}/>
        </div>
    <div className='introDiv'>
        <div className='titles'>
            <h1>Hi,</h1>
            <h1>I am Hassan Hallal</h1>

        </div>
        <div className='ztext'>
            <TypeWriter options={{
                autoStart:true,
                loop:true,
                delay:40,
                strings:[
                    "I am an Interior Architect.",
                    "I am a Photographer."
                ]
            }}/>
        </div>
        <button className='contactme'>Contact Me</button>
    </div>
    <div className='imagediv'>
        <img src={mainimg}></img>
        <p className='zintro'>Interior Architect with a masters degree from institute of fine art Lebanese Univesiry
            with more than fifteen years in the field between Gulf-Lebanon and US.
        </p>
    </div>
    </div>
  )
  
}
export default Home