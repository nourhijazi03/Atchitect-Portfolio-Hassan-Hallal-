import React from 'react';
import "./experience.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function Experience() {
  return (
    <div className='resume section' id="resume">
        <h1 className='headingExp'>My Experience</h1>
    <div className='resumeContainer'>
        <div className='educationContainer'>
            <h1 className='hI'>Education</h1>
            <MuiAccordion>
                <MuiAccordionSummary>
                    <div className='zdivPart'>
                    <Typography fontWeight="bold" fontStyle="oblique" className='hhh'>Interior Architect</Typography>
                    <Typography><CalendarMonthIcon fontSize='xsmall'/> 2001-2006</Typography>
                    </div>
                </MuiAccordionSummary>
                <MuiAccordionDetails className='accD'>
                    <Typography>
                    Masters in interior architect at L.U.
                    </Typography>
                </MuiAccordionDetails>
            </MuiAccordion>
            <br/>
            <MuiAccordion>
                <MuiAccordionSummary className='Acc'>
                <div className='zdivPart'>
                    <Typography fontWeight="bold" fontStyle="oblique" className='hhh'>Architect</Typography>
                    <Typography><CalendarMonthIcon fontSize='xsmall'/> 1998-2001</Typography>
                </div>
                </MuiAccordionSummary>
                <MuiAccordionDetails className='accD'>
                    <Typography>
                    Amlieh technical high school.
                    </Typography>
                </MuiAccordionDetails>
            </MuiAccordion>


        </div>
        <div className='work-Container'>
            <h1 className='hI'>Work</h1>
            <MuiAccordion>
                <MuiAccordionSummary>
                <div className='zdivPart'>
                    <Typography fontWeight="bold" fontStyle="oblique" className='hhh'>3D Designer</Typography>
                    <Typography><CalendarMonthIcon fontSize='xsmall'/> 2019-2021</Typography>
                </div>
                </MuiAccordionSummary>
                <MuiAccordionDetails className='accD'>
                    <Typography>
                    Curve hospitality freelance projects.
                    </Typography>
                </MuiAccordionDetails>
            </MuiAccordion>
            <br/>
            <MuiAccordion>
                <MuiAccordionSummary>
                <div className='zdivPart'>
                    <Typography fontWeight="bold" fontStyle="oblique" className='hhh'>Interior Architect</Typography>
                    <Typography><CalendarMonthIcon fontSize='xsmall'/> 2010-current</Typography>
                </div>
                </MuiAccordionSummary>
                <MuiAccordionDetails className='accD'>
                    <Typography>
                    Interior architect and head of 3D department at Gatserlia design.
                    </Typography>
                </MuiAccordionDetails>
            </MuiAccordion>
            <br/>
            <MuiAccordion>
                <MuiAccordionSummary>
                <div className='zdivPart'>
                    <Typography fontWeight="bold" fontStyle="oblique" className='hhh'>Gulf</Typography>
                    <Typography><CalendarMonthIcon fontSize='xsmall'/> 2007-2010</Typography>
                </div>
                </MuiAccordionSummary>
                <MuiAccordionDetails className='accD'>
                    <Typography>
                    Interion architect at Al-Salam Industries.
                    </Typography>
                </MuiAccordionDetails>
            </MuiAccordion>
            
        </div>

        <div className='Extra-container'>
            <h1 className='hI'>Extras</h1>

            <MuiAccordion>
                <MuiAccordionSummary>
                <div className='zdivPart'>
                    <Typography fontWeight="bold" fontStyle="oblique" className='hhh'>Best Pub Award in Middle east and Gulf</Typography>
                    <Typography><CalendarMonthIcon fontSize='xsmall'/> 2018</Typography>
                </div>
                </MuiAccordionSummary>
                <MuiAccordionDetails className='accD'>
                    <Typography>
                    Spine Beirut design by Gatserelia design 3D.
                    </Typography>
                </MuiAccordionDetails>
            </MuiAccordion>
            <br/>
            <MuiAccordion>
                <MuiAccordionSummary>
                <div className='zdivPart'>
                    <Typography fontWeight="bold" fontStyle="oblique" className='hhh'>Art Exhibition</Typography>
                    <Typography><CalendarMonthIcon fontSize='xsmall'/> 2005</Typography>
                </div>
                </MuiAccordionSummary>
                <MuiAccordionDetails className='accD'>
                    <Typography>
                    Oil paint and photography
                    </Typography>
                </MuiAccordionDetails>
            </MuiAccordion>
            <br/>

            <MuiAccordion>
                <MuiAccordionSummary>
                <div className='zdivPart'>
                    <Typography fontWeight="bold" fontStyle="oblique" className='hhh'>Unicef Award</Typography>
                    <Typography><CalendarMonthIcon fontSize='xsmall'/> 2005</Typography>
                </div>
                </MuiAccordionSummary>
                <MuiAccordionDetails className='accD'>
                    <Typography>
                    Art fair 3<sup>rd</sup> place.
                    </Typography>
                </MuiAccordionDetails>
            </MuiAccordion>
            

            
            
        </div>
    </div>
    </div>
    
  )
}

export default Experience