import React from 'react'
// import '../assets/js/theme'



const Questions = () => {
    return (
        <>
            <section className="pb-md-10" id="faq" style={{marginTop: "-7rem"}}>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 text-center mb-3">
                            <h6 className="fw-bold fs-4 display-3 lh-sm mb-5">Frequently asked questions</h6>
                        </div>
                    </div>
                    <div className="row flex-center">
                        <div className="col-lg-9">
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item border-top">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button px-2" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1"><span
                                                className="mb-0 fw-bold text-start fs-1 text-1000">Who should use the app?</span></button>
                                    </h2>
                                    <div className="accordion-collapse collapse show" id="collapse1" aria-labelledby="heading1"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body pt-0 px-2">All our users like the amazing features and illustration of our
                                            app and it effective working procedure. Most of them are highly satisfied with our support and
                                            collaboration ideas which are counted as quite an essential in the tech business. With a team of
                                            highly creative and lively developers and manager, all our issues are promised to be solved in no
                                            time at all.</div>
                                    </div>
                                </div>
                                <div className="accordion-item border-top">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2"><span
                                                className="mb-0 fw-bold text-start fs-1 text-1000">What is the working procedure of the
                                                app?</span></button>
                                    </h2>
                                    <div className="accordion-collapse collapse" id="collapse2" aria-labelledby="heading2"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body pt-0 px-2">You can issue either partial or full refunds. There are no fees
                                            to refund a charge, but the fees from the original charge are not returned.</div>
                                    </div>
                                </div>
                                <div className="accordion-item border-top">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3"><span
                                                className="mb-0 fw-bold text-start fs-1 text-1000">How is the app helpful?</span></button>
                                    </h2>
                                    <div className="accordion-collapse collapse" id="collapse3" aria-labelledby="heading3"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body pt-0 px-2">Disputed payments (also known as chargebacks) incur a $15.00
                                            fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded.</div>
                                    </div>
                                </div>
                                <div className="accordion-item border-top">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4"><span
                                                className="mb-0 fw-bold text-start fs-1 text-1000">Is the app workable while you got no
                                                internet?</span></button>
                                    </h2>
                                    <div className="accordion-collapse collapse" id="collapse4" aria-labelledby="heading4"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body pt-0 px-2">There are no additional fees for using our mobile SDKs or to
                                            accept payments using consumer wallets like Apple Pay or Google Pay.</div>
                                    </div>
                                </div>
                                <div className="accordion-item border-top">
                                    <h2 className="accordion-header" id="heading5">
                                        <button className="accordion-button px-2 collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5"><span
                                                className="mb-0 fw-bold text-start fs-1 text-1000">What are the security measure of the
                                                app?</span></button>
                                    </h2>
                                    <div className="accordion-collapse collapse" id="collapse5" aria-labelledby="heading5"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body pt-0 px-2">There are no additional fees for using our mobile SDKs or to
                                            accept payments using consumer wallets like Apple Pay or Google Pay.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Questions