import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import '../../Assests/Css/hero.css'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate()

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !password.trim() || !phone.trim() || !address.trim()) {
            toast.error('All fields are required');
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('phone', phone);
        formData.append('address', address);

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/register`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);

                navigate('/login');
            } else {
                toast.error(data.message);

            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <div className='marginStyle'>
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="row border rounded-5 p-3 bg-white shadow box-area reverseCol">
                        <div class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box">
                            <div class="featured-image mb-3 animateImg">
                                <img src="" class="img-fluid" width={500} />
                            </div>
                        </div>
                        <div class="col-md-6 right-box">
                            <div class="row align-items-center">
                                <div class="header-text mb-4">
                                    <h2>Welcome</h2>
                                    <p>Your Dream Car is Waiting !</p>
                                </div>
                                <div class="input-group d-flex  align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name' required type="text" class="form-control" />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder='Your email ID' class="form-control " />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} required type="password" placeholder='Your password' class="form-control " />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" required placeholder='Your phone number' class="form-control " />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" required placeholder='Your address' class="form-control" />
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mt-4 ">
                                    <div class="form-outline flex-fill mb-0">
                                        <button class="btn btn-lg  text-white" type="button" onClick={handleSubmit} style={{ backgroundColor: 'blueviolet', width: '100%' }} >Register</button>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center my-3 ">
                                    <div class="form-outline flex-fill mb-0 " >
                                        <Link to='/login' class="btn btn-outline-dark btn-lg btn-block" style={{ width: '100%' }} type="button">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    )
}

export default Register