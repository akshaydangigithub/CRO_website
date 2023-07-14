import React, { useEffect, useState } from 'react'
import { gsap, Expo } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../assets/css/count.css'



const Count = () => {

    gsap.registerPlugin(ScrollTrigger);
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [num3, setNum3] = useState(0)
    const [num4, setNum4] = useState(0)

    useEffect(() => {

        const updateContent = () => {
            setNum1((prevNum1) => {
                const newNum1 = prevNum1 + 1;
                return newNum1 > 27 ? 27 : newNum1;
            });

            setNum2((prevNum2) => {
                const newNum2 = prevNum2 + 4;
                return newNum2 > 1000 ? 1000 : newNum2;
            });

            setNum3((prevNum3) => {
                const newNum3 = prevNum3 + 8;
                return newNum3 > 3000 ? 3000 : newNum3;
            });

            setNum4((prevNum4) => {
                const newNum4 = prevNum4 + 4;
                return newNum4 > 1000 ? 1000 : newNum4;
            });
        }

        gsap.to('.num1', {
            scrollTrigger: {
                trigger: '.main',
                start: 'top -70%',
            },
            onUpdate: updateContent,
            ease: 'Expo.ease',
            duration: 2.5,
        });
        gsap.to('.num2', {
            scrollTrigger: {
                trigger: '.main',
                start: 'top -70%',
            },
            onUpdate: updateContent,
            ease: 'Expo.ease',
            duration: 2.5,
        });

        gsap.to('.num3', {
            scrollTrigger: {
                trigger: '.main',
                start: 'top -70%'
            },
            onUpdate: updateContent,
            ease: 'Expo.ease',
            duration: 2.5,
        });

        gsap.to('.num4', {
            scrollTrigger: {
                trigger: '.main',
                start: 'top -70%',
            },
            onUpdate: updateContent,
            ease: 'Expo.ease',
            duration: 2.5,
        });

    }, []);

    return (
        <>
            <section className="py-6 bg-soft-warning">
                <div className="container">
                    <div className="row">
                        {/* <!-- <div
                            className="col-auto col-lg-12 d-lg-flex justify-content-center align-items-center justify-content-lg-between">
                            <img className="m-2" src="assets/img/gallery/netflix.png" height="28" alt="brands" />
                            <img className="m-2" src="assets/img/gallery/facebook.png" height="30" alt="brands" />
                            <img className="m-2" src="assets/img/gallery/freelancer.png" height="38" alt="brands" />
                            <img className="m-2" src="assets/img/gallery/mailbluster.png" height="38" alt="brands" />
                            <img className="m-2" src="assets/img/gallery/theme-wagon.png" height="38" alt="brands" />
                        </div> --> */}
                        <div className="count-main">
                            <div className="inner-main">
                                <div className="count-inner">
                                    <h1><span className="num1">{num1}</span>+</h1>
                                    <div className="line"></div>
                                    <h2>STATES</h2>
                                </div>
                            </div>
                            <div className="inner-main">
                                <div className="count-inner">
                                    <h1><span className="num2">{num2}</span>+</h1>
                                    <div className="line"></div>
                                    <h2>COMPLAINTS</h2>
                                </div>
                            </div>
                            <div className="inner-main">
                                <div className="count-inner">
                                    <h1><span className="num3">{num3}</span>+</h1>
                                    <div className="line"></div>
                                    <h2>MEMBERS</h2>
                                </div>
                            </div>
                            <div className="inner-main">
                                <div className="count-inner">
                                    <h1><span className="num4">{num4}</span>+</h1>
                                    <div className="line"></div>
                                    <h2>ACTIVITIES</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Count