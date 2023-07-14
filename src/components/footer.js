import React from 'react'
import facebook from '../assets/img/icons/facebook.svg'
import twitter from '../assets/img/icons/twitter.svg'
import instagram from '../assets/img/icons/instagram.svg'
import snapchat from '../assets/img/icons/snapchat.svg'

const Footer = () => {
    return (
        <>
            <section>
                <div className="container">
                    {/* <!-- <div className="row flex-center mt-5">
                        <div className="col-lg-6">
                            <h4 className="fw-bold">For more, Subscribe now</h4>
                            <p className="fs-1">Stay updated and work accordingly </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-lg-end mb-4">
                            <form className="row row row-cols-lg-auto align-items-center">
                                <div className="col-8 col-sm-9">
                                    <label className="visually-hidden" for="colFormLabel">Username</label>
                                    <div className="input-group">
                                        <input className="form-control" id="colFormLabel" type="email" placeholder="Enter email address" />
                                    </div>
                                </div>
                                <div className="col-4 col-sm-3 text-end">
                                    <button className="btn btn-collab" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div> --> */}
                    <hr className="text-200" />
                    <div className="row justify-content-lg-between circle-blend-right circle-danger">
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">Quick Links</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Testimonials</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Our Team</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">About Us</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">Legal</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Terms & Conditions</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Privacy Policy</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Refund Policy</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">Important Links</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">https://www.india.gov.in</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">https://www.mygov.in</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">https://ncdrc.nic.in</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">https://consumeraffairs.nic.in</a>
                                </li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">https://consumerhelpline.gov.in</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">Complaint</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">File a Complaint</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Feedback</a></li>
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Report</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">Membership</h6>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="mb-2"><a className="text-1100 text-decoration-none" href="#!">Buy Membership</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-auto mb-3">
                            <h6 className="my-4 fw-bold fs-0">FOLLOW</h6>
                            <ul className="list-unstyled list-inline my-3">
                                <li className="list-inline-item me-3"><a className="text-decoration-none" href="#!"><img className="list-social-icon"
                                    src= {facebook} alt="" /></a></li>
                                <li className="list-inline-item me-3"><a className="text-decoration-none" href="#!"><img className="list-social-icon"
                                    src= {twitter} alt="" /></a></li>
                                <li className="list-inline-item me-3"><a className="text-decoration-none" href="#!"><img className="list-social-icon"
                                    src= {instagram} alt="" /></a></li>
                                <li className="list-inline-item"><a className="text-decoration-none" href="#!"><img className="list-social-icon"
                                    src= {snapchat} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="text-200 mb-0" />
                    <div className="row justify-content-md-between justify-content-evenly py-3">
                        <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                            <p className="fs-0 my-2 text-400">All rights Reserved <span className="fw-bold text-500">&copy; thecro.in,
                                2023</span></p>
                        </div>
                        <div className="col-12 col-sm-8 col-md-6">
                            <p className="text-center text-md-end text-400"> Developed and manage by<a className="fw-bold text-500"
                                href="https://softseekersinfotech.com/" target="_blank"> Softseekers Infotech Private Limited
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer