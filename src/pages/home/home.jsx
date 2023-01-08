import React from 'react';
//components
import CardCat from '../../components/cat-card/card';
import CardWatch from '../../components/watch-card/card';
import './home.scss';
import '../../components/watch-card/watch-card.scss';

// Categoriya rasmlari
import CatImg1 from '../../assets/images/cat-item-1.png';
import CatImg2 from '../../assets/images/cat-item-2.png';
import CatImg3 from '../../assets/images/cat-item-3.png';
import CatImg4 from '../../assets/images/cat-item-4.png';
import CatImg5 from '../../assets/images/cat-item-5.png';
import CatImg6 from '../../assets/images/cat-item-6.png';

import watchImg from '../../assets/images/watch-1.png'; 
import watchImg2 from '../../assets/images/watch-2.png'; 
import watchImg3 from '../../assets/images/watch-3.png'; 
import watchImg4 from '../../assets/images/watch-4.png'; 
import watchImg5 from '../../assets/images/ca-item-3.png';

const Home = () => {

  const dataCat = [
    {id:1, catImg:CatImg1, catName:"Avangers world war", catDesc:"Action, SF, fantasy", link:"/avangers-world-war"},
    {id:2, catImg:CatImg2, catName:"DC Infinity", catDesc:"Action, SF, War", link:"/dc-infinity", active:"active"},
    {id:3, catImg:CatImg3, catName:"King Of King Kong", catDesc:"Action, advanture, animal", link:"King-Of-King-Kong"},
    {id:4, catImg:CatImg4, catName:"Dead pool", catDesc:"Action, advanture, comedyl ", link:"/Dead-pool"},
    {id:5, catImg:CatImg5, catName:"The Power of us", catDesc:"Action, advanture,misteryl ", link:"/The-Power-of-us"},
    {id:6, catImg:CatImg6, catName:"The clown", catDesc:"Horror,mistery,crime", link:"/The-clown"},
  ]

  const dataWatch = [
    {id:1,img:watchImg},
    {id:2,img:watchImg2},
    {id:3,img:watchImg3},
    {id:5,img:watchImg4},
    {id:5,img:watchImg5},
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
       <div className="w-title"> Continue Watching</div>
      <div className="w-card">
        {
          dataWatch.map((value, key) =>(
            <CardWatch watchImg={value.img} watchId={value.id} />
          ))
        }
      </div>
       
       

      </div>
    </>
  )
}

export default Home