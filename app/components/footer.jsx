import React from 'react'
import './footer.css'
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer_social_med">
            <a href="https://www.facebook.com/zeeshan.zeeshanprince.94"><FaFacebookF className='footer_icons'/></a>
            <a href="https://www.instagram.com/zeeshanshaniii185/"><FaInstagram className='footer_icons'/></a>
           <a href="https://twitter.com/mzeeshi187"> <FaTwitter className='footer_icons'/></a>
           <a href="https://www.linkedin.com/in/thezeeshantahir/"> <AiFillLinkedin className='footer_icons'/></a>
        </div>
        <div className="web_pages">
            <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/#about"><li>About</li></Link>
            <Link href="/#experience"><li>Experience</li></Link>
            <Link href="/#skills"><li>SKILLS</li></Link>
            <Link href="/blogs"><li>BLOGS</li></Link>
            <Link href="/contact"><li>Contact</li></Link>
            </ul>
        </div>
        <h5>© 2023 Copyright All Rights Reserved.<br />
               Created By <span>Malik Zeeshan</span></h5>
    </div>
    </>
  )
}

export default Footer