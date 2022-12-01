import React from 'react'
import './css/index.css'
// import './assets/css/res.css'
import '../../general/css/grid.css'
import '../../general/fontawesome-free-6.2.0-web/css/all.min.css'



export const Content5 = () => {
  return (
    <section className="Content5">
        <div className="content5-top">
            <div className="services-shop">
                <div className="services-list row">
                    <div className="services-item  l-3 m-6 c-12">
                        <i className="fa-solid fa-truck"></i>
                        <div className="services-content">
                            <h4>FREE SHIPPING</h4>
                            <p>Orders over $100</p>
                        </div>
                    </div>

                    <div className="services-item  l-3 m-6 c-12">
                        <i className="fa-solid fa-rotate"></i>
                        <div className="services-content">
                            <h4>FREE RETURN</h4>
                            <p>Within 30 days returns</p>
                        </div>
                    </div>

                    <div className="services-item  l-3 m-6 c-12">
                        <i className="fa-solid fa-lock"></i>
                        <div className="services-content">
                            <h4>SUCURE PAYMENT</h4>
                            <p>100% secure payment</p>
                        </div>
                    </div>

                    <div className="services-item  l-3 m-6 c-12">
                        <i className="fa-solid fa-tag"></i>
                        <div className="services-content">
                            <h4>BEST PEICE</h4>
                            <p>Guaranteed price</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='content5-bottom'>
            <h3>NEWSLETTER</h3>
            <p>Subscribe to our newsletter and get <span className='content__percent'>10%</span> off your first purchase</p>
            <div className='content5__promote'>
                <input type="email" className='content5__email' name="" id="" placeholder='Your email address'  required />
                <button className='content5__btn'>SUBSCRIBE</button>
            </div>
        </div>
    </section>

    )
}