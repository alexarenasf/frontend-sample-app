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

const PublicPage = () => {
  const [servicio, setServicio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [categoria, setCategoria] = useState('');

    const handleSearch = () => {  
    history.push('/searchservJardinero');
    }  

  return (
    <div style={centerStyle}>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Publicar Servicio</h2>

      <form>
        <TextField
          label="Nombre del Servicio"
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
        />
        <TextField
          label="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <TextField
          label="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <TextField
          label="Ubicación"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
        />
        <Select
          label="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <MenuItem value="jardineria">Jardinería</MenuItem>
          <MenuItem value="limpieza">Limpieza</MenuItem>
          {/* Agrega más categorías según tus necesidades */}
        </Select>
        <Button variant="contained" onClick={handleSearch} href="searchservJardinero">
            Publicar
        </Button>
      </form>
    </div>
  );
};

export default PublicPage;
