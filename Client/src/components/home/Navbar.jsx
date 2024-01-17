import React, { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import '../../styles/navbar.css'
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setcolor] = useState(false)

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return (
        <header className={color ? 'header_wrapper header-scrolled' : 'header_wrapper'}>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid mx-3">
                    <Link to='/'>
                        <img src={logo} style={{ width: "125px" }} className='' />
                    </Link>
                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <BiMenuAltRight size={35} />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav menu-navbar-nav">
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">Home</a>
                                </li>
                            </Link>
                            <Link to='/allmentors' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">Mentors</a>
                                </li>
                            </Link>
                            <Link to='/brands' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">Brands</a>
                                </li>
                            </Link>
                            <Link to='/cars' style={{ textDecoration: 'none' }}>
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page">Cars</a>
                                </li>
                            </Link>
                        </ul>
                        <ul className='mt-2 text-center'>
                            <Link to='/login' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                <a className="nav-link learn-more-btn btn-extra-header" aria-current="page">Login</a>
                            </Link>
                            <Link to='/register' style={{ textDecoration: 'none' }} className="nav-item text-center">
                                <a className="nav-link learn-more-btn" aria-current="page">Register</a>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar