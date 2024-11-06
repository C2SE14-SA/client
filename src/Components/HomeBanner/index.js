import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react'; // Chỉ nhập một lần
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules'; // Kết hợp import

const HomeBanner = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="homeBannerSection">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        navigation={true}
                        loop={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729664784/1729664783845_New_Project_11.jpg" alt="" className="w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729664710/1729664710059_New_Project_13.jpg" alt="" className="w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item">
                                <img src="https://res.cloudinary.com/dy2p0n2xc/image/upload/v1729664784/1729664783845_New_Project_11.jpg" alt="" className="w-100" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default HomeBanner;
