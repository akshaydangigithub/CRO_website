import React from 'react'
import corroboration from '../assets/img/gallery/corroboration.png'

const DownloadApp = () => {
    return (
        <>
            <section className="py-6" style={{ background: "linear-gradient(180deg, #FFFEFC -54.51%, #FFF8F0 99.98%)" }}>

                <div className="container">
                    <div className="row flex-center">
                        <div className="col-md-6 col-lg-4 text-center mb-6 mb-md-0 order-0 order-md-1"><img className="shadow-collab"
                            src= {corroboration} width="300" alt="..." style={{borderRadius:"3rem"}} /></div>
                        <div className="col-md-6 text-center text-md-start mb-6 offset-lg-1">
                            <h6 className="fs-0 text-uppercase fw-bold text-primary">Android Application</h6>
                            <h6 className="fw-bold fs-3 fs-lg-5 lh-sm">Download our android application</h6>
                            <p className="my-4 fs-1 pe-xl-8">Download our android application to file, track your complaints from anywhere
                            </p><a className="btn hover-top btn-collab" href="#" role="button">Download Now</a>
                        </div>
                    </div>
                    {/* <!-- <div className="row flex-center">
                        <div className="col-md-4 col-lg-3 mt-4 mt-lg-8 text-center text-md-start">
                            <div className="badge bg-white p-3 rounded-3"><img className="w-100 h-100" src="assets/img/icons/video.svg"
                                alt="..." /></div>
                            <h4 className="mt-5 mb-3 fw-bold">Video conferencing</h4>
                            <p className="fs-1 lh-sm"><span className="text-900">Communicating through video on elaborate <br
                                className="d-none d-md-block d-lg-none"> workflow and understanding.</span></p>
                        </div>
                        <div className="col-md-4 col-lg-3 mt-4 mt-lg-8 text-center text-md-start">
                            <div className="badge bg-white p-3 rounded-3"><img className="w-100 h-100" src="assets/img/icons/chat.svg"
                                alt="..." /></div>
                            <h4 className="mt-5 mb-3 fw-bold">Talk with mates</h4>
                            <p className="fs-1 lh-sm"><span className="text-900">Stay communicated with all the colleagues<br
                                className="d-none d-md-block d-lg-none"> and brush up your social skill.</span></p>
                        </div>
                        <div className="col-md-4 col-lg-3 mt-4 mt-lg-8 text-center text-md-start">
                            <div className="badge bg-white p-3 rounded-3"><img className="w-100 h-100" src="assets/img/icons/image.svg"
                                alt="..." /></div>
                            <h4 className="mt-5 mb-3 fw-bold">High quality image sharing</h4>
                            <p className="fs-1 lh-sm"><span className="text-900">Click it and share the top <br
                                className="d-none d-md-block d-lg-none">quality images to all the member of your group.</span></p>
                        </div>
                    </div> --> */}
                </div>

            </section>
        </>
    )
}

export default DownloadApp