import React from 'react';
import Helmet from 'react-helmet';
import './contact.css';
import { BiBus } from 'react-icons/bi';
import { GiRailRoad } from 'react-icons/gi';
import Social from '../../components/social/Social';

const Contact = () => {
    return (
<section className='contact container__content-regular'>
        <Helmet>
            <title>意畫間|聯絡我們</title>
            <meta
                name="description"
                content="意畫間 ERIK KAM'S STUDIO
                位置於香港屯門的畫室。
                地址：屯門良田邨62號地鋪
                電話：(+852) 5933 4186
                "
            />
            <meta
                name="keywords"
                content="意畫間,Erik Kam,Erik Kam Studio,香港畫家,畫室,屯門,新墟,教育,藝術,繪畫,課程"
            />
        </Helmet>
    <h1>意畫間-聯絡我們</h1>
    <iframe class="map"src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d461.0994358816664!2d113.977844!3d22.399066!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403fb1898b6272f%3A0xf8b8187697330b61!2z6aaZ5riv5paw5aKf5paw56eA6KGX6Imv55Sw5p2RNjLomZ8!5e0!3m2!1szh-TW!2sca!4v1644030583897!5m2!1szh-TW!2sca" 
    style={{border:0}} 
    allowfullscreen="" 
    loading="lazy">
    </iframe>
    <section className='transportation'>
        <h3>交通</h3>
        <ul>
        <GiRailRoad size={24}/><li>輕鐵</li><li>614/614P（往屯門碼頭方向）</li><li>新墟站</li> 
        <BiBus size={24}/><li>巴士</li><li>58X/58M/63X/260X/960/K51</li><li>紅橋站</li> 
        </ul>
    </section>
    <section className='hours hours__container'>
        <h3>營業時間</h3>
        <div className='hours__row'>
            <ul>
            <li>Mon</li><li>10:00 to 21:00</li>
            <li>Tue</li><li>10:00 to 21:00</li>
            <li>Wed</li><li>10:00 to 21:00</li>
            <li>Thur</li><li>10:00 to 21:00</li>
            <li>Fri</li><li>10:00 to 21:00</li>
            <li>Sat</li><li>09:30 to 18:00</li>
            <li>Sun</li><li>09:30 to 18:00</li>
            </ul>
        </div>
    </section>
    <section className='info__container'>
        <div>意畫間 ERIK KAM'S STUDIO</div>
        <address>屯門良田邨62號地鋪</address>
        <div>(+852) 5933 4186</div>
        <div><a href='mailto:kam27kam27@yahoo.com.hk'>kam27kam27@yahoo.com.hk</a></div>
    </section>
    <Social />
</section>
    )
}

export default Contact
