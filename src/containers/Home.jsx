import React from 'react'
import '../assets/styles/containers/Home.scss'
import LogoSVG from '../assets/images/podcast-mic.svg'
import LoginSVG from '../assets/images/podcast-person.svg'
import Dice from '../assets/images/dice_logo.png'

const Home = () => (
    <section className={"Home"}>
        <div className={"Home--item Home__header"}>
            <a className={"Home__header--logo"}>
                <img src={LogoSVG} alt="Logo"/>
                <span>RansoProject</span>
            </a>
            <div className={"Home__header--plug"}>
                <div className="header-plug">{/* Plug to toggle dark/light mode */}</div>
            </div>
            <div className={"Home__header--login"}>
                <img src={LoginSVG} alt=""/>
                <ul>
                    <li><a href="#"></a>Home</li>
                    <li><a href="#"></a>Statistics</li>
                    <li><a href="#"></a>My Account</li>
                    <li><a href="#"></a>Exit</li>
                </ul>
            </div>
        </div>
        <div className={"Home--item Home__aside"}>
            <ul>
                <li>Podcasters</li>
                <li>Queue</li>
                <li>Explorar</li>
                <li>Mi Podcast</li>
                <li>Configuración</li>
            </ul>
            <footer>
                <span>RansoProject 2019 | All rights reserved</span>
            </footer>
        </div>
        <div className={"Home--item Home__main"}>
            <div className={"Home__main__carousel"}>
                <h2>Tendencias</h2>
                <div className={"Home__main__carousel__cards"}>
                    <div className={"Home__main__carousel__cards--card"}>
                        <div className={"card--img"}>
                            <img src={Dice} alt="image"/>
                        </div>
                        <div className={"card--description"}>
                            <h3>Título del Podcast</h3>
                            <div>
                                <span>Genre 1</span>
                                <span>Genre 2</span>
                            </div>
                            <button>Ver Podcast</button>
                        </div>
                    </div>
                    <div className={"Home__main__carousel__cards--card"}>
                        <div className={"card--img"}>
                            <img src={Dice} alt="image"/>
                        </div>
                        <div className={"card--description"}>
                            <h3>Título del Podcast</h3>
                            <div>
                                <span>Genre 1</span>
                                <span>Genre 2</span>
                            </div>
                            <button>Ver Podcast</button>
                        </div>
                    </div>
                    <div className={"Home__main__carousel__cards--card"}>
                        <div className={"card--img"}>
                            <img src={Dice} alt="image"/>
                        </div>
                        <div className={"card--description"}>
                            <h3>Título del Podcast</h3>
                            <div>
                                <span>Genre 1</span>
                                <span>Genre 2</span>
                            </div>
                            <button>Ver Podcast</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"Home__main__carousel"}>
                <h2>Carousel</h2>
                <div className={"Home__main__carousel__cards"}>
                    <div className={"Home__main__carousel__cards--card"}>
                        <div className={"card--img"}>
                            <img src={Dice} alt="image"/>
                        </div>
                        <div className={"card--description"}>
                            <h3>Título del Podcast</h3>
                            <div>
                                <span>Genre 1</span>
                                <span>Genre 2</span>
                            </div>
                            <button>Ver Podcast</button>
                        </div>
                    </div>
                    <div className={"Home__main__carousel__cards--card"}>
                        <div className={"card--img"}>
                            <img src={Dice} alt="image"/>
                        </div>
                        <div className={"card--description"}>
                            <h3>Título del Podcast</h3>
                            <div>
                                <span>Genre 1</span>
                                <span>Genre 2</span>
                            </div>
                            <button>Ver Podcast</button>
                        </div>
                    </div>
                    <div className={"Home__main__carousel__cards--card"}>
                        <div className={"card--img"}>
                            <img src={Dice} alt="image"/>
                        </div>
                        <div className={"card--description"}>
                            <h3>Título del Podcast</h3>
                            <div>
                                <span>Genre 1</span>
                                <span>Genre 2</span>
                            </div>
                            <button>Ver Podcast</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={"Home--item Home__player"}>
            <div>imagen de podcast</div>
            <div>reproductor y controles</div>
            <div>menu de podcaste player</div>
        </div>
    </section>
)

export default Home