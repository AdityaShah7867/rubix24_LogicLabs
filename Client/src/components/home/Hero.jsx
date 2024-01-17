import React from 'react'
import '../../styles/hero.css'
import hero from '../../assets/hero.png'
import { Link } from 'react-router-dom'
import { FaCheck } from "react-icons/fa";

const Hero = () => {
    return (
        <>
            <div className='mt-5'>
                <section className='banner_wrapper'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-md-7 header-img-section'>
                                <img src={hero} alt='Hello Carwale' className='img-fluid' />
                            </div>
                            <div className="col-md-5 my-5 my-md-0 text-center text-md-start">
                                <p className="banner-subtitle">Learn a new skill, launch a project, land your dream career</p>
                                <h1 className="banner-title">Driving Dreams into <span>Reality</span> </h1>
                                <h5 className="banner-title-text " style={{ textAlign: '' }}>Learn a new skill, launch a project, land your dream career</h5>
                                <h6 className='mt-0'><FaCheck size={20} color='#fffb00' className='mx-2' /> 1-on-1 Backend Mentorship</h6>
                                <div className="learn-more-btn-section">
                                    <Link to='/cars' className="nav-link learn-more-btn btn-header" href="#car">Shop Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="custom-shape-divider-bottom-1695048439">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Hero
