import React from 'react';
import classes from './Header.module.css';
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
function Header() {
  return (
    <>
    <section>
    <div className={classes.header__container}>
        <div className={classes.logo__container}>
            <a href=''><img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo'/>
            </a>
            <div className={classes.delivery}>
                <span>
                    <SlLocationPin />
                </span>
                <div >
                    <p>Delivered to</p>
                    <span>Ethiopia</span>
                </div>
            </div>
        </div>
        <div className={classes.search}>
            <select name='' id=''>
                <option value="">All</option>
            </select>
            <input type='text' name='' id='' placeholder='search product'/>
            <BsSearch size={25} />
        </div>
        <div className={classes.order__container}>
                <a href='' className={classes.language}>
                <img src='https:/upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png' alt=''/>
                <section name='' id=''>
                    <option value=''>EN</option>
                </section>
                </a>
{/* three compontnts */}
            <a href=''>
                <p>Sign IN</p>
                <span>Account & Lists</span>
            </a>
            {/* order */}
            <a href=''>
                <p>returns</p>
                <span>& Orders</span>
            </a>
            {/* carts */}
            <a href='' className={classes.cart}>
                <BiCart size={35} />
                <span>0</span>
            </a>
         </div>
      </div>    
      </section>
      <LowerHeader/>
    </>
  )
}

export default Header