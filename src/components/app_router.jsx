import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import InternalPage from '../pages/internal'
import FavoritePage from '../pages/favorite'
import BuscarPage from '../pages/buscar'
import BuscarPage1 from '../pages/buscarJardinero'
import PublicarPage from '../pages/Publicar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<InternalPage />} />
        <Route path='/fav' element={<FavoritePage />} />
        <Route path='/searchserv' element={<BuscarPage />} />
        <Route path='/searchservJardinero' element={<BuscarPage1 />} />
        <Route path='/publicserv' element={<PublicarPage />} />
        <Route path='*' element={<h1>Not Found 404</h1>} />
  
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
