import React from 'react';
import NavBar from '../components/nav_bar';

const HomePage = () => {
  return (
    <div className='page'>
      <header>
        <NavBar />
      </header>
      <main>
        <h1 className='page__title'>Frontend Sample App</h1>
        <h2>Página de Inicio</h2>
        {/* Aquí iría el contenido principal de tu página */}
      </main>
      <footer>
        {/* Aquí puedes agregar un pie de página si lo deseas */}
      </footer>
    </div>
  );
}

export default HomePage;
