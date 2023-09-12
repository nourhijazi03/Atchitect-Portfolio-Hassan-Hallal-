import React from 'react';
import "./skills.css";
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import MovieIcon from '@mui/icons-material/Movie';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import BrushIcon from '@mui/icons-material/Brush';
function Skills() {
  return (
    <div className='skillscontainer'>
    <div className='skillsdiv'>
        <div className='skillsTitle'>
            <h1>My Skills</h1>
        </div>
        <div className='skillsItems'>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Photohraphy</p>
                    <p>100%</p>
                </div>
                <div className='progressSkill' data-percent="100%">
                    <span style={{width:"100%"}}></span>
                </div>
            </div>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Design</p>
                    <p>100%</p>
                </div>
                <div className='progressSkill' data-percent="100%">
                    <span style={{width:"100%"}}></span>
                </div>
            </div>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>3Dsmax</p>
                    <p>100%</p>
                </div>
                <div className='progressSkill' data-percent="100%">
                    <span style={{width:"100%"}}></span>
                </div>
            </div>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Photoshop</p>
                    <p>100%</p>
                </div>
                <div className='progressSkill' data-percent="100%">
                    <span style={{width:"100%"}}></span>
                </div>
            </div>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Zbrush</p>
                    <p>100%</p>
                </div>
                <div className='progressSkill' data-percent="100%">
                    <span style={{width:"100%"}}></span>
                </div>
            </div>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Autocad</p>
                    <p>100%</p>
                </div>
                <div className='progressSkill' data-percent="100%">
                    <span style={{width:"100%"}}></span>
                </div>
            </div>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Corel Painter</p>
                    <p>70%</p>
                </div>
                <div className='progressSkill' data-percent="70%">
                    <span style={{width:"70%"}}></span>
                </div>
            </div>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Adobe after effect</p>
                    <p>80%</p>
                </div>
                <div className='progressSkill' data-percent="80%">
                    <span style={{width:"80%"}}></span>
                </div>
            </div>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Free Hand Sketch</p>
                    <p>90%</p>
                </div>
                <div className='progressSkill' data-percent="90%">
                    <span style={{width:"90%"}}></span>
                </div>
            </div>

            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Character Design</p>
                    <p>80%</p>
                </div>
                <div className='progressSkill' data-percent="80%">
                    <span style={{width:"80%"}}></span>
                </div>
            </div>
            <div className='skillsItem'>
                <div className='skillsInfo'>
                    <p>Cinema 4D</p>
                    <p>70%</p>
                </div>
                <div className='progressSkill' data-percent="70%">
                    <span style={{width:"70%"}}></span>
                </div>
            </div>
        </div>
        <div className='skillsIcon' style={{color:"white"}}>
            <MotionPhotosAutoIcon style={{fontSize:"33px"}}/>
            <MovieIcon style={{fontSize:"33px"}}/>
            <ThreeDRotationIcon style={{fontSize:"33px"}}/>
            <ViewInArIcon style={{fontSize:"33px"}}/>
            <BrushIcon style={{fontSize:"33px"}}/>

        </div>
    </div>
    </div>
  )
}

export default Skills