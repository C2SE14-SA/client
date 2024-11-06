import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Button } from "@mui/material";
import ProductItem from "../../../Components/ProductItem";
import { IoIosArrowRoundForward } from "react-icons/io";


const RelatedProducts = (props) => {
    return (
        <>
            <div className="d-flex align-items-center mt-3">
                <div className="info w-75">
                    <h3 className="mb-0 hd">{props.title}</h3>
                    <p className="text-light text-sml mb-0">
                        Đừng bỏ lỡ các ưu đãi đặc biệt, chỉ có đến hết tháng 12!
                    </p>
                </div>

                <Button className="viewAllBtn ml-auto">Xem thêm <IoIosArrowRoundForward /></Button>
            </div>

            <div className="product_row w-100 mt-2">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={5}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductItem />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default RelatedProducts;