import HomeBanner from "../../Components/HomeBanner";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import { Button, Link } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from "swiper/modules";
import Rating from '@mui/material/Rating';
import { TfiFullscreen } from "react-icons/tfi";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";



const Home = () => {
    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };


    return (
        <>
            <HomeBanner />
            <HomeCat />


            <section className="homeProducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">

                            <div className="sticky">
                                <div className="banner">
                                    <img src={banner1} alt="" className="cursor w-100" />
                                </div>
                                <div className="banner mt-4">
                                    <img src={banner2} alt="" className="cursor w-100" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">SẢN PHẨM BÁN CHẠY</h3>
                                    <p className="text-light text-sml mb-0">
                                        Đừng bỏ lỡ các ưu đãi đặc biệt, chỉ có đến hết tháng 12!
                                    </p>
                                </div>

                                <Link to="/product-list/1">
                                    <Button className="viewAllBtn ml-auto">Xem thêm <IoIosArrowRoundForward /></Button>
                                </Link>
                            </div>

                            <div className="product_row w-100 mt-2">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={5}
                                    navigation={true}
                                    slidesPerGroup={1}
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





                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">SẢN PHẨM MỚI</h3>
                                    <p className="text-light text-sml mb-0">
                                        Khám phá các sản phẩm dinh dưỡng mới nhất!
                                    </p>
                                </div>

                                <Button className="viewAllBtn ml-auto">Xem thêm <IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />

                            </div>


                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner">
                                    <img src={banner3} alt="" className="cursor w-100" />
                                </div>
                                <div className="banner">
                                    <img src={banner4} alt="" className="cursor w-100" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;