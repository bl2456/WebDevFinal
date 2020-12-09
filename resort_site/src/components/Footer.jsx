import React from 'react'

import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
           
                        <span className='social-icon'><FaFacebook /></span>
                    
                        <span className='social-icon'><FaTwitter /></span>
                   
                        <span className='social-icon'><FaInstagram /></span>
                   
        </div>
    )
}

export default Footer;