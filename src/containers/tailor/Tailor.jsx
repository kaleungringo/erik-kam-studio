import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './tailor.css';

const Tailor = () => {
    return (
<section className='tailor container__content-full-fixedHeight'>
<div class='tailor__background'>
    <img src='https://ik.imagekit.io/lkringo/Tailor/tailor_bg_sOpDxIoq0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644383994325'></img>
</div>
<div className='tailor__overlay'>
    <div className='tailor__textbox'>
        <h3>繪畫定製</h3>
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
