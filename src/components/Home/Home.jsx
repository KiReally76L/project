import React from 'react'
import './Home.scss'
import '../MediaList.scss'
import Navbar from '../NavBar/Navbar'
import Featured from '../Featured/Featured'
import List from '../List/List'
import ListDram from '../List/ListDrama'
import ListDetectiv from '../List/ListDetectiv'
import ListRussian from '../List/ListRussian'
import ListSmallRussian from '../List/ListSmallRussian'
import ListMultik from '../List/ListMultik'
import ListSport from '../List/ListSport'
import ListKartDh from '../List/ListKartDh'

function Home() {
  return (
    <div className='home'>
      <Navbar />
      <Featured type="movie" />
      <div className='ListSlider'>
      <List/>
      <ListDetectiv/>
      <ListDram/>
      <ListSmallRussian/>
      <ListRussian/>
      <ListMultik/>
      <ListSport/>
      <ListKartDh/>
      </div>
      <h3>Все права защищены!</h3>
    </div>
  )
}

export default Home