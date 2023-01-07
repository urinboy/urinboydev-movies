import React from 'react'
import CardCat from '../../components/cat-card/card'
import './home.scss'

const Home = () => {
  return (
    <>
      <div className="categories">
        <CardCat />
      </div>
    </>
  )
}

export default Home