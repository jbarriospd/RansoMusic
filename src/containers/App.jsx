import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/Login'
import Register from '../components/Login'
// import OnBoarding from '../components/Login'
// import Podcast from '../components/Login'
import '../assets/styles/App.scss'

const App = () => (
    <>
        <Header />
        {/* <Register /> */}
        {/* <OnBoarding /> */}
        {/* <Podcast /> */}
        <Login />
        <Footer />
    </>
)

export default App