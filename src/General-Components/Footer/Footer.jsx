import React from 'react'
import './Footer.css'

import visaImage from './images/visa.png'
import payPalImage from './images/paypal.png'
function Footer(){
    return(
        <footer>
            <div className='About general'>
                <p className='title'>About</p>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tempore.</p>
                <div className='payment'>
                    <img src={visaImage}/>
                    <img src={payPalImage}/>
                </div>
                <p>Secure Online Payment</p>
            </div>
            <div className='Categorise general'>
                <p className='title'>Categorise</p>
                <div>Cat</div>
            </div>

            <div className='info general'>
                <p className='title'>Information</p>
                <div>info</div>
            </div>
            <div className='contact general'>
                <p className='title'>Contact</p>
                <div>sh.mwafy1@gmail.com</div>
            </div>
        </footer>
    );
}
export default Footer;