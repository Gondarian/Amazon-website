import React from 'react';
import classes from  '../Header/Header.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {img} from './img/data';
function CarouserEffect() {
  return (
    <div>
          <Carousel
            autoPlay={true}
            infinitiveLoop={true}
            showIndicators={false}
            showThumbs={false}
            >
            {
                img.map((imgitemlink) =>{
                    return <img src={imgitemlink}/>
                })

            }

          </Carousel>
          <div className={classes.hero__img}></div>

    </div>
  )
}

export default CarouserEffect;