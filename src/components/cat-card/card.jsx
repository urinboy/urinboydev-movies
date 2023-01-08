import React from 'react'
import { Link } from 'react-router-dom'
import './cat-card.scss'

const CardCat = ({catImg, catName, catDesc, link, active}) => {
  return (
    <>
        <Link to={link} className={active}>
            <div className="cat-card active">
                <div className="cat-img">
                    <img src={catImg} alt="" />
                </div>
                <div className="cat-name">
                    {catName}
                </div>
                <div className="cat-desc">
                    {catDesc}
                </div>
            </div>
        </Link>
    </>
  )
}

export default CardCat