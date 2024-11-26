import React from 'react'
import './News.css'

const News = () => {
    return (
        <div>
            <section className='news'>
                <div className='container'>
                    <div className="row">
                        <div className="title text-center">
                                <h2>Latest News</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                        </div>

                        <div className=" row news-text">

                            <div className="col-sm-12 col-md-6 col-lg-4 pb-sm-4 pb-lg-0 px-0">
                                <div className="card mx-2 h-100">
                                    <div className="card-body">
                                        <p><span>By Admin</span> | <a href="#">Snacks</a></p>
                                        <h5>Urna pretium elit mauris cursus at elit Vestibulum.</h5>
                                        <a href="#" className='read'>Read More <i className="fa-solid fa-arrow-right" /></a>
                                    </div>
                                    <div className="imgs-box">
                                        <img src="img/2 (4).jpg" className="card-img-top" alt="..." />
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 pb-sm-4 pb-lg-0 px-0">
                                <div className="card mx-2 h-100">
                                    <div className="card-body">
                                        <p><span>By Admin</span> | <a href="#">Food</a></p>
                                        <h5>Best guide to Shopping for organic ingredients.</h5>
                                        <a href="#" className='read'>Read More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                    <div className="imgs-box">
                                        <img src="img/1 (4).jpg" className="card-img-top" alt="..." />
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-12 col-lg-4 d-md-none d-lg-flex px-0">
                                <div className="card mx-2 h-100">
                                    <div className="card-body">
                                        <p><span>By Admin</span> | <a href="#">Snacks</a></p>
                                        <h5>Cursus at elit vestibulum urna pretium elit mauris.</h5>
                                        <a href="#" className='read'>Read More <i className="fa-solid fa-arrow-right" /> </a>
                                    </div>
                                    <div className="imgs-box">
                                        <img src="img/3 (4).jpg" className="card-img-top" alt="..." />
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

export default News
