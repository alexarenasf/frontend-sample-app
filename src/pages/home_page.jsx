import React from 'react'

export const HomePage = () => {
  return (
<<<<<<< Updated upstream
    <>
      <p>¡Te damos la bienvenida a la Interfaz energética!</p>
      <p>En esta página encontraras una 💡 ampolleta que podrás encender y apagar con un botón</p>
    </>
  )
}

export default HomePage
=======
    <div className="home-page">
      <h2>Hola [Nombre], ¿Qué te gustaría hacer ahora?</h2>
      <input type="text" placeholder="Buscar..." className="search-bar" />
      <div className="features">
        <div className="feature-card">
          <FaMicrophone className="icon" />
          <p>Grabar reunión</p>
        </div>
        <div className="feature-card">
          <FaFileAlt className="icon" />
          <p>Audios guardados</p>
        </div>
        <div className="feature-card">
          <FaClipboardList className="icon" />
          <p>Actas guardadas</p>
        </div>
        <div className="feature-card">
          <FaHeart className="icon" />
          <p>Favoritos</p>
        </div>
        <div className="feature-card">
          <FaUser className="icon" />
          <p>Mi perfil</p>
        </div>
        <div className="feature-card">
          <FaCalendarAlt className="icon" />
          <p>Calendario</p>
        </div>
        <div className="feature-card">
          <FaFolder className="icon" />
          <p>Generar actas</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
>>>>>>> Stashed changes
