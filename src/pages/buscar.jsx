import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import { useHistory } from 'react-router-dom';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const BuscarPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const handleSearch = () => {
    history.push('/searchservJardinero');
  };

  return (
    <div style={centerStyle}>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Búsqueda de Servicio</h2>
      <TextField
        label="Servicio a buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TextField
        label="Zona en que buscar"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Select
        label="Margen de precios"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
      >
        <MenuItem value="">Cualquier precio</MenuItem>
        <MenuItem value="bajo">Bajo</MenuItem>
        <MenuItem value="medio">Medio</MenuItem>
        <MenuItem value="alto">Alto</MenuItem>
      </Select>
      <Button variant="contained" onClick={handleSearch} href="searchservJardinero">
        Buscar
      </Button>

      {/* Aquí puedes agregar un componente de Google Maps si lo necesitas */}
    </div>
  );
};

export default BuscarPage;
