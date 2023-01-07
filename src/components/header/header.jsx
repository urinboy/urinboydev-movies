import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logoImg from '../../assets/images/logo.svg';
import SearchIcon from '../../assets/icons/search.svg'
import menuImg from '../../assets/icons/menu.svg';
import langImg from '../../assets/icons/usa.png';
import Carousel from '../carousel/carousel';
import caruselItem1 from '../../assets/images/ca-item-1.png'
import caruselItem2 from '../../assets/images/ca-item-3.png'
import caruselItem3 from '../../assets/images/ca-item-4.webp'

const Header = () => {
  return (
    <>
        <div className='header'>
            <Link to={'/'} >
                <img src={logoImg} alt="" />
            </Link>
            <div className="search">
              <img src={SearchIcon} />
              <input type={'text'} className="search" placeholder='search any movies.....'/>
            </div>
            <Link to={''}>
                <img src={menuImg} alt="" />
            </Link>
        </div>
        <div style={{ maxWidth: 1200, marginLeft: '10', marginRight: 'auto', marginTop: 12 }}>
          <Carousel>
           <div className="hero">
            <p className="hero-title">
              The God of The Dark
            </p>
            <p className='hero-desc'>
            There was a man who didn’t come from earth but no one could see him in the day only at night he always kill anyone who tryn to stop him in his way
            </p>
            <span className='lang'>
              <img src={langImg} alt="usa" style={{marginRight:12}}/>
              <span>English</span>
            </span>
            <Link to={''} className="btn btn-watch">Watch</Link>
            <div className="dots">
              <span className='red'></span>
              <span className='green'></span>
              <span className='blue'></span>
            </div>
            <img src={caruselItem1} alt="placeholder" />
           </div>
           
            <img src={caruselItem2} alt="placeholder" />

            <img src={caruselItem3} alt="placeholder" />
            
          </Carousel>
        </div>
        <div className="navigation">
          <Link to={'#'}>Movies</Link>
          <Link to={'#'}>TV Show</Link>
          <Link to={'#'}>Carton</Link>
          <Link to={'#'}>Serial</Link>
        </div>
        
    </>
  )
}

export default Header