import React from 'react'
import Header from "../components/GlobalComponents/Header/Header"
import Hero from "../components/Hero/Hero"
import Partner from "../components/Partners/Partners"
import Gallery from "../components/Gallery/Gallery"
import './HomePage.css'
import Footer from "../components/GlobalComponents/Footer/Footer"

function HomePage() {
    return (
        <>
        <div className="home">
            <Header />
            <Hero></Hero>
           
        </div>
        
         <Partner />
         <Gallery />
         <Footer/>
         </>
    )
}

export default HomePage
