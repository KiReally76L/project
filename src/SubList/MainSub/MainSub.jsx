import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainSub.scss'
import '../HomeSub/Media.scss'
import Carousel from 'react-bootstrap/Carousel';
import FotoKartSub1 from '../../Images/Sub/136790-film-nazemnyezhivotnye-rot-morda-krupnyjplan-1920x1080.jpg'
import FotoKartSub2 from '../../Images/Sub/136935-cifrovoj_kompoziting-film_kritika-priklyuchencheskaya_igra-dzhen_makgoun-triller-1920x1080.jpg'
import FotoKartSub3 from '../../Images/Sub/141078-lunafreya_tkan_interpretiruet_motivy_noh-figurka-titus_drautos-kompyuternaya_igra-temnota-1920x1080.jpg'
import FotoKartSub4 from '../../Images/Sub/142160-art-vizualnoe_iskusstvo-dejeneris_targarien-artist-zhivopis-1920x1080.jpg'
import FotoKartSub5 from '../../Images/Sub/142353-vymyslennyj_personaz-drama-televizionnoe_shou-film-epizod-1920x1080.jpg'



function MainSub() {
  return (
          <div className='sliderFonSub'>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoKartSub1}
          alt="First slide"
        />
            <Carousel.Caption>
              <div className='Text_Cont'>
          <h3>Одна Подписка на всё</h3>
          <p>за 299 рублей в месяц</p>
          <button className='BTN_SUB_1'>Попробовать 30 дней бесплатно</button>
          <button className='BTN_SUB_2'>Целый год со скидкой 40%</button>
              </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoKartSub2}
          alt="Second slide"
        />
                    <Carousel.Caption>
                    <div className='Text_Cont'>
          <h3>Одна Подписка на всё</h3>
          <p>за 299 рублей в месяц</p>
          <button className='BTN_SUB_1'>Попробовать 30 дней бесплатно</button>
          <button className='BTN_SUB_2'>Целый год со скидкой 40%</button>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoKartSub3}
          alt="Third slide"
        />
                    <Carousel.Caption>
                    <div className='Text_Cont'>
          <h3>Одна Подписка на всё</h3>
          <p>за 299 рублей в месяц</p>
          <button className='BTN_SUB_1'>Попробовать 30 дней бесплатно</button>
          <button className='BTN_SUB_2'>Целый год со скидкой 40%</button>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoKartSub4}
          alt="Third slide"
        />
                    <Carousel.Caption>
                    <div className='Text_Cont'>
          <h3>Одна Подписка на всё</h3>
          <p>за 299 рублей в месяц</p>
          <button className='BTN_SUB_1'>Попробовать 30 дней бесплатно</button>
          <button className='BTN_SUB_2'>Целый год со скидкой 40%</button>
       </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoKartSub5}
          alt="Third slide"
        />
                    <Carousel.Caption>
                    <div className='Text_Cont'>
          <h3>Одна Подписка на всё</h3>
          <p>за 299 рублей в месяц</p>
          <button className='BTN_SUB_1'>Попробовать 30 дней бесплатно</button>
          <button className='BTN_SUB_2'>Целый год со скидкой 40%</button>
     </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='Tenu'>
      <span className='tyman_1'></span>
    </div>
    </div>
  )
}

export default MainSub