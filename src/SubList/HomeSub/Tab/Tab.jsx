import React, {useState} from 'react'
import './Tab.scss'


function Tab() {

const [categoryActive, setCategoryActive] = useState(0);
const onClickActive = (index) =>{
  setCategoryActive(index)
}

  return (
    <div className='Tab_Content'>
      <div onClick={() => onClickActive(0)} className={categoryActive === 0 ? 'activeCatg' : ''}>
    <div className="container_Tab_1">
      <p>Месяц бесплатно</p>
      <span>далее 299 ₽</span>
      <b>0 ₽</b>
     </div>
      </div>
      <div onClick={() => onClickActive(1)} className={categoryActive === 1 ? 'activeCatg'  : ''}>
     <div className="container_Tab_2">
      <p>3 месяц</p>
      <span>269 ₽ каждый</span>
      <b>-10 %</b>
     </div>
     </div>
     <div onClick={() => onClickActive(2)} className={categoryActive === 2 ? 'activeCatg'  : ''}>
     <div className="container_Tab_3">
      <p>6 месяцев</p>
      <span>231 ₽ каждый</span>
      <b>-23 %</b>
     </div>
   </div>
   <div onClick={() => onClickActive(3)} className={categoryActive === 3 ? 'activeCatg'  : ''}>
       <div className="container_Tab_4">
      <p>12 месяцев</p>
      <span>180 ₽ каждый</span>
      <b>-40 %</b>
     </div>
   </div>
   </div>
  )
}

export default Tab