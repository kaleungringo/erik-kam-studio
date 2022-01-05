import React from 'react';
import './about.css';

import Social from '../../components/social/Social';

const About = () => {
    return (
        <div>
            <div className='kam__about-container'>
                    <img className='kam__about-portrait' src='https://drive.google.com/uc?export=download&id=1bI7sgshqwlG5Qvvf1JdU-N4dtBSleG39'></img>

                <div className='kam__about-description'>
                    <h1>畫室創辦人</h1>
                    <h2>開辦畫室是希望讓更加多的人接觸及認識繪畫藝術，並享受繪畫。</h2>
                    <p>香港畫家Erik Kam</p>
                    <p>師承華人著名畫家鄧亦農</p>
                    <p>香港美術會會員</p>
                    <p>香港粉彩畫會會員</p>
                    <p>多年藝術創作及教育經驗</p>
                    <p>作品曾被私營機構及海外人士收藏</p>
                </div>
            </div>



            <div className='kam__hours-container'>
                <div className='kam__hours-title'><h3>營業時間</h3></div>
                <div className='kam__hours-row-container'>
                    <div className='kam__hours-day-container'>
                        <div className='kam__hours-day'>Mon</div>
                        <div className='kam__hours-time'>10:00 to 21:00</div>
                    </div>
                    <div className='kam__hours-day-container'>
                        <div className='kam__hours-day'>Tue</div>
                        <div className='kam__hours-time'>10:00 to 21:00</div>
                    </div>
                    <div className='kam__hours-day-container'>
                        <div className='kam__hours-day'>Wed</div>
                        <div className='kam__hours-time'>15:00 to 18:00</div>
                    </div>
                    <div className='kam__hours-day-container'>
                        <div className='kam__hours-day'>Thur</div>
                        <div className='kam__hours-time'>10:00 to 21:00</div>
                    </div>
                    <div className='kam__hours-day-container'>
                        <div className='kam__hours-day'>Fri</div>
                        <div className='kam__hours-time'>10:00 to 21:00</div>
                    </div>
                    <div className='kam__hours-day-container'>
                        <div className='kam__hours-day'>Sat</div>
                        <div className='kam__hours-time'>09:30 to 18:00</div>
                    </div>
                    <div className='kam__hours-day-container'>
                        <div className='kam__hours-day'>Sun</div>
                        <div className='kam__hours-time'>09:30 to 18:00</div>
                    </div>
                </div>
            </div>

            <div className='kam__info-container-main'>
                <div className='kam__info-container-upper'>
                    <div className='kam__info-item'>意畫間 ERIK KAM'S STUDIO</div>
                    <div className='kam__info-item'>屯門良田邨62號地鋪</div>
                </div>
                <div className='kam__info-container-lower'>
                    <div className='kam__info-item'>(+852) 5933 4186</div>
                    <div className='kam__info-item'><a href='mailto:kam27kam27@yahoo.com.hk'>kam27kam27@yahoo.com.hk</a></div>
                </div>
            </div>

            <div className='kam__about-social-container'>
                <Social />
            </div>

            <div>Google Map to be coded</div>

        </div>

    )
}

export default About
