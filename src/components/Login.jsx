import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';

import { IoKeyOutline } from 'react-icons/io5'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineGooglePlus} from 'react-icons/ai'


function Login() {

    const [emaillog, setEmaillog] = useState(" ");
    const [passwordlog, setPasswordlog] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('hardikSubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('hardikSubmissionEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }


    return (
        <>
            <div className="contoo">

                <div className="inp">
                    <div className="inp_">
                        <form onSubmit={handleLogin}>
                            <section className="main">
                                <div className="register">
                                    <div className="line"> <p></p></div>
                                    <div className="welcome">
                                        <div className="easydev">
                                            <div className="easy_first">
                                                <p>Welcome to <span>Easy</span><span>Dev</span></p></div>
                                        </div>
                                        <div className="easy_second">
                                            <p>Start your business easily</p>
                                        </div>

                                    </div>

                                </div>

                            </section>
                            <label htmlFor="">E-mail</label>
                            <div className="gmail">
                                <p>@</p>
                                <input type="email" placeholder='example@gmail.com' onChange={(event) => setEmaillog(event.target.value)} />
                            </div>
                            <label htmlFor="">Password</label>

                            <div className="pass">
                                <p><IoKeyOutline /></p>
                                <input type="password" placeholder='Password' onChange={(event) => setPasswordlog(event.target.value)} />
                            </div>
                            <a href="##" className='forgot-pass' >Forgot a password?</a>

                            <div className="rememberMe">
                                <input type="checkbox" />

                                <p>Remember me</p>

                            </div>

                            <div className="btnLog">

                                <button type="submit" className="">Sign In</button>
                                <a href='./Registration.jsx' > Create Account</a>
                            </div>
                            

                            <div className="orEasilyUsing">
                                <div></div><p>Or Easily Using</p><div></div>
                            </div>

                            <div className="icone">
                                <div className="facebook">
                                    <a href="##"><FaFacebookF/></a>
                                </div>
                                <div className="google">
                                    <a href="##"><AiOutlineGooglePlus/></a>
                                </div>
                                <div className="facebook">
                                    <a href="##"><FaFacebookF/></a>
                                </div>
                                <div className="google">
                                    <a href="##"><AiOutlineGooglePlus/></a>
                                </div>
                            </div>

                            {flag && <Alert color='primary' variant="warning" className=' warnings' >
                                Emailiniz ve ya parolunuz yanlish yazmisiniz! :D
                            </Alert>}


                        </form>
                    </div>
                </div>

            </div>










        </>

    )
}

export default Login
