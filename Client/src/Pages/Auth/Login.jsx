import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import login from '../../assets/login.png'
import { useAuth } from '../../Context/AuthContext';
import '../../styles/auth.css'
import { loginFn } from '../../helpers/AuthFn';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {auth, setAuth} = useAuth();
    const navigate = useNavigate()
    const location = useLocation();


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            toast.error('Email and password are required');
            return;
        }

        const requestBody = {
            email: email,
            password: password
        };

        const res = await loginFn(requestBody, "student");

        if (res.status === 200) {
            setAuth({
                ...auth,
                token: res.data.token,
                user: res.data.user
            });

            localStorage.setItem('auth', res.data);
            toast.success(res.data.message);
            setEmail("");
            setPassword("");
            navigate('/dashboard');
        } else {
            toast.error(res.data.message);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <div className='marginStyle'>
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                        <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                            <div class="featured-image mb-3 animateImg">
                                <img src={login} class="img-fluid" width={400} />
                            </div>
                        </div>
                        <form class="col-md-6 right-box" type="submit" >
                            <div class="row align-items-center">
                                <div class="header-text mb-4">
                                    <h2>Welcome</h2>
                                    <p>We are happy to have you back !</p>
                                </div>
                                <div class="input-group d-flex  align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder='Your email ID' class="form-control" />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder='Your password' class="form-control" />
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mt-4 ">
                                    <div class="form-outline flex-fill mb-0">
                                        <button class="btn btn-lg  text-white" type="button" onClick={handleSubmit} style={{ backgroundColor: '#24a8df', width: '100%' }} >Login</button>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center my-3 ">
                                    <div class="form-outline flex-fill mb-0 " >
                                        <Link to='/register' class="btn btn-outline-dark btn-lg btn-block" style={{ width: '100%' }} type="button">Register</Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default Login