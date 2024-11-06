import { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import Logo from '../../assets/images/logo.png';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import GoogleImg from '../../assets/images/googleImg.png';


const SignIn = () => {
    const context = useContext(MyContext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
    })
    return (
        <>
            <section className="section signInPage">
                <div class="shape-bottom">
                    <svg fill="#fff" id="Layer_1" x="0px" y="0px" viewBox="0 0 1921 819.8" style={{ enableBackground: 'new 0 0 1921 819.8' }}>
                        <path class="st0" d="M1921,413.1v406.7H0V0.5h0.4l228.1,598.3c30,74.4,80.8,130.6,152.5,168.6c107.6,57,212.1,40.7,245.7,34.4 c22.4-4.2,54.9-13.1,97.5-26.6L1921,400.5V413.1z"></path>
                    </svg>
                </div>

                <div className="container">
                    <div className="box card p-3 shadow border-0">
                        <div className="text-center">
                            <img src={Logo} />
                        </div>


                        <form className="mt-3">
                            <h2 className="mb-4">Đăng Nhập</h2>
                            <div className="form-group">
                                <TextField id="standard-basic" label="Email" type="email" required variant="standard" className="w-100" />
                            </div>

                            <div className="form-group">
                                <TextField id="standard-basic" label="Mật Khẩu" type="password" required variant="standard" className="w-100" />
                            </div>

                            <a className="border-effect cursor txt">Quên Mật Khẩu?</a>

                            <div className="d-flex align-items-center mt-3 mb-3 w-100">
                                <div className="row" style={{width: '500px'}}>
                                    <div className="col-6">
                                        <Button className="btn-blue w-100 btn-lg btn-big">Đăng Nhập</Button>
                                    </div>
                                    <div className="col-6">
                                        <Link to="/">
                                            <Button className="btn-lg btn-big w-100" variant="outlined" onClick={() => context.setisHeaderFooterShow(true)}>Quay Lại</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <p className="txt">Bạn chưa có tài khoản? <Link to="/signUp" className="border-effect">Đăng Ký</Link></p>

                            <h6 className="mt-4 text-center">Hoặc</h6>

                            <Button className="loginWithGoogle w-100 mt-2" variant="outlined">
                                <img src={GoogleImg} />
                                Tiếp Tục Với Google
                            </Button>

                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn;