import React from 'react'
import heroHeaderGif from '../assets/img/gallery/hero-header.gif'
import '../assets/css/theme.css'

const Home = () => {
    return (
        <>
            <section id="home">
                <div className="container">
                    <div className="row align-items-center g-2">
                        <div className="col-md-5 col-lg-6 order-0 order-md-1 text-end"><img className="pt-7 pt-md-0 w-100"
                            src= {heroHeaderGif} alt="hero-header" />
                        </div>
                        <div className="col-md-7 col-lg-6 py-6 text-md-start text-center">
                            {/* <!-- <h6 className="fs-0 text-uppercase fw-bold text-600">Top Business App</h6> --> */}
                            <h1 className="fw-bold fs-4 fs-lg-4 fs-xxl-7 " style={{ fontSize: "12px" }} > Welcome to India's leading<br />better
                                cooperation</h1>
                            <p className="fw-bold mb-5 fs-4 fw-medium text-primary">Consumer Rights Organization <br
                                className="d-none d-xl-block fs-6" />CRO
                            </p><a className="btn hover-top btn-collab" href="#!"><i className="fas fa-download me-2"></i> File a Complaint</a>
                            {/* <!-- <a className="btn hover-top btn-collab-outline text-gradient ms-2" href="#!">
                                <i className="fas fa-play text-danger me-md-2 me-0"></i> File a Complaint</a> --> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home