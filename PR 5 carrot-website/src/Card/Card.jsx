import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div>
            <section className='cards'>
                <div className='container'>
                    <div className="row ">

                        <div className="col-sm-12 col-md-6 col-lg-4 pb-sm-3 img">
                            <div className="image-card card1">
                                <h3>Fresh <br /> Snacks & Sweets</h3>
                                <p><span className='percentage'>20%</span>off <span>on first order</span></p>
                                <div className="shop">
                                    <button className='rounded border-0'><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4 pb-sm-3 img">
                            <div className="image-card card2">
                                <h3>Healthy  <br />  Bakery Products</h3>
                                <p><span className='percentage'>30%</span>off <span>on first order</span></p>
                                <div className="shop">
                                    <button className='rounded border-0'><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12  col-lg-4 pb-sm-3 d-md-none d-lg-flex img ">
                            <div className="image-card card3">
                                <h3>Fresh & healthy  <br />  Organic Fruits</h3>
                                <p><span className='percentage'>35%</span>off <span>on first order</span></p>
                                <div className="shop">
                                    <button className='rounded border-0'><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Card
