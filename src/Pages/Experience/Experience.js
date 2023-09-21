import React from 'react';
import "./experience.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function Experience() {
  return (
    <div className='expContainer'>
    <div className='expsection'>
        
        <div className='workexp'>
            <h1 className='tt'>Work Experience</h1>
            <div className='workdivs'>
                <div className='workdiv'>
                    <div className='worktitles'>
                    <h3>3D Designer</h3>
                    <h5><CalendarMonthIcon fontSize='small'/> 2019-2021</h5>
                    </div>
                    <p>Curve hospitality freelance projects.</p>
                </div>

                <div className='workdiv'>
                <div className='worktitles'>
                    <h3>Interior Architect</h3>
                    <h5><CalendarMonthIcon fontSize='small'/> 2010-current</h5>
                    </div>
                    <p>Interior architect and head of 3D department at Gatserlia design.</p>
                </div>

                <div className='workdiv'>
                <div className='worktitles'>
                    <h3>Gulf</h3>
                    <h5><CalendarMonthIcon fontSize='small'/> 2007-2010</h5>
                </div>
                    <p>Interion architect at Al-Salam Industries.</p>
                </div>

            </div>
        </div>

        <div className='edu workexp'>
            <h1 className='tt'>Education</h1>
            <div className='edudivs workdivs'>
                <div className='edudiv workdiv'>
                <div className='worktitles'>
                    <h3>Interior Architect</h3>
                    <h5><CalendarMonthIcon fontSize='small'/> 2007-2010</h5>
                </div>
                    <p>Masters in interior architect at L.U.</p>
                </div>

                <div className='edudiv workdiv'>
                <div className='worktitles'>
                    <h3>Architect</h3>
                    <h5><CalendarMonthIcon fontSize='small'/> 1998-2001</h5>
                </div>
                    <p>Amlieh technical high school.</p>
                </div>
            </div>
        </div>
    </div>
    <hr/>
    <div className='extras'>
        Extras
    </div>


    </div>
  )
}

export default Experience