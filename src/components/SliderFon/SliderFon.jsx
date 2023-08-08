import React from 'react'
import './SliderFon.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import FotoFon1 from '../../images/123828-temnota-polnoch-eddi_brok-mir-nebo-1920x1080.jpg'
import FotoFon1 from '../../Images/123828-temnota-polnoch-eddi_brok-mir-nebo-1920x1080.jpg'
import FotoFon2 from '../../Images/136681-uzhas-reklama-art-fikciya-temnota-1920x1080.jpg'
import FotoFon3 from '../../Images/136745-vymyslennyj_personaz-mifologia-art-disneevskij_film-film-1920x1080.jpg'
import FotoFon4 from '../../Images/136883-drakon-animaciya-film-vymyslennyj_personaz-fikciya-1920x1080.jpg'
import FotoFon5 from '../../Images/136916-kinorezhisser-film-hellouin-derevo-majklmajers-1920x1080.jpg'
import FotoFon6 from '../../Images/164284-dengi_hejst-lyupin-netfliks-ograblenie-tolpa-1920x1080.jpg'
import FotoFon7 from '../../Images/166841-kalmar-vaj_ha_dzhun-hvan_don_hyok-mrbeast-hvan_chzhun_ho-1920x1080 (1).jpg'
import FotoFon8 from '../../Images/63084-art-animaciya-kapitan_amerika-mifologia-tor-1920x1080.jpg'


function SliderFon() {
  return (
    <div className='sliderFon'>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoFon1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoFon2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoFon3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoFon4}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoFon5}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoFon6}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoFon7}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FotoFon8}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div>
      <span className='tyman'></span>
    </div>
    </div>
  )
}

export default SliderFon