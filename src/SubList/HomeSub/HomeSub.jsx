import React from 'react'
import Media from './Media.scss'
import './HomeSub.scss'
import NavBarSub from '../NavBarSub/NavBarSub'
import MainSub from '../MainSub/MainSub'
import KartBig from '../../components/Kart/KartBig'
import ListRec from '../../components/json/KartReclama.json'
import Channels from '../../Images/Sub/channels.6d1cf3e3. (1).png'
import Player from '../../Images/Sub/player.9581e3c4..png'
import Tab from './Tab/Tab'

function HomeSub() {

  return (
    <div className='homeSub'>
      <NavBarSub/>
      <MainSub/>
      <div className='p-text_Bug'>
        <p>Российские хиты, зарубежные эксклюзивы и тысячи фильмов</p>
      </div>
      <div className='KartReclama'>
        {
        ListRec.map((obj, i) => (
          <KartBig key={i} images={obj.images}/>
        ))
        }
      </div>
      <div className='p_content_2'>
        <h2>Всё телевидение без телевизора</h2>
   <p>Получи расширенный доступ к эфиру
популярных каналов, а также смотри прямые
трансляции главных событий мирового спорта.</p>
        <img width={800} height={600} src={Channels} alt="Channels" />
      </div>
      <div className='p_content-3'>
      <h2>Смотри своё там, где ты</h2>
   <p>Смотри NETFLIX дома на телевизоре
или компьютере. Отправляясь в дорогу,
не забудь взять нас с собой на смартфоне
или планшете.</p>
        <img width={773} height={495} src={Player} alt="Player" />
      </div>
      <div className='Tab'>
        <h3>Открой NETFLIX сериалов и фильмов</h3>
        <div className='Tab_Category'>
   <Tab/>
        </div>
      </div>
      <p className='prava'>Все права защищены</p>
    </div>
  )
}

export default HomeSub