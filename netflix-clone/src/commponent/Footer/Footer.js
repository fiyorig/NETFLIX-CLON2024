import React from 'react'
import "./footer.css"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icons'>
          < FacebookOutlinedIcon/>
          <InstagramIcon />
          < YouTubeIcon />
           </div>
          <div className='footer-data'>
            <div>
              <ul>
                <li>Audio Discription</li>
                <li>Invester Relations</li>
                <li> Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preference</li>
              </ul>
            </div>
            <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
            </div>
         <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact us</li>
          </ul>
        </div>
        </div>
        <div Class className='Service-code'>
          <p>
            Service code
          </p>
          </div >
          <div className='Copy-write'>
            &copy;1997-2024 Netflix,Inc.
          </div>
    
      </div>
    </div>

  )
}
export default Footer