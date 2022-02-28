import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import './about.css';

const About = () => {
    return (
<section className='about container__content-full-fixedHeight-flexiHeightmobile'>
            <Helmet>
            <title>意畫間｜導師簡介</title>
                <meta
                    name="description"
                    content="意畫間-畫室創辦人-香港畫家Erik Kam：開辦畫室是希望讓更加多的人接觸及認識繪畫藝術，並享受繪畫。
                    香港畫家
                    年藝術創作及教育經驗
                    作品曾被私營機構及海外人士收藏"
                />
                <meta
                    name="keywords"
                    content="意畫間,Erik Kam,Erik Kam Studio,香港畫家,畫室,屯門,新墟,教育,藝術,繪畫,課程"
                />
            </Helmet>
    <h1>意畫間-畫室創辦人-香港畫家Erik Kam</h1>
    <div class='about__background'>
        <img className='' src='https://ik.imagekit.io/lkringo/About/about_bg_vL7UcS9vw8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644382194769'></img>
        <div className='about__gradient'></div>
    </div> 
    <div className='about__overlay'>
        <div className='about__wrapper'>
            <div className='about__container'>
            <div className='about__icon'>
                <img  src='https://ik.imagekit.io/lkringo/About/about_icon_4kMd7Rcn4S.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644382194506'></img>
            </div>
            <div className='about__text'>
                <div><h2>畫室創辦人</h2><span>Erik Kam</span></div>
                <strong>開辦畫室是希望讓更加多的人接觸及認識繪畫藝術，並享受繪畫。</strong>
                <ul>
                    <li>香港畫家</li>
                    <li>多年藝術創作及教育經驗</li>
                    <li>作品曾被私營機構及海外人士收藏</li>
                </ul>
            </div>
            <div className='about__photos'>
            <img src='https://ik.imagekit.io/lkringo/TeacherWorks/1_oil_1_gLB3zShHs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378209873'></img>
            <img src='https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_1_dTaFa4XJp0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212440'></img>
            </div>
            </div>
        </div>
    </div>
</section>
    )
}

export default About
