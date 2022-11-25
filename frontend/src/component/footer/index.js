import React from 'react'
import './assets/css/grid.css'
import './assets/css/index.css'
import './assets/css/res.css'
import './assets/fontawesome-free-6.2.0-web/css/all.min.css'

export const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-top'>
            <div className='grid wide'>
                <div className='row'>
                    <div className='l-5 m-6 c-12'>
                        <div className='footer-one'>
                            <div className='footer-logo'>
                                <img src={require("./assets/img/logo2.png")} className='footer-logo-img'/>
                            </div>

                            <div className='footer-about'>
                                Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, 
                                magna eros eu erat. Aliquam erat volutpat.
                                Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.
                            </div>

                            <div className='footer-contact'>
                                Got Question? Call us 24/7
                                <span className='footer-contact__number'>+0123 456 789</span>
                            </div>
                        </div>
                    </div>
                    <div className='l-2 m-6 c-12'>
                        <div className='footer-infor'>
                            <h3 className='footer__title'>
                                Information
                            </h3>

                            <ul className='footer__list'>
                                <li className='footer__item'>About Us</li>
                                <li className='footer__item'>Faq</li>
                                <li className='footer__item'>Terms & Conditions</li>
                                <li className='footer__item'>Contact Us</li>
                                <li className='footer__item'>Help</li>
                            </ul>
                        </div> 
                    </div>
                    <div className='l-2 m-6 c-12'>
                    <div className='footer-service'>
                            <h3 className='footer__title'>
                                Customer Service
                            </h3>

                            <ul className='footer__list'>
                                <li className='footer__item'>Payment Methods</li>
                                <li className='footer__item'>Money-back</li>
                                <li className='footer__item'>Returns</li>
                                <li className='footer__item'>Shipping</li>
                                <li className='footer__item'>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                    <div className='l-3 m-6 c-12'>
                        <div className='footer-social'>
                            <h3 className='footer__title'>
                                Get In Tuch
                            </h3>

                            <div className='footer-social__address'>
                                <ul className='footer__list'>
                                    <li className='footer__item'>NO. 342 - London Oxford Street.</li>
                                    <li className='footer__item'>012 United Kingdom</li>
                                    <li className='footer__item'>info@eshop.com</li>
                                    <li className='footer__item'>+032 3456 7890</li>
                                </ul>
                            </div>

                            <div className='footer-social__media'>
                                <ul className='footer__list list-media'>
                                    <li className='footer__item'><i class="fa-brands fa-facebook"></i></li>
                                    <li className='footer__item'><i class="fa-brands fa-twitter"></i></li>
                                    <li className='footer__item'><i class="fa-brands fa-instagram"></i></li>
                                    <li className='footer__item'><i class="fa-brands fa-linkedin"></i></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='grid wide'>
                <div className='footer-infor row'>
                    <div className='footer-copyright l-6 m-12 c-12'>
                        Copyright © 2020 <a className='footer-link' href='#'>Wpthemesgrid</a> - All Rights Reserved.
                    </div>

                    <div className='footer-payment-icon l-6 m-12 c-12'>
                        <img className='footer-payment-img' src={require("./assets/img/payments.png")} />
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}
