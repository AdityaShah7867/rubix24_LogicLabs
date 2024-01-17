import React from "react";
import '../styles/allmentors.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdStars } from "react-icons/md";

const AllMentors = () => {
    return (
        <div>
            <br />
            <br />
            <div class="row py-5 px-4">
                <div class="col-md-9 mx-auto">
                    <div class="bg-white shadow rounded overflow-hidden">
                        <div class="px-4 pt-0 pb-4 coverBanner">
                            <div class="media align-items-end profile-head">
                                <div class="profile mr-3">
                                    <img
                                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                                        alt="..."
                                        width="170"
                                        class="rounded mb-2 "
                                    />
                                </div>
                                <div class="media-body mb-5 text-white">
                                    <h4 class="mt-0 mb-0">Mark Williams</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-6 px-4 py-3">
                                <div class="p-4 rounded bg-light">
                                    <h4 class="mb-3">About</h4>
                                    <p class="font-italic mb-0" style={{ color: "#06bbcc" }}>Product Strategy Director @ Oracle</p>
                                    <p class="font-italic mb-0">Product Strategist, Solution Engineer and Project Manager</p>
                                    <p className="mt-4"><FaLocationDot size={20} color="#06bbcc" /> India</p>
                                    <p><MdStars size={20} color="#06bbcc" />  5 Stars</p>
                                </div>
                            </div>
                            <div class="col-md-6 px-4 py-3">
                                <div class="p-4 rounded bg-light">
                                    <h4 class="mb-3">Skills</h4>
                                    <span class="badge text-bg-dark p-2 rounded-pill">Web Development</span>
                                    <span class="badge text-bg-dark p-2 m-2 rounded-pill">App Development</span>
                                    <span class="badge text-bg-dark p-2 m-2 rounded-pill">Machine Learning</span>
                                    <span class="badge text-bg-dark p-2  rounded-pill">Entrepreneurship</span>
                                    <span class="badge text-bg-dark p-2 m-2 rounded-pill">Artificial Inteligence</span>
                                </div>
                            </div>
                        </div>
                        <div class="py-4 px-4">
                            <div class="d-flex align-items-center justify-content-between mb-3">
                                <h5 class="mb-0">Recent Sessions</h5>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 mb-2 pr-lg-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                                        class="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div class="col-lg-6 mb-2 pl-lg-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                                        class="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div class="col-lg-6 pr-lg-1 mb-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                                        alt=""
                                        class="img-fluid rounded shadow-sm"
                                    />
                                </div>
                                <div class="col-lg-6 pl-lg-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                                        alt=""
                                        class="img-fluid rounded shadow-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllMentors;
