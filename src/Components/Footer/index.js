import { LuShirt } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><AiOutlineProduct /></span>
                        <span className="ml-2">Sản phẩm tươi mới mỗi ngày</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery /></span>
                        <span className="ml-2">Miễn phí ship đơn hàng trên 70$</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine /></span>
                        <span className="ml-2">Giảm giá hàng ngày</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiMoneyDollarCircleLine /></span>
                        <span className="ml-2">Giá tốt nhất trên thị trường</span>
                    </div>
                </div>
                <div className="row mt-4 linksWrap">
                    <div className="col">
                        <h5>Về chúng tôi</h5>
                        <ul>
                            <li>Hotline: +123.456.789</li>
                            <li>Email: email@gmail.com</li>
                            <li>Địa Chỉ: Đà Nẵng</li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Hỗ trợ khách hàng</h5>
                        <ul>
                            <li><Link to="#">Hướng dẫn mua hàng</Link></li>
                            <li><Link to="#">Chính sách giao hàng</Link></li>
                            <li><Link to="#">Chính sách đổi trả & hoàn tiền</Link></li>
                            <li><Link to="#">Trạng thái đơn hàng</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Sản phẩm</h5>
                        <ul>
                            <li><Link to="#">Sữa</Link></li>
                            <li><Link to="#">Ngũ cốc</Link></li>
                            <li><Link to="#">Yến sào</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Theo dõi chúng tôi</h5>
                        <ul className="list list-inline mt-3 mb-0 socials">
                            <li className="list-inline-item">
                                <Link to="#"><FaFacebookF /></Link>
                            </li>

                            <li className="list-inline-item">
                                <Link to="#"><FaYoutube /></Link>
                            </li>

                            <li className="list-inline-item">
                                <Link to="#"><FaInstagram /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer;