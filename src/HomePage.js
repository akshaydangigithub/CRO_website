import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import Services from './components/services'
import Count from './components/count'
import WoWeAre from './components/woWeAre'
import Sectors from './components/sectors'
import DownloadApp from './components/downloadApp'
import Testimonials from './components/testimonials'
import Questions from './components/questions'
import Team from './components/team'
import DownloadApp2 from './components/downloadApp2'
import Footer from './components/footer'

const HomePage = () => {
    return (
        <>
            <main className='main'>
                <Navbar />
                <Home />
                <Services />
                <Count />
                <WoWeAre />
                <Sectors />
                <DownloadApp />
                <Testimonials />
                <Questions />
                <Team />
                <DownloadApp2 />
                <Footer />
            </main>
        </>
    )
}

export default HomePage