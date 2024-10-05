import React, { useState } from 'react'

import LightBulbOn from '../assets/light-on.png'
import LightBulbOff from '../assets/light-off.png'

export const LightbulbPage = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className='lightbulb-page'>
      <p>Presiona el botón para encender o apagar la ampolleta</p>
      <img src={isOn ? LightBulbOn : LightBulbOff} height={130} alt='ampolleta' />
      <br />
      <br />
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'Apagar' : 'Encender'}
      </button>
    </div>
  )
}

export default LightbulbPage
