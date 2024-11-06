import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { GoHome } from "react-icons/go";
// import { AiOutlineProduct } from "react-icons/ai";
// import { LuUsers } from "react-icons/lu";
// import { BsQuestionCircle } from "react-icons/bs";
// import { IoNewspaperOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {

    const [isOpenSidebarVal, setisopenSidebarVal] = useState(false);

    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center' onClick={() => setisopenSidebarVal(!isOpenSidebarVal)}>
                                <span className='icon1 mr-2'><IoIosMenu /></span>
                                <span class='text'>TẤT CẢ DANH MỤC</span>
                                <span className='icon2 ml-2'><FaAngleDown /></span>
                            </Button>

                            <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>danh muc 1 <FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <Link to="/"><Button>san pham 1</Button></Link>
                                            <Link to="/"><Button>san pham 2</Button></Link>
                                            <Link to="/"><Button>san pham 3</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>danh muc 2</Button></Link></li>
                                    <li><Link to="/"><Button>danh muc 3</Button></Link></li>
                                    <li><Link to="/"><Button>danh muc 4</Button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'><Link to="/"><Button>
                                Trang Chủ</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>
                                Sản Phẩm</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/product-list/1"><Button>1</Button></Link>
                                    <Link to="/product-list/1"><Button>1</Button></Link>
                                    <Link to="/product-list/1"><Button>1</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><Button>
                                Giới Thiệu</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>
                                Blog</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>
                                Liên Hệ</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>
                                FAQ</Button></Link></li>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )

}
export default Navigation;