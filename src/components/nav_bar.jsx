import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <div className='nav-bar__menu'>
        <NavLink
          to='/'
          className='nav-bar__link'
          activeClassName='nav-bar__link--active'
        >
          Inicio
        </NavLink>
        <NavLink
          to='/profile'
          className='nav-bar__link'
          activeClassName='nav-bar__link--active'
        >
          Perfil
        </NavLink>
        <NavLink
          to='/not'
          className='nav-bar__link'
          activeClassName='nav-bar__link--active'
        >
          Notif.
        </NavLink>
      </div>
      <div className='nav-bar__menu'>
        <NavLink
          to='/searchserv'
          className='nav-bar__link'
          activeClassName='nav-bar__link--active'
        >
          Buscar
        </NavLink>
        <NavLink
          to='/publicserv'
          className='nav-bar__link'
          activeClassName='nav-bar__link--active'
        >
          Publicar
        </NavLink>
        <NavLink
          to='/miserv'
          className='nav-bar__link'
          activeClassName='nav-bar__link--active'
        >
          Mis Serv.
        </NavLink>
        <NavLink
          to='/fav'
          className='nav-bar__link'
          activeClassName='nav-bar__link--active'
        >
          Favoritos
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
