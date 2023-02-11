import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Login from './Login';

//icone
import { AiOutlineUser } from 'react-icons/ai'
import { IoKeyOutline } from 'react-icons/io5'


function Registration() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !email || !password) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
            localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }




    return (
        <>
            <div className="container">

                <div className='container-main' >

                    <div className="contoo">

                        {login ? <form onSubmit={handleFormSubmit}>
                            <section className="main">
                                <div className="register">
                                    <div className="line"> <p></p></div>
                                    <div className="welcome">
                                        <div className="easydev">
                                            <div className="easy_first">
                                                <p>Welcome to <span>Easy</span><span>Dev</span></p></div>
                                        </div>
                                        <div className="easy_second">
                                            <p>Create an account</p>
                                        </div>

                                    </div>

                                </div>

                            </section>
                            <section className="inp">
                                <div className="inp_">
                                    <label htmlFor="">Username</label>
                                    <div className="username">
                                        <p><AiOutlineUser /></p>
                                        <input type="text" placeholder='Name' onChange={(event) => setName(event.target.value)} />
                                    </div>

                                    <label htmlFor="">E-mail</label>
                                    <div className="gmail">
                                        <p>@</p>
                                        <input type="email" placeholder='example@gmail.com' onChange={(event) => setEmail(event.target.value)} />
                                    </div>
                                    <label htmlFor="">Password</label>

                                    <div className="pass">
                                        <p><IoKeyOutline /></p>
                                        <input type="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} />

                                    </div>

                                    <button type="submit" className="btn btn-dark btn-lg btn-block">Sign Up</button>
                                </div>


                            </section>




                            <p className="forgot-password">
                                Already registered <pre> </pre> <a href="##" onClick={handleClick} > log in?</a>
                            </p>


                            <div className="warnings">
                                {flag &&
                                    <Alert variant="danger" >
                                        Xanalari tam doldurmamisiniz! Yoxlayin :D
                                    </Alert>
                                }
                            </div>



                        </form> : <Login />}



                    </div>


                </div>
            </div>
        </>
    )
}

export default Registration
