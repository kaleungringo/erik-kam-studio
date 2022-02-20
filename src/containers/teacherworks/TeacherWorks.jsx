import React from 'react';
import './teacherworks.css';
import { Carousel } from 'react-carousel-minimal';

const data = [
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/1_oil_1_gLB3zShHs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378209873" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/1_oil_2_oVnFyLncd.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378209949" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/1_oil_3_xWeyXXoG1.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378210144" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/1_oil_4_i44Zppa8pL.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378210163" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/1_oil_5_PhVZ2bG6nzh_.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378210035" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/1_oil_6_f2t1qQ_vx5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378210468" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/1_oil_7_aXFvMcqal.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378210549" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/2_landscape_1_HFL7PJngs.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378210423" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/2_landscape_2_lRIuW9SyNio.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378210569" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/2_landscape_3_YwbouDtsX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378210732" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/2_landscape_4_vokMsdkF3p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378210716" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/2_landscape_5_y0PlTGKFLa1-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378211102" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/2_landscape_6_asaL67iGdZ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378211051" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/2_landscape_7_hfpn5UMFu0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378211100" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/2_landscape_8_bt9H5JXOD-.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378211380" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/2_landscape_9_iXa7DisAlLn.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378211339" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/3_object_1_M2U9_LzjC.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378211509" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/3_object_2_Jt5XA5dNe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378211705" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/3_object_3_z_NYGOQtG.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378211947" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/3_object_4_pksbafWFD8.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378211941" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/3_object_5_Egs2TONEcI.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212216" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_1_dTaFa4XJp0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212440" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_2__rcPGDeTKk8L.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212390" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_3_LE1Vz4JL_f.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212232" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_4_FGvAGLXAc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212498" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_5_TWOivJjDx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212413" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_6_DFNBZ2ZxX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212733" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_7_HjCIvL3JOr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212669" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_8_VoJyKgLmLH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212901" },
  { image: "https://ik.imagekit.io/lkringo/TeacherWorks/4_sketch_9_bnvtUHw-PXgF.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1644378212895" }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  
  const TeacherWorks = () => {
  return (
    <div className="container__content-regular">
      <h1>意畫間-Eirk Kam-導師作品</h1>
      <h2>導師作品</h2>
      <div className='carousal__container'>

      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0"
        }}>
          <Carousel
            data={data}
            time={4000}
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

export default TeacherWorks