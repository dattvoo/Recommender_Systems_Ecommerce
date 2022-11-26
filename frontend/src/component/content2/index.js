import React from 'react'
import '../general/css/grid.css'
import './assets/css/index.css'
import './assets/css/res.css'
import '../general/fontawesome-free-6.2.0-web/css/all.min.css'

export const Content2 = () => {
  return (
    <section className='Content2'>
        <div className='grid wide'>
            <div className='row'>
                <div className='content2-infor l-12 m-12 c-12' >
                    <div className='content2-infor-list'>
                    <span className='content2-title'>Eshop Free Lite Version</span>
                    <h2 className='content2-state'>Currently You Are Using Free
Lite Version Of Eshop.</h2>
                    <p className='content2-suggest'>Please, purchase full version of the template to     get all pages,
                    features and commercial license.</p>
                    <div className='button'>
                        <a className='button-link' href='#'>Purchase Now</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
