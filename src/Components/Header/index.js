import Logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AISuggestion from '../AISuggestion';
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { useContext } from 'react';
import { MyContext } from '../../App';


const Header = () => {

    const context = useContext(MyContext);

    const navigate = useNavigate();

    const goToCart = () => {
        navigate('/cart');
    }



    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <p className="mb-0 mt-0 text-center">
                        Giao hàng tận tay, miễn phí vận chuyển cho đơn hàng từ 50k!
                    </p>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                <AISuggestion />

                                {/* Header Search */}
                                <SearchBox />

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    {
                                        context.isLogin !== true ?
                                            <Link to="/signIn">
                                                <Button className="btn-blue btn-round mr-3">Đăng Nhập</Button>
                                            </Link> :
                                            <div>
                                                <div className='ml-auto cartTab d-flex align-items-center'>
                                                    <Button className='circle mr-3'><FiUser /></Button>
                                                    <span className='price'>100.000đ</span>
                                                    <div className='position-relative ml-2'>
                                                        <Button className='circle ml-2' onClick={goToCart}><IoBagOutline /></Button>
                                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                                    </div>
                                                </div>

                                            </div>

                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </header>

                <Navigation />

            </div>
        </>
    )
}

export default Header;