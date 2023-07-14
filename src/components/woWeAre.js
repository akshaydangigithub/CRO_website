import React from 'react'
import ani from '../assets/img/ani.gif'
import edit from '../assets/img/icons/edit.svg'
import moniter from '../assets/img/icons/monitor.svg'
import cloud from '../assets/img/icons/cloud.svg'

const WoWeAre = () => {
    return (
        <>
            <section className="py-6">

                <div>
                    <div className="row flex-center">
                        <div className="col-md-6 col-lg-4 text-center mb-6 mb-md-0 order-0"><img className="shadow-lg"
                            src= {ani} width="400" alt="..." style={{ borderRadius: "3rem" }} />
                        </div>
                        <div className="col-md-6 text-center text-md-start mb-6 offset-0">
                            <h6 className="fs-0 text-uppercase fw-bold text-primary">Who we are ?</h6>
                            <h6 className="fw-bold fs-2 fs-lg-3 lh-sm">Welcome to India’s leading consumer rights organisation</h6>
                            <p className="my-4 fs-1 pe-xl-8">cro is an online consumer complaint platform in India that helps consumers
                                resolve their complaints against companies quickly and effectively. The platform allows consumers to file
                                complaints against companies and provides a hassle-free resolution process that includes escalation of the
                                complaint to higher authorities, legal notice drafting, and even filing a consumer court case if required
                            </p><a className="btn hover-top btn-collab" href="#" role="button">Learn more</a>
                        </div>
                    </div>
                    <div className="row flex-center">
                        <h6 className="fw-bold fs-2 fs-lg-3 lh-sm" style={{textAlign:"center", marginBottom:"-5rem"}}>File a complaint in
                            just three steps</h6>
                        <div className="col-md-4 col-lg-3 mt-4 mt-lg-8 text-center text-md-start">
                            <div className="badge bg-soft-danger p-3 rounded-3"><img className="w-100 h-100" src= {edit}
                                alt="..." /></div>
                            <h4 className="mt-5 mb-3 fw-bold">Fill the form</h4>
                            <p className="fs-1 lh-sm d-none d-md-block d-lg-none">Fill up the complaint form<br /> as
                                with full details of your complaint.</p>
                        </div>
                        <div className="col-md-4 col-lg-3 mt-4 mt-lg-8 text-center text-md-start">
                            <div className="badge bg-soft-danger p-3 rounded-3"><img className="w-100 h-100" src= {moniter}
                                alt="..." /></div>
                            <h4 className="mt-5 mb-3 fw-bold">Track your complaint</h4>
                            <p className="fs-1 lh-sm d-none d-md-block d-lg-none">Track your complaint status <br /> in your dashbord
                                realtime.</p>
                        </div>
                        <div className="col-md-4 col-lg-3 mt-4 mt-lg-8 text-center text-md-start">
                            <div className="badge bg-soft-danger p-3 rounded-3"><img className="w-100 h-100" src= {cloud}
                                alt="..." /></div>
                            <h4 className="mt-5 mb-3 fw-bold">Solve under 48 hours</h4>
                            <p className="fs-1 lh-sm d-none d-md-block d-lg-none">Your complaint will be solved<br />under 48 hours.
                            </p>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default WoWeAre