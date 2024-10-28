import Logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AISuggestion from '../AISuggestion';
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";


const Header = () => {
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <p className="mb-0 mt-0 text-center">
                        Giao hàng tận tay, miễn phí vận chuyển cho đơn hàng từ 50k!
                    </p>
                </div>

                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <AISuggestion />

                                {/* Header Search */}
                                <div className='headerSearch ml-3 mr-3'>
                                    <input type='text' placeholder='Tìm kiếm sản phẩm...' />
                                    <Button><IoSearch /></Button>
                                </div>

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><FiUser /></Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>100.000đ</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle ml-2'><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Header;