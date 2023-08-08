import React, {useState} from 'react';
import './NavBar.scss'
import {AiOutlineNotification} from 'react-icons/ai'
import {BiSolidDownArrow} from 'react-icons/bi'

function Navbar() {
  // чтобы при скролле, она меняла цвет  // 
  const[isScrolled, setIsScrolled] = useState(false);
  
  window.onscroll = () =>{
  setIsScrolled(window.pageYOffset === 0 ? false : true);
  return () => (window.onscroll = null)
 }

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
       <div className="container">
        <div className="left">
          <img src="https://seeklogo.com/images/N/netflix-logo-DD40971CE6-seeklogo.com.png" alt="" />   
        </div>
        <div className="right">
          <span>KID</span>
          <AiOutlineNotification className='icon'/>
          <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
          <div className='profile'>
         <BiSolidDownArrow className='icon'/>
              <div className='options'>
                <span>Settings</span>
                <span>Logoat</span>
              </div>
          </div>
        </div>
       </div>
      </div>
  )
}

export default Navbar