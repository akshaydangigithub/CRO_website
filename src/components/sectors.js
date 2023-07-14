import React from 'react'
import tourism from '../assets/img/icons/sector/tourism.png'
import emp from '../assets/img/icons/sector/emp.png'
import education from '../assets/img/icons/sector/education.png'
import real from '../assets/img/icons/sector/real.png'

const Sectors = () => {
    return (
        <>
            <section id="services" className="services section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <p>Sectors</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <div className="">
                                    <img className="pt-7 pt-md-0 w-0" src={tourism} alt="hero-header" />
                                </div>
                                <h4 className="title fs-1 text-primary"><a href="" className="text-primary">Tourism</a></h4>
                                <p className="description">
                                    One stop solution for all consumer compalints
                                    <br />
                                    Simple and intuitive platform which connects consumers with resources that they need to assert their
                                    rights and get results
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <div className="">
                                    <img className="pt-7 pt-md-0 w-0" src= {emp} alt="hero-header" />
                                </div>
                                <h4 className="title fs-1 text-primary"><a href="" className="fw-bold text-primary">Employment</a></h4>
                                <p className="description">
                                    One stop solution for all consumer compalints
                                    <br />
                                    Simple and intuitive platform which connects consumers with resources that they need to assert their
                                    rights and get results
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <div className="">
                                    <img className="pt-7 pt-md-0 w-0" src= {education} alt="hero-header" />
                                </div>
                                <h4 className="title fs-1 text-primary"><a href="" className="fw-bold text-primary">Education</a></h4>
                                <p className="description">
                                    One stop solution for all consumer compalints
                                    <br />
                                    Simple and intuitive platform which connects consumers with resources that they need to assert their
                                    rights and get results
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <div className="">
                                    <img className="pt-7 pt-md-0 w-0" src= {real} alt="hero-header" />
                                </div>
                                <h4 className="title fs-1 text-primary"><a href="" className="fw-bold text-primary">Real State</a></h4>
                                <p className="description">
                                    One stop solution for all consumer compalints
                                    <br />
                                    Simple and intuitive platform which connects consumers with resources that they need to assert their
                                    rights and get results
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sectors