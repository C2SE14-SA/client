import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import QuantityBox from "../../Components/QuantityBox";
import { IoIosClose } from "react-icons/io";

const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 pr-5">
                            <h2 className="hd mb-1">
                                Giỏ Hàng Của Bạn
                            </h2>
                            <p>Có <b className="text-red">3</b> sản phẩm trong giỏ hàng</p>

                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th width="35%">Sản Phẩm</th>
                                            <th width="15%">Giá Tiền</th>
                                            <th width="25%">Số Lượng</th>
                                            <th width="15%">Tổng Tiền</th>
                                            <th width="10%">Xóa</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>Lorem ipsum dolor sit amet</h6>
                                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />

                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">đ90.000</td>
                                            <td width="25%">
                                                <QuantityBox />
                                            </td>
                                            <td width="15%">đ90.000</td>
                                            <td width="10%">
                                                <span className="remove">
                                                    <IoIosClose />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>Lorem ipsum dolor sit amet</h6>
                                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />

                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">đ90.000</td>
                                            <td width="25%">
                                                <QuantityBox />
                                            </td>
                                            <td width="15%">đ90.000</td>
                                            <td width="10%">
                                                <span className="remove">
                                                    <IoIosClose />
                                                </span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td width="35%">
                                                <Link to="/product/1">
                                                    <div className="d-flex align-items-center cartItemimgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" className="w-100" />
                                                        </div>
                                                        <div className="info px-3">
                                                            <h6>Lorem ipsum dolor sit amet</h6>
                                                            <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />

                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width="15%">đ90.000</td>
                                            <td width="25%">
                                                <QuantityBox />
                                            </td>
                                            <td width="15%">đ90.000</td>
                                            <td width="10%">
                                                <span className="remove">
                                                    <IoIosClose />
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className="col-md-3">
                        <div className="card border p-3 cartDetails">
                            <h4>THANH TOÁN</h4>

                            <div className="d-flex align-items-center mb-3">
                                <span>Tổng tiền hàng</span>
                                <span className="ml-auto text-red font-weight-bold">đ90.000</span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span>Phí vận chuyển</span>
                                <span className="ml-auto"><b>Miễn Phí</b></span>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <span>Tổng thanh toán</span>
                                <span className="ml-auto text-red font-weight-bold">đ90.000</span>
                            </div>
                            <br/>
                            <Button className="btn-blue bg-red btn-lg btn-big ml-3">Thanh Toán</Button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;