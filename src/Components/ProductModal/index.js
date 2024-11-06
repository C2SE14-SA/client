// import Dialog from '@mui/material/Dialog'
// import { IoIosClose, IoIosHeartEmpty } from "react-icons/io";
// import Button from '@mui/material/Button'
// import Rating from '@mui/material/Rating';
// import Slider from 'react-slick';
// import InnerImageZoom from 'react-inner-image-zoom';
// import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
// import { useContext, useRef, useState } from 'react';
// import { FaMinus, FaPlus } from 'react-icons/fa';
// import QuantityBox from '../QuantityBox';
// import { MdClose, MdOutlineCompareArrows } from 'react-icons/md';
// import { MyContext } from '../../App';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';

// const ProductModal = (props) => {

//     const [slideIndex, setSlideIndex] = useState(0);
//     const zoomSliderBig = useRef();
//     const zoomSlider = useRef();

//     const context = useContext(MyContext);

//     // var settings = {
//     //     dots: false,
//     //     infinite: false,
//     //     speed: 500,
//     //     slidesToShow: 5,
//     //     slidesToScroll: 1,
//     //     fade: false,
//     //     arrows: true,
//     // };

//     // var setting2 = {
//     //     dots: false,
//     //     infinite: false,
//     //     speed: 700,
//     //     slidesToShow: 1,
//     //     slidesToScroll: 1,
//     //     fade: false,
//     //     arrows: false,
//     // }

//     const goto = (index) => {
//         setSlideIndex(index);
//         zoomSlider.current.swiper.slideTo(index);
//         zoomSliderBig.current.swiper.slideTo(index);
//     }



//     return (
//         <>
//             <Dialog open={context.isOpenProductModal} className='productModal' onClose={() => context.setisOpenProductModal(false)}>
//                 <Button className='close_' onClick={() => context.setisOpenProductModal(false)}><MdClose /></Button>
//                 <h4 className='mb-1 font-weight-bold'>Ten San Pham</h4>
//                 <div className='d-flex align-items-center'>
//                     <div className='d-flex align-items-center mr-4'>
//                         <span>Thương Hiệu: </span>
//                         <span className='ml-2'><b>Welch's</b></span>
//                     </div>

//                     <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />

//                 </div>

//                 <hr />

//                 <div className='row mt-2 productDetaileModal'>
//                     <div className='col-md-5'>
//                         <div className='productZoom position-relative'>
//                             <div className='badge badge-primary'>23%</div>
//                             <Swiper
//                                 slidePerView={1}
//                                 spaceBetween={0}
//                                 navigation={false}
//                                 slidesPerGroup={1}
//                                 modules={[Navigation]}
//                                 className="zoomSliderBig"
//                                 ref={zoomSliderBig}
//                             >
//                                 <SwiperSlide>
//                                     <div className='item'>
//                                         <InnerImageZoom
//                                             zoomType='hover' zoomScale={1}
//                                             src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} />
//                                     </div>
//                                 </SwiperSlide>

//                                 <SwiperSlide>
//                                     <div className='item'>
//                                         <InnerImageZoom
//                                             zoomType='hover' zoomScale={1}
//                                             src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} />
//                                     </div>
//                                 </SwiperSlide>

//                                 <SwiperSlide>
//                                     <div className='item'>
//                                         <InnerImageZoom
//                                             zoomType='hover' zoomScale={1}
//                                             src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} />
//                                     </div>
//                                 </SwiperSlide>
//                             </Swiper>
//                             {/* <Slider {...setting2} className='zoomSliderBig' ref={zoomSliderBig}>
//                                 <div className='item'>
//                                     <InnerImageZoom
//                                         zoomType='hover' zoomScale={1}
//                                         src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} />
//                                 </div>

//                                 <div className='item'>
//                                     <InnerImageZoom
//                                         zoomType='hover' zoomScale={1}
//                                         src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} />
//                                 </div>

//                                 <div className='item'>
//                                     <InnerImageZoom
//                                         zoomType='hover' zoomScale={1}
//                                         src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} />
//                                 </div>
//                             </Slider> */}
//                         </div>
//                         <Swiper
//                             slidePerView={4}
//                             spaceBetween={0}
//                             navigation={true}
//                             slidesPerGroup={1}
//                             modules={[Navigation]}
//                             className="zoomSlider"
//                             ref={zoomSliderBig}
//                         >
//                             <SwiperSlide>
//                                 <div className={`item ${slideIndex===0 && 'item_active'}`}>
//                                     <img src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} className='w-100' onClick={() => goto(0)} />
//                                 </div>
//                             </SwiperSlide>

//                             <SwiperSlide>
//                                 <div className={`item ${slideIndex===1 && 'item_active'}`}>
//                                     <img src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} className='w-100' onClick={() => goto(1)} />
//                                 </div>
//                             </SwiperSlide>

//                             <SwiperSlide>
//                                 <div className={`item ${slideIndex===2 && 'item_active'}`}>
//                                     <img src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} className='w-100' onClick={() => goto(2)} />
//                                 </div>
//                             </SwiperSlide>
//                         </Swiper>

//                         {/* <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
//                             <div className='item'>
//                                 <img src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} className='w-100' onClick={() => goto(0)} />
//                             </div>

//                             <div className='item'>
//                                 <img src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} className='w-100' onClick={() => goto(1)} />
//                             </div>

//                             <div className='item'>
//                                 <img src={`https://media.istockphoto.com/id/625006166/photo/blossom-blackberry-on-white.jpg?s=612x612&w=0&k=20&c=EwBE3JI2QdyBeIKSdQKvowVBIAs70_OkVocoQO1UWpg=`} className='w-100' onClick={() => goto(2)} />
//                             </div>
//                         </Slider> */}
//                     </div>
//                     <div className='col-md-7'>
//                         <div className='d-flex info align-items-center mb-3'>
//                             <span className='oldPrice lg mr-2'>100.000d</span>
//                             <span className='netPrice text-danger lg'>90.000d</span>
//                         </div>
//                         <span className='badge bg-success'>CON HANG</span>

//                         <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

//                         <div className='d-flex align-items-center'>
//                             <QuantityBox />

//                             <Button className='btn-blue btn-lg btn-big btn-round ml-3'>THÊM VÀO GIỎ HÀNG</Button>
//                         </div>

//                         <div className='d-flex align-items-center mt-5 actions'>
//                             <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty /> &nbsp; YÊU THÍCH</Button>
//                             <Button className='btn-round btn-sml ml-3' variant='outlined'><MdOutlineCompareArrows /> &nbsp; SO SANH</Button>
//                         </div>
//                     </div>
//                 </div>
//             </Dialog>
//         </>
//     )
// }

// export default ProductModal;

import Dialog from '@mui/material/Dialog';
import { IoIosClose, IoIosHeartEmpty } from "react-icons/io";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { useContext, useRef, useState, useEffect } from 'react';
import { MdClose, MdOutlineCompareArrows } from 'react-icons/md';
import { MyContext } from '../../App';

import QuantityBox from '../QuantityBox';
import ProductZoom from '../ProductZoom';

const ProductModal = (props) => {

    const context = useContext(MyContext);


    return (
        <>
            <Dialog open={context.isOpenProductModal} className='productModal' onClose={() => context.setisOpenProductModal(false)}>
                <Button className='close_' onClick={() => context.setisOpenProductModal(false)}><MdClose /></Button>
                <h4 className='mb-1 font-weight-bold'>Ten San Pham</h4>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center mr-4'>
                        <span>Thương Hiệu: </span>
                        <span className='ml-2'><b>Welch's</b></span>
                    </div>
                    <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
                </div>
                <hr />
                <div className='row mt-2 productDetaileModal'>
                    <div className='col-md-5'>

                    <ProductZoom/>



                    </div>
                    <div className='col-md-7'>
                        <div className='d-flex info align-items-center mb-3'>
                            <span className='oldPrice lg mr-2'>100.000đ</span>
                            <span className='netPrice text-danger lg'>90.000đ</span>
                        </div>
                        <span className='badge bg-success'>Còn Hàng</span>

                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                        <div className='d-flex align-items-center'>
                            <QuantityBox />

                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'>Thêm Vào Giỏ Hàng</Button>
                        </div>

                        <div className='d-flex align-items-center mt-4 actions'>
                            <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty /> &nbsp; YÊU THÍCH</Button>
                            <Button className='btn-round btn-sml ml-3' variant='outlined'><MdOutlineCompareArrows /> &nbsp; SO SÁNH</Button>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ProductModal;
