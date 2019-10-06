import React from 'react'
import '../assets/styles/components/Header.scss'

const Header = () => (
  <header class="Header">
    <div class="Header__logo">
      <img  alt="Ranso Project" />
    </div>
    <div class="Header__profile">
      <div class="Header__profile--image">
        <img  alt="" />
        <p>Perfil</p>
      </div>
      <ul class="Header__profile--menu">
        <li><a href="#">Cuenta</a></li>
        <li><a href="#">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
)

export default Header