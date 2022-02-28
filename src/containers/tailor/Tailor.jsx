import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import './tailor.css';

const Tailor = () => {
    return (
<section className='tailor container__content-full-fixedHeight'>
    <Helmet>
        <title>意畫間｜繪畫定製</title>
        <meta
            name="description"
            content="意畫間提供繪畫定製服務，提供不周類型客製化作品。 "
        />
        <meta
            name="keywords"
            content="意畫間,Erik Kam,Erik Kam Studio,香港畫家,畫室,屯門,新墟,教育,藝術,繪畫,課程"
        />
    </Helmet>
<div class='tailor__background'>
    <img src='https://ik.imagekit.io/lkringo/Tailor/tailor_bg_sOpDxIoq0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644383994325'></img>
</div>
<div className='tailor__overlay'>
    <div className='tailor__textbox'>
        <h1>意畫間-Eirk Kam-繪畫定製</h1>
        <h2>繪畫定製</h2>
        <strong>適合用作禮物，家中掛飾收藏</strong>
        <p>媒介：素描、水彩、粉彩、油畫</p>
        <p>題材：人物、動物、風景、靜物、創作</p>
        <Link to = '/contact'><btn>歡迎查詢</btn></Link>
    </div>
</div>
</section>
    )
}

export default Tailor
