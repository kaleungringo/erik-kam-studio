import React from 'react';
import './goals.css';
import { hero_1_goal, hero_2_child, hero_3_teen, hero_4_adult } from '../../assets';

const Goals = () => {
    return (
        <div className='container__content-full'>
            <div class="motto container-fullHeight">
            <div className='wrapper'>
            <div className='motto__img__container'><img src='https://drive.google.com/uc?export=view&id=1VeLtuUa86xQqaE7HLlPgYzlMcbRXlmCR'></img></div>
                <div class="motto__textbox">
                    <h2 class="motto__title">辦學的宗旨</h2>
                    <strong class="motto__quote">
                        <div>真誠的教育，</div>    
                        <div>是我們對你的<span>承諾</span>。</div>
                        <div></div>
                    </strong>
                </div>
            </div>
            </div>
            <div class="child container-fullHeight">
            <div className='child__img__container'><img src="https://drive.google.com/uc?export=view&id=1MC2fLKj7AiDXHti4Z-h_g9jmuquyUrWh"></img></div>
                <div className='wrapper'>
                    <div class="child__textbox">
                        <h3>兒童畫班</h3>
                        <p>提倡命題創作及臨摹，運用不同媒介材料，學習創作思維及技巧，提高兒童觀察力、創作力、思考力、表現力及美術和設計知識應用。</p>
                    </div>
                </div>
            </div>
            <div class="teen container-fullHeight">
                <div className='teen__img__container'><img src="https://drive.google.com/uc?export=view&id=1mNE-4WBxx2w3m1nzEfN4zOG-JVBJoX-R"></img></div>
                <div className='wrapper'>
                    <div className="teen__textbox">
                        <h3>青少年課程</h3>
                        <p>着重繪畫訓練基礎，造形、色彩、速寫、構圖、內容、形式、人體結構基本功，加入美術史的介紹，讓學員認識更多的繪畫表現知識。</p>
                    </div>
                </div>
            </div>
            <div class="adult container-fullHeight">
                <div className='adult__img__container'><img src="https://drive.google.com/uc?export=view&id=18_C4u4QivUSxrtkQH9Zps-dNFrSeP6hi"></img></div>
                <div className='wrapper'>
                    <div className="adult__textbox">
                    <h3>成人課程</h3>
                        <ol><p>兩大方向：</p>
                            <li>着重基礎及建立個人風格，在課程中學習傳統技巧及繪畫知識，創作個人作品。</li>
                            <li>基礎學員後透過繪畫減壓，讓學員在繁忙生活中享受繪畫樂趣。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goals
