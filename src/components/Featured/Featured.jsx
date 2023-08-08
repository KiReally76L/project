import React from 'react'
import './Featured.scss'
import '../MediaList.scss'
import {Link} from 'react-router-dom'
import {FaGooglePlay} from 'react-icons/fa'
import {BsInfoCircle} from 'react-icons/bs'
import SliderFon from '../SliderFon/SliderFon'

function Featured({type}) {
  return (
    <div className='featured'>
      <SliderFon/>
    <div className='info'>
        <span className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto quae velit blanditiis debitis, quo voluptatum veniam nesciunt quasi numquam asperiores, enim aspernatur sit tenetur repudiandae laudantium voluptates animi? Voluptates?
        </span>
        <div className="buttons">
          <button className='play'>
<FaGooglePlay/>
<span>PLay</span>
          </button>
          <button className='more'>
<BsInfoCircle/>
<span>More</span>
          </button>
     <Link to="/SubList"><button className='Button'>30 дней подписки бесплатно</button></Link> 
        </div>
    </div>
    </div>
  )
}

export default Featured