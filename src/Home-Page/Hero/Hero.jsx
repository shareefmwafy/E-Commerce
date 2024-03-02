import React from 'react'
import Style from './Hero.module.css'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'
function Hero() {
  return (
    
   <>
    <div className={Style.container}>
      <div className={Style.row}>
        <div className={Style.shop}><img src={image1} alt="" /></div>
        <div className={Style.images}>
          <div className={Style.up}><img src={image2} alt="" /></div>

          <div className={Style.down}>
            <div className={Style.downLeft}><img src={image3} alt="" /></div>
            <div className={Style.downRight}><img src={image4} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
   </>
    
  )
}

export default Hero