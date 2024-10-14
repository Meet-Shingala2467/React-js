import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div>
      <section className='banner'>
        <div className="container">
          <div className="d-flex">

            <div className="col-sm-6">
              <div className="bannre-page">
                <h5><span>100%</span> Organic Vegetables</h5>
                <h1 className='col-9'>Explore fresh & juicy fruits.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
                <div className="btn"><a href="#">Shop now</a></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner
