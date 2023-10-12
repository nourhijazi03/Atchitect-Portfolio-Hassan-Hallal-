import React from 'react';
import "./footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div className='footerCon'>

<div className='footericon'>
        <a href='https://www.facebook.com/hallal1981' target='_blank'>
        <FacebookIcon className='fbicon'/>
        </a>
        
        <a href='https://wa.me/+96170977367' target='_blank'>
        <WhatsAppIcon className='whicon'/>
        </a>

        <a href='https://www.linkedin.com/in/hassan-hallal-7a306391/' target='_blank'>
        <LinkedInIcon className='fbicon'/>
        </a>
        </div>
        


        <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by 
         <a href="https://www.linkedin.com/in/nour-hijazi-52324ba7/" target='_blank' className='nour'> Nour.H </a>.
        </p>
        
    </div>
  )
}

export default Footer