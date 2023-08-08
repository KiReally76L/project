import React, {useState} from 'react'
import './NavBarSub.scss'
import '../HomeSub/Media.scss'
import {Link} from 'react-router-dom'

function NavBarSub() {

const [scrollNav, setScrollNav] = useState(false);
window.onscroll=()=>{
  setScrollNav(window.pageYOffset === 0 ? false : true)
  return () => (window.onscroll = null)
}
  return (
    <div className={scrollNav ? 'navbarSub scrolledSub' : 'navbarSub'}>
      <div className='left'>
         <Link to="/"><img src="https://seeklogo.com/images/N/netflix-logo-DD40971CE6-seeklogo.com.png" alt="" /></Link>  
  </div>
  <div className='rigthSub'>
  <button>Уже есть подписка?</button>
  </div>
    </div>
  )
}

export default NavBarSub