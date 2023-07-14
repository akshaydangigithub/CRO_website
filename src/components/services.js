import React from 'react'
import '../assets/css/theme.css'
import '../assets/css/newstyle.css'
// import '../assets/css/ne.css'

const Services = () => {
    return (
        <>
            <section id="services" className="services section-bg">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <p>Why Us</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <h4 className="title fs-1 text-primary"><a href="" className="text-primary">Trust</a></h4>
                                <p className="description">Consumer often faces difficulty in asserting their rights. <br />Lack of
                                    Transparency and accountability has impacted our customers confidence</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <h4 className="title fs-1 text-primary"><a href="" className="fw-bold text-primary">Advocacy</a></h4>
                                <p className="description">
                                    Empower the customers to assert their rights with ease and transparency.
                                    <br />
                                    We are committed to promoting transparency, accountability and fairness to the marketplace
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <h4 className="title fs-1 text-primary"><a href="" className="fw-bold text-primary">One Stop Solution</a></h4>
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
                                <h4 className="title fs-1 text-primary"><a href="" className="fw-bold text-primary">Secure and Safe</a></h4>
                                <p className="description">
                                    Advanced data analytics for proactive support
                                    <br />
                                    Easy filing of complaints, Expert support real time tracking, and a database of result cases
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services