import React from 'react';
import './studentworks.css';
import { Carousel } from 'react-carousel-minimal';

const data = [
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_1_T5wu2ZTEL5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172357" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_2_vcB1PUzBq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172139" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_3_wwl8lyy0T.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172103" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_4_Ske_jJ83w5W.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172341" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_5_8BzanB3bV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172036" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_6_NEOIUNtQ5R.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172352" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_7_BrRXj3Wrz5hr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172364" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_8_xXQOkMY9Z-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172389" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_9_6QCUT-Kxw.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172612" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_10_foeNPnjMfHj.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378282111" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_11_bTUjtV4yi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172425" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_12_kohdnu_vr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378282215" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_13_JuIdxxz2pG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172729" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_1_oil_14_txdmD86b9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378282278" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_10_mHvFwEDgAM.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378174358" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_11_OV7ItIPtOZ4B.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378174521" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_12_s53EzA46w.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378174302" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_13_uWLHjJaM3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378174723" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_14_M8jz1kzyt3.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378282177" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_1_OTpWypQAHz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378172982" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_2__Evhk3wftH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378173619" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_3_bHywg2ZcXC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378173297" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_4_Ww0st_B1_jR.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378173682" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_5_HlPyNNkst.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378173804" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_6_OJLBgpEus.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378173972" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_7_GnrvxdJukZ58.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378173836" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_8_gdshE1zKfA.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378173968" },
  { image: "https://ik.imagekit.io/lkringo/StudentWorks/student_2_sketch_9_cnSZBZIVQQ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378174552" }
 ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  
  const StudentWorks = () => {
  return (
    <div className="container__content-regular">
      <h2>學生作品</h2>
      <div className='carousal__container'>

      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="auto"
            height="55vh"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="50px"
            slideBackgroundColor="#ECEDED"
            slideImageFit="contain"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>

      </div>
    </div>
  );
}

export default StudentWorks
