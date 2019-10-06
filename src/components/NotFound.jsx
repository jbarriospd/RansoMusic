import React from 'react'
import '../assets/styles/components/NotFound.scss'

const NotFound = () => (
    <section class="Error">
      <div class="Error__container">
        <h1 class="u-fontSize90 glitch" data-text="404">404</h1>
        <h2 class="u-fontSize30 glitch" data-text=" ERROR "></h2>
      </div>
      <div>
        <p class="return"><a href="index.html">Regresar al inicio</a></p>
      </div>
    </section>
)

export default NotFound