import React from 'react'
import apply from '../../assets/apply.svg'
import find from '../../assets/find.svg'
import "../../styles/feature.css"

const Features = () => {
    return (
        <>
            <br />
            <br />
            <div className='my-5'>
                <section id="features" className="features_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-5">
                                <p className="features_subtitle">At your fingertips: a dedicated career coach.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 mb-5">
                                <div className="ft-1 text-center header-img-section">
                                    <h3 className='mt-4'>Find Your Mentor</h3>
                                    <img src={find} width={120} />
                                    <p className="features_text mt-4" style={{ textAlign: 'center' }}>Explore our growing catalogue of experienced mentors until you find the perfect fit.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-5">
                                <div className="ft-2 text-center header-img-section">
                                    <h3 className='mt-4'>Apply for Mentorship</h3>
                                    <img src={apply} width={120} />
                                    <p className="features_text mt-4" style={{ textAlign: 'center' }}>Fill in an application, and if you’re a match with your chosen mentor you can start your free 7-day trial.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-5">
                                <div className="ft-3 text-center header-img-section">
                                    <h3 className='mt-4'>Level up your skills</h3>
                                    <img src={find} width={120} className='img-fixed' />
                                    <p className="features_text mt-4" style={{ textAlign: 'center' }}>From personal chats to hands-on support, each mentor offers services to help your career.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-5">
                                <div className="ft-2 text-center header-img-section">
                                    <h3 className='mt-4'>Apply for Mentorship</h3>
                                    <img src={apply} width={120} />
                                    <p className="features_text mt-4" style={{ textAlign: 'center' }}>Fill in an application, and if you’re a match with your chosen mentor you can start your free 7-day trial.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Features
