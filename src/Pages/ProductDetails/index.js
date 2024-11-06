import { Button, Rating } from "@mui/material";
import ProductZoom from "../../Components/ProductZoom";
import QuantityBox from "../../Components/QuantityBox";
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {

    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);

    const isActive = (index) => {
        setActiveSize(index);
    }


    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
                        </div>

                        <div className="col-md-7 pl-5 pr-5">
                            <h2 className="hd text-capitalize">Tên Sản Phẩm</h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light mr-2">Thương Hiệu: </span>
                                        <span><b>Welch's</b></span>
                                    </div>
                                </li>

                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                        <span className="text-light cursor ml-2">1 Đánh Giá</span>
                                    </div>
                                </li>
                            </ul>


                            <div className="d-flex info mb-3" >
                                <span className="oldPrice" > đ100.000 </span>
                                <span className="netPrice text-danger ml-2" > đ90.000 </span>
                            </div>
                            <span className="badge badge-success">CÒN HÀNG</span>
                            <p className="mt-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                            <div className="productSize d-flex align-items-center">
                                <span>Phân Loại: </span>

                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50g</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)} >100g</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)} >200g</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)} >500g</a>
                                    </li>
                                </ul>

                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <QuantityBox />
                                <Button className="btn-blue btn-lg btn-big btn-round ml-4">
                                    <BsCartFill /> &nbsp; Thêm Vào Giỏ Hàng
                                </Button>

                                <Tooltip title="Yêu Thích" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-4">
                                        <FaRegHeart />
                                    </Button>
                                </Tooltip>

                                <Tooltip title="So Sánh" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ml-2">
                                        <MdOutlineCompareArrows />
                                    </Button>

                                </Tooltip>
                            </div>
                        </div>
                    </div>


                    <br />


                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => { setActiveTabs(0) }}>
                                        Mô Tả
                                    </Button>
                                </li>

                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => { setActiveTabs(1) }}>
                                        Thông Tin Chi Tiết
                                    </Button>
                                </li>

                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => {
                                        setActiveTabs(2)
                                    }}>
                                        Đánh Giá (1)
                                    </Button>
                                </li>
                            </ul>

                            <br />

                            {
                                activeTabs === 0 &&
                                <div className="tabContent">
                                    currentProduct
                                </div>
                            }

                            {
                                activeTabs === 1 &&
                                <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr class="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>Lorem ipsum dolor sit amet</p>
                                                    </td>
                                                </tr>
                                                <tr class="folded-wo-wheels">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>Lorem ipsum dolor sit amet</p>
                                                    </td>
                                                </tr>
                                                <tr class="door-pass-through">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>Lorem ipsum dolor sit amet</p>
                                                    </td>
                                                </tr>
                                                <tr class="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Lorem ipsum dolor sit amet</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }

                            {
                                activeTabs === 2 &&
                                <div className="tabContent">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3>Đánh Giá Của Người Dùng</h3>
                                            <br />


                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className="image">
                                                    <div className="rounded-circle">
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                                                    </div>
                                                    <span className="text-g d-block text-center font-weight-bold">Xuan Dung</span>
                                                </div>
                                                <div className="info pl-5">
                                                    <div className="d-flex align-items-center w-100">
                                                        <h5 className="text-light">05/10/2024</h5>
                                                        <div className="ml-auto">
                                                            <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly size="small"/>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                                </div>
                                            </div>


                                            <br className="res-hide" />
                                            <br className="res-hide" />
                                            <form className="reviewForm">
                                                <h4>Thêm Đánh Giá</h4>
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Viết Đánh Giá" name="reivew"></textarea>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Tên" name="userName" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating name="rating" value={5} precision={0.5} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <br />
                                                <div className="form-group">
                                                    <Button type='submit' className="btn-blue btn-lg btn-big btn-round">Gửi Đánh Giá</Button>

                                                </div>
                                            </form>
                                        </div>


                                        {/* <div className="col-md-4 pl-5 reviewBox">
                                            <h4>Customer Reviews</h4>

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">5 sao</span>
                                                <div class="progress" style={{width:'100%', height:'20px'}}>
                                                    <div class="progress-bar bg-success" style={{width:'35%', height:'20px'}}>35%</div>
                                                </div>
                                            </div>

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">5 sao</span>
                                                <div class="progress" style={{width:'100%', height:'20px'}}>
                                                    <div class="progress-bar bg-success" style={{width:'35%', height:'20px'}}>35%</div>
                                                </div>
                                            </div>

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">5 sao</span>
                                                <div class="progress" style={{width:'100%', height:'20px'}}>
                                                    <div class="progress-bar bg-success" style={{width:'35%', height:'20px'}}>35%</div>
                                                </div>
                                            </div>

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">5 sao</span>
                                                <div class="progress" style={{width:'100%', height:'20px'}}>
                                                    <div class="progress-bar bg-success" style={{width:'35%', height:'20px'}}>35%</div>
                                                </div>
                                            </div>

                                            <div className="progressBarBox d-flex align-items-center">
                                                <span className="mr-3">5 sao</span>
                                                <div class="progress" style={{width:'100%', height:'20px'}}>
                                                    <div class="progress-bar bg-success" style={{width:'35%', height:'20px'}}>35%</div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <br/>

                    <RelatedProducts title="SẢN PHẨM LIÊN QUAN"/>

                    <RelatedProducts title="GỢI Ý SẢN PHẨM"/>


                </div>
            </section>
        </>
    )
}

export default ProductDetails;