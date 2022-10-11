import React, { useContext } from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import "swiper/css/pagination";
import "swiper/css";
import { themeContext } from "../../Context";
const Testimonials = () => {
  const Client = [
    {
      img: profile1,
      review: "Reviews no 1 fake fake fake testing testing reviews 1 2 3",
    },
    {
      img: profile2,
      review:
        "Review no 2 fake as awell fake as well testing testing reviews 1 2 3",
    },
    {
      img: profile3,
      review: "Review no 3 Fake Fake Fake testing testing reviews 1 2 3.",
    },
  ];
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Client always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* Slider */}
      <Swiper
        grabCursor={true}
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {Client.map((Client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={Client.img} alt="" />
                <span style={{ color: darkMode ? "white" : "" }}>
                  {Client.review}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
