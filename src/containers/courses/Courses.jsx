import React from 'react';
import './courses.css';

const Courses = () => {
    return (
        <div className='container-nopadding container__content-regular'>

            <h2 className='hidden'>課程簡介</h2>

            <section className='course course-general'>
            <div className='course__title'>
                <h3>兒童課程</h3>
            </div>
            <div className='course__container'>
                <div className='course__item'>
                        <h4 className='course__name'>
兒童綜合繪畫
                        </h4>
                        <div className='course__subname'>（適合4-7歲）</div>
                        <p className='course__des'>

媒介：油粉彩、水彩、廣告彩、木顏色、colour pen
                        </p>

                        <p className='course__price'>
$470/4堂
1小時/堂
                        </p>
                </div>
                <div className='course__item'>
                        <h4 className='course__name'>
興趣繪畫班
                        </h4>

                        <p className='course__des'>
素描班、水彩班、廣告彩班、粉彩班、油畫班、塑膠彩、漫畫班
                        </p>

                        <p className='course__price'>
$540/4堂
1.5小時/堂
                        </p>
                </div>
                <div className='course__item'>
                        <h4 className='course__name'>
兒童創意塑膠彩班
                        </h4>
                        <div className='course__subname'>（適合8歲以上）</div>

                        <p className='course__des'>
學習色彩對比、命題創作、運用不同媒介創作個人作品
                        </p>

                        <p className='course__price'>
$600/4堂
1.5小時/堂
                        </p>
                </div>
                <div className='course__item'>
                        <h4 className='course__name'>
兒童卡通漫畫班
                        </h4>

                        <p className='course__des'>
教授水彩、塑膠彩、廣告彩、麥克筆、木顏色，
不同媒介的技巧運用和表現手法

                        </p>

                        <p className='course__price'>
$540/4堂
1.5小時/堂
                        </p>
                </div>
                </div>

                <div className='course__dotsnav'><p>....</p></div>

                <div className='course__remarks'>
            <h4 id='' className='course__single'>兒童試堂收費</h4>$150/堂 1小時
            </div>

            </section>

            <section className='course course-youth'>
            <div className='course__title'>
                <h3>青少年課程</h3>
            </div>
            
            <div className='course__container'>
                <div className='course__item'>
                        <h4 className='course__name'>
                        青少年綜合繪畫班
                        </h4>
                        <div className='course__subname'>（按年齡程度分為初階/高階班）</div>
                        <p className='course__des'>
                        教授現代繪畫、商業設計、視覺藝術創作、傳統繪畫<br />
媒介：水彩、粉彩、廣告彩、木顏色、塑膠彩、油彩、麥克筆

                        </p>

                        <p className='course__price'>
                        ＄600/4堂
1.5小時/堂
                        </p>
                </div>
                <div className='course__item'>
                        <h4 className='course__name'>
                        全國美術級考試
                        </h4>

                        <p className='course__des'>      
顏料：油畫、水粉彩、素描、速寫、水彩
                        </p>

                        <p className='course__price'>

                        <ul id="course__grade__price">
                        <li>1-3級</li><li>1.5小時/堂</li><li>＄600</li>
                        <li>7-8級</li><li>2小時/堂</li><li>＄660</li>
                        <li>4-6級</li><li>1.5小時/堂</li><li>＄740</li>
                        <li>9-10級</li><li>2小時/堂</li><li>＄820</li>
                        </ul>

                        </p>
                </div>
                <div className='course__item'>
                        <h4 className='course__name'>
                        中學文憑試
                        </h4>
                        <div className='course__subname'>（視覺藝術科）</div>

                        <p className='course__des'>      
教授視覺形式表達及設計、指導作品集、對藝術作品評賞及研究等
                        </p>

                        <p className='course__price'>
$740/4堂
2小時/堂
                        </p>
                </div>
            </div>

            <div className='course__dotsnav'>...</div>

            <div className='course__remarks'>
            <h4 id='' className='course__single'>青少年試堂收費</h4>$200/堂 1.5小時
            </div>
            </section>

            <section className='course course-general'>
            <div className='course__title'>
                <h3>成人課程</h3>
            </div>
            <div className='course__container'>
                <div className='course__item'>
                    <h4 className='course__name'>
成人藝術繪畫課程
</h4>
<div className='course__subname'>（基礎班/深造班)</div>

                    <p className='course__des'>
顏色：水彩、粉彩、廣告彩、木顏色、塑膠彩、油彩、
素描、鉛筆、炭筆、炭晶條（濕畫法及乾畫法）
                    </p>

                    <p className='course__price'>
$740/4堂
2小時/堂
                    </p>
                </div>
                <div className='course__item'>
                    <h4 className='course__name'>
短期禮物班
                    </h4>

                    <p className='course__des'>
教授如何繪畫專業油畫作禮物之用<br />
包括錶装畫框（30x40cm）
                    </p>

                    <p className='course__price'>
$740/4堂
2小時/堂
                    </p>
                


                </div>
                <div className='course__item'>
                    <h4 className='course__name'>
專業油畫/塑膠彩班
                    </h4>

                    <p className='course__des'>
學習油畫專業技法（直接畫法及間接畫法）
油畫語言、色彩對比及油畫肌理
                    </p>

                    <p className='course__price'>
$740/4堂
2小時/堂
                    </p>

                </div>
            </div>

            <div className='course__remarks'>
            <h4 id='' className='course__single'>短期單堂畫班</h4>$250/堂 2小時
            </div>

            </section>

<section className='course course-anime'>
    <h3>卡通動漫班</h3>
    <div>
        <img src="https://ik.imagekit.io/lkringo/Courses/anime_1_GVOyb6CIp7x.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644383841187"></img>
        <img src="https://ik.imagekit.io/lkringo/Courses/anime_2_Pkdsryexf.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644383841208"></img>
    </div>
</section>

<section className='course course__policy'>
    <div className='course__policy__item'>
        <strong>請假及補堂之安排</strong>
            <p>所有請假必須提早向老師申請，以便老師提供適合的補堂時間予學生選擇。</p>
            <p>補堂時間為兩個月內，所報課堂為兩個月內完成。</p>
        </div>
    <div className='course__policy__item'>
        <strong>極端天氣安排</strong>
            <b>T1／T3／黃色暴雨</b>
            <p>課堂繼續進行</p>
            <b>紅雨／黑雨／8號風球</b>
            <p>如上課時間前兩小時仍懸掛，課堂將會取消。<br/>
            如上課時間是天文台預計懸掛8號風球的兩小時前及預計懸掛8號風球的兩小時内，課堂將會取消。<br/>
            如在下午4時後取消懸掛8號風球，本畫室將全日休息。</p>
    </div>
</section>

        </div>
    )
}

export default Courses
