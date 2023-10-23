import React, { useState } from 'react';
import NavBar from '../components/nav_bar';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const FavoritePage = () => {

  const [favorites, setFavorites] = useState([
    { id: 1, name: 'Limpieza de Jardines' },
    { id: 2, name: 'Gasfiter' },
  ]);

  return (
    <div style={centerStyle}>
    <><header>
      <NavBar />
    </header><div className='page'>
        <h1 className='page__title'>Página de Favoritos</h1>
        <ul>
          {favorites.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div></></div>
  );
}



export default FavoritePage;