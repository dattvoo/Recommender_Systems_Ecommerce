import React from 'react'
import './css/index.css'
// import './assets/css/res.css'
import '../../general/css/grid.css'
import '../../general/fontawesome-free-6.2.0-web/css/all.min.css'



export const Content5 = () => {
  return (
    <section className='content5'>
        <h3>NEWSLETTER</h3>
        <p>Subscribe to our newsletter and get <span className='content__percent'>10%</span> off your first purchase</p>
        <div className='content5__promote'>
            <input type="email" className='content5__email' name="" id="" placeholder='Your email address'  required />
            <button className='content5__btn'>SUBSCRIBE</button>
        </div>
    </section>

    )
}