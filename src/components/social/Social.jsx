import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import './social.css';

const Social = () => { 
    return(    
    <>
    <p><a href="http://wa.me/+85297912938" target="_blank" ><ImWhatsapp size={24} /></a></p>
    <p><a href="mailto:kam27kam27@yahoo.com.hk" target="_blank" ><AiOutlineMail size={24} /></a></p>
    <p><a href="https://www.facebook.com/%E6%84%8F%E7%95%AB%E9%96%93-136281463133369/?ref=page_internal" target="_blank" ><FaFacebookSquare size={24} /></a></p>
    </>)
}

export default Social
