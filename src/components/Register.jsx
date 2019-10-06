import React from 'react'
import '../assets/styles/components/Register.scss'

const Register = () => (
    <section class="Register">
      <section class="Register__container">
        <h2>Regístrate</h2>
        <form class="Register__container--form" action="">
          <input class="input" type="text" name="" id="" placeholder="Nombre" />
          <input class="input" type="text" name="" id="" placeholder="Correo" />
          <input class="input" type="password" name="" id="" placeholder="Establezca una contraseña" />
          <button class="button">Registrar</button>
        </form>
        <section class="Register__container--social-media">
          <div><img src="public/img/google-icon.png"   alt="Google" /> inicia sesión con Google</div>
          <div><img src="public/img/twitter-icon.png" alt="Twitter" /> inicia sesión con Twitter</div>
        </section>
      </section>
    </section>
)
export default Register