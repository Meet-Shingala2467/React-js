import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div>
      <section className='services'>
        <div className='container'>
            <div className="row">

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3 ">
                    <div className="service-card text-center">
                        <div className="icon">
                        <i className="fa-solid fa-suitcase" />
                        </div>
                        <h5>Product Packing</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3 ">
                    <div className="service-card text-center">
                        <div className="icon">
                       <i className="fa-solid fa-headset" />
                        </div>
                        <h5>24X7 Support</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3 ">
                    <div className="service-card text-center">
                        <div className="icon">
                        <i className="fa-solid fa-truck" />
                        </div>
                        <h5>Delivery in 5 Days</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-3 mb-3 ">
                    <div className="service-card text-center">
                        <div className="icon">
                        <i className="fa-solid fa-money-check-dollar" />
                        </div>
                        <h5>Payment Secure</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Services
