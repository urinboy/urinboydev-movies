import React from 'react'
import CardCat from '../../components/cat-card/card'
import './home.scss'

import CatImg1 from '../../assets/images/cat-item-1.png'
import CatImg2 from '../../assets/images/cat-item-2.png'
import CatImg3 from '../../assets/images/cat-item-3.png'
import CatImg4 from '../../assets/images/cat-item-4.png'
import CatImg5 from '../../assets/images/cat-item-5.png'
import CatImg6 from '../../assets/images/cat-item-6.png'

const Home = () => {

  const dataCat = [
    {id:1, catImg:CatImg1, catName:"Avangers world war", catDesc:"Action, SF, fantasy", link:"/avangers-world-war"},
    {id:2, catImg:CatImg2, catName:"DC Infinity", catDesc:"Action, SF, War", link:"/dc-infinity", active:"active"},
    {id:3, catImg:CatImg3, catName:"King Of King Kong", catDesc:"Action, advanture, animal", link:"King-Of-King-Kong"},
    {id:4, catImg:CatImg4, catName:"Dead pool", catDesc:"Action, advanture, comedyl ", link:"/Dead-pool"},
    {id:5, catImg:CatImg5, catName:"The Power of us", catDesc:"Action, advanture,misteryl ", link:"/The-Power-of-us"},
    {id:6, catImg:CatImg6, catName:"The clown", catDesc:"Horror,mistery,crime     ", link:"/The-clown"},
  ]

  return (
    <>
      <div className="categories">
      {
        dataCat.map((value, key) =>(
            <CardCat catImg={value.catImg} catName={value.catName} catDesc={value.catDesc} link={value.link} active={value.active}/>
        ))
      }
      </div>
      <div className="watching">
        Continue Watching

      </div>
    </>
  )
}

export default Home