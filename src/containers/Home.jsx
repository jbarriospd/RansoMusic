import React from 'react';
import '../assets/styles/containers/Home.scss';

const Home = () => (
  <section className={'Home'}>
    <div className={'Home--item Home--header'}>
      <div>modo nocturno</div>
      <div>menu</div>
      <div>usuario</div>
    </div>
    <div className={'Home--item Home--aside'}>
      <div>
        <input type="text" name="" id="" />
      </div>
      <div>
        <h2>Categorias</h2>
        <ul>
          <li>Categoria Podcast 1</li>
          <li>Categoria Podcast 2</li>
          <li>Categoria Podcast 3</li>
        </ul>
      </div>
    </div>
    <div className={'Home--item Home--main'}>
      <div>carousel</div>
      <div>trend</div>
    </div>
    <div className={'Home--item Home--player'}>
      <div>imagen de podcast</div>
      <div>reproductor y controles</div>
      <div>menu de podcaste player</div>
    </div>
    <label>Creado como proyecto de la Escuela de Havascript - Platzo</label>
  </section>
);

export default Home;
