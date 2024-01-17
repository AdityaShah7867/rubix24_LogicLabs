import React from 'react'
import "../../styles/pricing.css"
import { MdCancel } from "react-icons/md";

const Pricing = () => {
    return (
        <div>
            <section class="pricing py-5">
                <div class="container">
                    <div className='container mb-5'>
                        <h2 className='text-center' style={{ color: "#24a8df" }} >Our Pricing Plan</h2>
                        <h3 className='text-center'>An arsenal of industry veterans and mentoring packages at a flexible price.</h3>
                    </div>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-5 mb-lg-0">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
                                    <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>

                                    </ul>
                                    <div class="d-grid">
                                        <a class="btn text-uppercase learn-more-btn">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card mb-5 mb-lg-0">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Plus</h5>
                                    <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                    </ul>
                                    <div class="d-grid">
                                        <a href="#" class="btn learn-more-btn text-uppercase">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">Pro</h5>
                                    <h6 class="card-price text-center">$49<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong>
                                        </li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
                                        <li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free
                                            Subdomains</li>
                                    </ul>
                                    <div class="d-grid">
                                        <a href="#" class="btn learn-more-btn text-uppercase">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Pricing