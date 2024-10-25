import React from 'react'
import './Footer.css'
function Footer(){
    return(
        <footer>
            <div className='About general'>
                <p className='title'>About</p>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, tempore.</p>
                <div className='payment'>
                    <img src="./images/visa.png"/>
                    <img src="./images/paypal.png"/>
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
                <div>Content</div>
            </div>
        </footer>
    );
}
export default Footer;