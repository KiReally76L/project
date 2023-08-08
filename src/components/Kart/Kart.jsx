import React, {useState} from 'react'
import './Kart.scss'


function Kart({index,images}) {
  return (
    <div className='kart'>
      <img
      src={images}
        alt="Film"
      />
      </div>
  )
}

export default Kart