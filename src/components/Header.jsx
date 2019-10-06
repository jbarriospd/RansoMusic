import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = () => (
  <header className="Header">
    <div className="Header__logo">
      <img  alt="Ranso Project" />
    </div>
    <div className="Header__profile">
      <div className="Header__profile--image">
        <img  alt="" />
        <p>Perfil</p>
      </div>
      <ul className="Header__profile--menu">
        <li><a href="#">Cuenta</a></li>
        <li><a href="#">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
)

export default Header