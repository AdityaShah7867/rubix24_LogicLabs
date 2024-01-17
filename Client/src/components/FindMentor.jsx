import React, { useEffect } from 'react'
import login from '../assets/login.png'
import '../styles/auth.css'

const FindMentor = () => {

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
                                <div class="header-text mb-1">
                                    <h2 style={{ color: "#24a8df" }}>Find Your Mentor</h2>
                                    <p>Learn a new skill, launch a project, land your dream career !</p>
                                </div>
                                <div class="alert alert-danger mb-4 mx-2" role="alert">
                                    Note : Please Enter comma separated values only !
                                </div>
                                <div class="input-group d-flex  align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input required type="text" placeholder='Add Your Skills' class="form-control" />
                                    </div>
                                </div>
                                <div class="input-group d-flex flex-row align-items-center mb-3">
                                    <div class="form-outline flex-fill mb-0">
                                        <input required type="text" placeholder='Add Your Interest' class="form-control" />
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mt-4 ">
                                    <div class="form-outline flex-fill mb-0">
                                        <button class="btn btn-lg  text-white" type="button" style={{ backgroundColor: '#24a8df', width: '100%' }} >Find Now</button>
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

export default FindMentor
