import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <section className='footerCopyright'>
        <div className='container'>
          <div className="row">

            <div className="footer row d-flex justify-content-center">

              <div className="col-sm-12 col-lg-6 col-xl-4">
                <div className="logo">
                  <img src="img/logo (1).png" alt="" />
                </div>
                <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                <ul>
                  <li><i className="fa-solid fa-location-dot" />51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</li>
                  <li><a href="#"><i className="fa-solid fa-envelope-circle-check" />example@email.com</a></li>
                  <li><a href="#"><i className="fa-solid fa-phone" />+91 123 4567890</a></li>
                </ul>
              </div>

              <div className="col-sm-6 col-lg-3 col-xl-2">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Delivery Information</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">contact Us</a></li>
                  <li><a href="#">Support Center</a></li>
                </ul>
              </div>

              <div className="col-sm-6 col-lg-3 col-xl-2">
                <h4>Category</h4>
                <ul>
                  <li><a href="#">Dairy & Bakery</a></li>
                  <li><a href="#">Fruits & Vegetable</a></li>
                  <li><a href="#">Snack & Spice</a></li>
                  <li><a href="#">Juice & Drinks</a></li>
                  <li><a href="#">Chicken & Meat</a></li>
                  <li><a href="#">Fast Food</a></li>
                </ul>
              </div>

              <div className="col-sm-12 col-xl-4">
                <h4>Subscribe Our Newsletter</h4>

                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form>

                <div className="social-media">
                  <span>
                    <a href="#"><i className="fa-brands fa-facebook-f" /></a>
                  </span>
                  <span>
                    <a href="#"><i className="fa-brands fa-x-twitter" /></a>
                  </span>
                  <span>
                    <a href="#"><i className="fa-brands fa-dribbble" /></a>
                  </span>
                  <span>
                    <a href="#"><i className="fa-brands fa-instagram" /></a>
                  </span>
                </div>
                <div className="images d-flex">
                  <a href="#"><img src='img/1 (5).jpg' className='mx-1 rounded'></img></a>
                  <a href="#"><img src='img/2 (5).jpg' className='mx-1 rounded'></img></a>
                  <a href="#"><img src='img/3 (5).jpg' className='mx-1 rounded'></img></a>
                  <a href="#"><img src='img/4 (1).jpg' className='mx-1 rounded'></img></a>
                </div>
              </div>

            </div>

            <div className="copyright">
              <p>© <span>2024</span><a href="index.html"> Mr.Me</a>, All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
