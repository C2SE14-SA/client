import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea'
    ]);


    return (
        <section className="homeCat">
            <div className="container">
            <h3 className='mb-3 hd'>Danh Mục</h3>
                <Swiper
                    slidesPerView={10}
                    spaceBetween={8}
                    navigation={true}
                    slidesPerGroup={3}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        itemBg?.map((item, index) => {
                            return (
                                <SwiperSlide>
                                    <div className="item text-center cursor" style={{background:item}}>
                                        <img src="https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png" alt="" style={{ width: '100%' }} />
                                        <h6>Red Apple</h6>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

            </div>
        </section>
    )
}

export default HomeCat