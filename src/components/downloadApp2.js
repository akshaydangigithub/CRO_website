import React from 'react'
import cta_2_bg from '../assets/img/gallery/cta-2-bg.png'
import cta_2 from '../assets/img/gallery/cta-2.png'
import google_play from '../assets/img/gallery/google-play.png'
import app_store from '../assets/img/gallery/app-store.png'

const DownloadApp2 = () => {
    return (
        <>

            <section className="py-md-0">
                <div className="bg-holder" style={{backgroundImage: `url(${cta_2_bg})`, backgroundPosition:"center"}}>
                </div>


                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 col-lg-3 text-center"><img className="mt-n8 d-none d-md-block w-100"
                            src= {cta_2} alt="cta" /></div>
                        <div className="col-md-7 col-lg-8 offset-lg-1">
                            <h1 className="fw-bold fs-4 fs-lg-5 mb-4 text-white">Download our android application to file, track your
                                complaints <br className="d-none d-xxl-block" />enjoy the complete fun</h1><a className="pe-2"
                                    href="https://www.apple.com/app-store/" target="_blank"><img src= {app_store}
                                        width="160" alt="" /></a><a href="https://play.google.com/store/apps" target="_blank"><img
                                            src= {google_play} width="160" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DownloadApp2