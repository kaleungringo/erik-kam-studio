import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { ImWhatsapp } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import './social.css';

const iconSize = "26px"; 

const whatsApp = "http://wa.me/+85259334186";
const eMail = "mailto:kam27kam27@yahoo.com.hk";
const facebook = "https://www.facebook.com/%E6%84%8F%E7%95%AB%E9%96%93-136281463133369/?ref=page_internal";
const instagram = "https://www.instagram.com/erikkamstudio/";

const Social = () => { 
    return(    
    <div className='social social__container'>
        <ul>
            <li><a href={whatsApp} target="_blank" ><ImWhatsapp size={iconSize} /></a></li>
            <li><a href={eMail} target="_blank" ><AiOutlineMail size={iconSize} /></a></li>
            <li><a href={facebook} target="_blank" ><FaFacebookSquare size={iconSize} /></a></li>
            <li><a href={instagram} target="_blank" ><FiInstagram size={iconSize} /></a></li>
        </ul>
    </div>
    )
}

export default Social
