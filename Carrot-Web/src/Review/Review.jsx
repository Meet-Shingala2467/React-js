import React from 'react'
import './Review.css'

const Review = () => {
    return (
        <div>
            <section className='review'>
                <div className='container'>
                    <div className="row">
                        <div className="title text-center">
                                <h2>Great Words From People</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                        </div>

                        <div className="review-content row d-flex justify-content-center">

                            <div className="col-sm-12 col-md-6 col-lg-4  px-0 pb-5 pb-md-0">
                                <div className="review-card mx-3">
                                    <span>Co Founder</span>
                                    <h5>Stephen Smith</h5>
                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                    <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                    <div className="pro-pic">
                                        <img src="img/1 (3).jpg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 col-lg-4 px-0 pb-5 pb-md-0">
                                <div className="review-card mx-3">
                                    <span>Manager</span>
                                    <h5>Lorem Robinson</h5>
                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                    <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" />
                                    <div className="pro-pic">
                                        <img src="img/2 (3).jpg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-lg-4 d-md-none d-lg-flex px-0">
                                <div className="review-card mx-3">
                                    <span>Team Leader</span>
                                    <h5>Saddika Alard</h5>
                                    <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                                    <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                    <div className="pro-pic">
                                        <img src="img/3 (3).jpg" alt="" />
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

export default Review
