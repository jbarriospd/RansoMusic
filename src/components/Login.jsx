import React from 'react'
import '../assets/styles/components/Login.scss'

const Login = () => (
    <section class="Login">
      <section class="Login__container">
        <h2>Inicia sesión</h2>
        <form class="Login__container--form" action="">
          <input class="input" type="text" name="" id="" placeholder="Correo" />
          <input class="input" type="password" name="" id="" placeholder="Contraseña" />
          <button class="button">Iniciar sesión</button>
          <div class="Login__container--remember-me">
            <label for="cbox1">
              <input type="checkbox" name="cbox1" id="cbox1" value="Checkbox"/>Recuérdame
            </label>
            <a href="">Olvidé mi contraseña</a>
          </div>
        </form>
        <section class="Login__container--social-media">
          <div><img src="public/img/google-icon.png"   alt="Google" /> inicia sesión con Google</div>
          <div><img src="public/img/twitter-icon.png" alt="Twitter" /> inicia sesión con Twitter</div>
        </section>
        <p class="Login__container--register">
          No tienes ninguna cuenta? <a href="">Regístrate.</a>
        </p>
      </section>
    </section>
)
export default Login