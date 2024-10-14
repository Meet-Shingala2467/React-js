import React from 'react'
import './Offer.css'

const Offer = () => {
    return (
        <div>
            <section className='offer'>
                <div className="container">
                    <div className="row d-flex">

                        <div className="col-sm-12 col-lg-4 p-2">
                            <div className="buttons">
                                <ul>
                                    <li><button type='button' className='active'>Cake & Milk <span>(65 items)</span></button></li>
                                    <li><button>Fresh Meat <span>(30 items)</span></button></li>
                                    <li><button>Vegetables <span>(25 items)</span></button></li>
                                    <li><button>Apple & Mango <span>(45 items)</span></button></li>
                                    <li><button>Strawberry <span>(68 items)</span></button></li>
                                    <li><button className='active'>View More</button></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 p-2">
                            <div className="offers">
                                <img src="img/3.jpg" alt="Offer Image" className="offer-image" />
                                <div className="off">
                                    <h2>50 <span>% OFF</span></h2>
                                    <div className="contant">
                                        <h3>Cake</h3>
                                        <div className="shop">
                                            <button className='rounded border-0'><a href="#">Shop Now</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4 p-2">
                            <div className="offers">
                                <img src="img/4.jpg" alt="Offer Image" className="offer-image" />
                                <div className="off">
                                    <h2>40 <span>% OFF</span></h2>
                                    <div className="contant">
                                        <h3>Milk</h3>
                                        <div className="shop">
                                            <button className='rounded border-0'><a href="#">Shop Now</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Offer
