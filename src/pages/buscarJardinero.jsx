import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import { TextField, Button, Select, MenuItem } from '@mui/material';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const BuscarPage = () => {
  const jardinero = {
    nombre: 'Jardinero Ejemplo',
    precio: 'Precio Medio',
  };

  const comentarios = [
    'Excelente servicio de jardinería.',
    'El jardín luce espectacular gracias a este profesional.',
    'Muy recomendado para tareas de jardinería.',
  ];

  // Función para obtener un comentario aleatorio
  const obtenerComentarioAleatorio = () => {
    const indice = Math.floor(Math.random() * comentarios.length);
    return comentarios[indice];
  };

  const comentarioAleatorio = obtenerComentarioAleatorio();

  return (
    <div style={centerStyle}>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Búsqueda de Servicio</h2>

      <div>
        <h3>Jardinero Disponible:</h3>
        <p>Nombre: {jardinero.nombre}</p>
        <p>Precio: {jardinero.precio}</p>
      </div>

      <div>
        <h3>Comentario:</h3>
        <p>{comentarioAleatorio}</p>
      </div>
       <Button variant="contained" onClick={() => { /* No hacer nada */ }}>
        Contratar
      </Button>

      {/* Aquí puedes agregar un componente de Google Maps si lo necesitas */}
    </div>
  );
};

export default BuscarPage;
