import React, { useRef, useState } from 'react'
import './List.scss'
import { GoArrowRight, GoArrowLeft } from 'react-icons/go'
import Kart from '../Kart/Kart'
import kartDrama from '../../components/json/KartDrama.json'




function List() {
  // чтобы slider не проходил дальше, тоесть не можно было катить дальше когда посмотрел все карты // 
  const [sliderNumber, setSliderNumber] = useState(0)
  // чтобы кнопку, которая слева не было видно, когда мы ничего не листаем, а когда уже начнем она наичнает появяться //
  const [isMoved, setIsMoved] = useState(false)
  // Ref для сslider // 
  const listRef = useRef()
  // slider  // 
  const onClickSlider = (direct) => {
    setIsMoved(true) // при движении мы будем его видеть 
    const directe = listRef.current.getBoundingClientRect().x - 30
    if (direct === 'left' && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1) // подключаем // 
      listRef.current.style.transform = `translateX(${238 + directe}px)`
    } 
    if (direct === 'right' && sliderNumber < 5) {
      setSliderNumber(sliderNumber + 1)
      listRef.current.style.transform = `translateX(${-290 + directe}px)`
    }
  }
  return (
    <div className='list'>
      <span className="listTitle">Драма</span>
      <div className='wrapper'>
        <GoArrowLeft className='sliderArrow left'
          onClick={() => onClickSlider("left")}
          style={{ display: !isMoved && "none" }} />  {/*// тот самый появляющий left -> стрелка */}
        <div className="container" ref={listRef}> {/* // подкючаем Ref //  */}
{
  kartDrama.map((obj,i) =>(
    <Kart key={i} images={obj.images}/>
  ))
}
        </div>
        <GoArrowRight className='sliderArrow right' onClick={() => onClickSlider("right")} />
      </div>
    </div>
  )
}

export default List