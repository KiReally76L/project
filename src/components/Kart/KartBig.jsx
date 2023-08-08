import React from 'react'
import './KartBig.scss'

function KartBig({images}) {
  return (
    <div className='kartBig'>
    <img
    src={images}
      alt="Film"
    />
    </div>
  )
}

export default KartBig
