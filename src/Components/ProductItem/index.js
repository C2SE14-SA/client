import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button'
import { TfiFullscreen } from "react-icons/tfi";
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModal from '../ProductModal';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom'; 


const ProductItem = (props) => {


    const context = useContext(MyContext);
    // const [isOpenProductModal, setisOpenProductModal] = useState(false);
    const navigate = useNavigate();

    const viewProductDetails=(id)=>{
        context.setisOpenProductModal(true);
    }
    const viewProductDetail = (id) => {
        navigate(`/product/${id}`);
    }



    return (
        <>
            <div className={`productItem ${props.itemView}`} 
                >
                <div className="imgWrapper" >
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-768x691.jpg" className="w-100" />

                    <span className="badge badge-primary" > 28 % </span>

                    <div className="actions" >
                        <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen /></Button>
                        <Button><IoIosHeartEmpty style={{ fontSize: '20px' }} /></Button>
                    </div>
                </div>

                <div className="info" >
                    <h4 onClick={() => viewProductDetail(1)} >Tên Sản Phẩm</h4>
                    <span className="text-success d-block" > Còn Hàng </span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
                    <div className="d-flex" >
                        <span className="oldPrice" > đ100.000 </span>
                        <span className="netPrice text-danger ml-2" > đ90.000 </span>
                    </div>
                </div>

            </div>
        </>

    )
}

export default ProductItem