import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import logoImg from '../../assets/images/logo.svg';
import menuImg from '../../assets/icons/menu.svg';

const Header = () => {
  return (
    <div className='header'>
        <Link to={'/'} >
            <img src={logoImg} alt="" />
        </Link>
        <input type={'text'} className="search" placeholder='search any movies.....'/>
        <Link to={''}>
            <img src={menuImg} alt="" />
        </Link>
    </div>
  )
}

export default Header