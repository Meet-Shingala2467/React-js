import React from 'react'
import './Organic.css'

const Organic = () => {
    return (
        <div>
            <section className='Organic'>
                <div className="container">
                    <div className="row">

                        <div className="main-box row d-flex">

                            <div className="col-sm-6 col-lg-3 p-2 mb-sm-4">
                                <div className="box-1 m-0">
                                    <div className="img-box">
                                        <a href="#"><img src="img/1 (1).jpg" /></a>
                                    </div>
                                    <div className="text-box">
                                        <a href="#">
                                            <span>Vegetables</span><br />
                                            <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" />
                                            <span>(4.5)</span>
                                            <h3>Fresh organic villa farm lomon 500gm pack</h3>
                                            <p>$120<span>$123.25</span></p>
                                        </a>
                                        <div className="icon1">
                                            <a href="#">
                                                <p><i className="fa-regular fa-eye" /></p>
                                                <i className="fa-regular fa-heart" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3 p-2 mb-sm-4">
                                <div className="box-1 m-0">
                                    <div className="img-box">
                                        <a href="#"><img src="img/9 (1).jpg" /></a>
                                    </div>
                                    <div className="text-box">
                                        <a href="#">
                                            <span>Snacks</span><br />
                                            <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                            <span>(5.0)</span>
                                            <h3>Best snakes with hazel nut pack 200gm</h3>
                                            <p>$145<span>$150</span></p>
                                        </a>
                                        <div className="icon1">
                                            <a href="#">
                                                <p><i className="fa-regular fa-eye" /></p>
                                                <i className="fa-regular fa-heart" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-6 col-xl-6 ">
                                <div className="big-box d-flex">
                                    <div className="col-6"></div>
                                    <div className="Organic1 col-6 ">
                                        <h1>Organic & Healthy Vegetables</h1>
                                        <p>25%<span>OFF</span></p>
                                        <div className="btn"><a href="#">Shop Now</a></div>
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

export default Organic
