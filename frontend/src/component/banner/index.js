import React from 'react'
import './style.css'
// import './assets/css/res.css'
import '../../general/css/grid.css'
import '../../general/fontawesome-free-6.2.0-web/css/all.min.css'



export const Banner = () => {
  return (
    <section className="banner">
        <div className="banner-list row">
            <div className="banner-item col l-4">
                <div className="banner-first">
                    <div className="banner-content">
                    <p className='banner-title'>Man's Collections</p>
                    <h2 className='banner-2nd'>Summer Travel<br />Collection</h2>
                    <a className='banner-link' href="#">DISCOVER NOW</a>
                    </div>
                </div>
            </div>

            <div className="banner-item col l-4">
                <div className="banner-second">
                    <div className="banner-content">
                        <p className='banner-title'>Bag Collections</p>
                        <h2 className='banner-2nd'>Awesome Bag<br />2020</h2>
                        <a className='banner-link' href="#">SHOP NOW</a>
                    </div>
                </div>
            </div>

            <div className="banner-item col l-4">
                <div className="banner-third">
                    <div className="banner-content">
                    <p className='banner-title'>Flash Sale</p>
                    <h2 className='banner-2nd'>Mid Season<br />Up To <span className='flash-sale-percent'>40%</span>Off</h2>
                    <a className='banner-link' href="#">DISCOVER NOW</a>
                    </div>
                </div>
            </div>
        </div>                

    </section>

    )
}