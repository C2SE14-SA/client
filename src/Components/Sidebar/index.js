import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const [value, setValue] = useState([100, 6000]);
    const [value2, setValue2] = useState(0);


    return (
        <>
            <div className="sidebar">
                <div className='sticky'>
                    <div className="filterBox">
                        <h6>DANH MỤC SẢN PHẨM</h6>

                        <div className='scroll'>
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Danh Muc 1" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Danh Muc 2" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Danh Muc 3" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Danh Muc 1" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Danh Muc 2" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Danh Muc 3" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Danh Muc 1" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Danh Muc 2" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Danh Muc 3" />
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className='filterBox'>
                        <h6>KHOẢNG GIÁ</h6>

                        <RangeSlider value={value} onInput={setValue} min={100} max={6000} step={5} />

                        <div className='d-flex pt-2 pb-2 priceRange'>
                            <span>Từ: <strong className='text-dark'>đ {value[0]}</strong></span>
                            <span className='ml-auto'>Đến: <strong className='text-dark'>đ {value[1]}</strong></span>
                        </div>
                    </div>

                    <div className="filterBox">
                        <h6>TRẠNG THÁI SẢN PHẨM</h6>

                        <div className='scroll'>
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Còn Hàng" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Khuyến Mãi" />
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div className="filterBox">
                        <h6>THƯƠNG HIỆU</h6>

                        <div className='scroll'>
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Thương Hiệu 1" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Thương Hiệu 2" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Thương Hiệu 3" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Thương Hiệu 4" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Thương Hiệu 5" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Thương Hiệu 6" />
                                </li>

                            </ul>

                        </div>
                    </div>

                    <Link to="#">
                        <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif' className='w-100' />
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Sidebar;