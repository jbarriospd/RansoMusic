import React from 'react'
import '../assets/styles/containers/Uploader.scss'
import LogoSVG from '../assets/images/podcast-mic.svg'
import LoginSVG from '../assets/images/podcast-person.svg'
import Dice from '../assets/images/dice_logo.png'

const Uploader = () => (
    <section className={"Uploader"}>
        <div className={"Uploader--item Uploader__header"}>
            <a className={"Uploader__header--logo"}>
                <img src={LogoSVG} alt="Logo"/>
                <span>RansoProject</span>
            </a>
            <div className={"Uploader__header--plug"}>
                <div className="header-plug">{/* Plug to toggle dark/light mode */}</div>
            </div>
            <div className={"Uploader__header--login"}>
                <img src={LoginSVG} alt=""/>
                <ul>
                    <li><a href="#"></a>Uploader</li>
                    <li><a href="#"></a>Upload</li>
                    <li><a href="#"></a>Statistics</li>
                    <li><a href="#"></a>My Account</li>
                    <li><a href="#"></a>Exit</li>
                </ul>
            </div>
        </div>
        <div className={"Uploader--item Uploader__aside"}>
            <ul>
                <li>Mi Podcast</li>
                <li>Podcasters</li>
                <li>Queue</li>
                <li>Explorar</li>
                <li>Configuración</li>
            </ul>
            <footer>
                <span>RansoProject 2019 | All rights reserved</span>
            </footer>
        </div>
        <div className={"Uploader--item Uploader__main"}>
            <div class={"Uploader__main--wrapper"}>
                <h2>Podcast Uploader</h2>
                <div class={"Uploader__main--wrapper--file-upload"}>
                    <input type="file" name="" id="" />
                    <h6>Upload</h6>
                </div>
            </div>  
        </div>
        <div className={"Uploader--item Uploader__player"}>
            <div className={"Uploader__player--author"}>
                <div><img src={Dice} alt=""/></div>
                <div>
                    <p>Title</p>
                    <p>Author</p>
                </div>
            </div>
            <div className={"Uploader__player--play"}>
                <div className={"player--play--back"}> <button>&#9668;&#9668;</button> </div>
                <div className={"player--play--play"}><button>&#9658;</button></div>
                <div className={"player--play--forth"}><button>&#9658;&#9658;</button> </div>
            </div>
            <div className={"Uploader__player--controls"}>
                <div className={"player--controls--volume"}>
                    <div className={"volume-control"}>
                        <input id="volume" type="range" value={"100"} max={"100"} />
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Uploader