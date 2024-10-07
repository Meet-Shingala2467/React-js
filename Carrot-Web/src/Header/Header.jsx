import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div>
      <header>

        {/* header logo start */}

        <div className='container'>
          <div className='row d-flex header1 align-items-center'>

            <div className='col-sm-3 col-lg-3 col-xl-2'>
              <div className='logo'>
                <img src="/img/logo (1).png" alt="Logo" />
              </div>
            </div>

            <div className='col-sm-9 col-lg-6 col-xl-5 d-flex justify-content-end'>
              <form className="d-flex align-items-center">
                <input className='items' type="text" placeholder='Search For items...' />
                <select className="form-select" defaultValue="All Categories">
                  <option value="All Categories">All Categories</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Electronics">Electronics</option>
                </select>
                <a href="#" className="search-btn text-center">
                  <i className="fa-solid fa-magnifying-glass" />
                </a>
              </form>
            </div>

            <div className='col-sm-12 col-lg-3 col-xl-3 d-sm-none d-lg-flex align-items-center justify-content-end p-0'>
              <div className="menu">
                <ul className="d-flex justify-content-end">
                  <li className="menu-item ">
                    <a href="#"><i className="fa-regular fa-user" />Account</a>
                    <ul className="dropdown">
                      <li><a href="#">Register</a></li>
                      <li><a href="#">Checkout</a></li>
                      <li><a href="#">Login</a></li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <a href="#"><i className="fa-regular fa-heart" />Wishlist</a>
                  </li>
                  <li className="menu-item">
                    <a href="#"><i className="fa-solid fa-cart-shopping" />Cart</a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* header logo end */}

        {/* header menu start */}

        <div className="container">
          <div className="row d-flex">
            <div className="togal d-flex align-items-center">

              <div className="col-sm-2 col-lg-1 col-xl-1">
                <div className="togal-button">
                  <a href="#"><i className="fa-solid fa-bars-staggered" /></a>
                </div>
              </div>

              <div className="col-7 col-lg-7 col-xl-6 d-sm-none d-lg-flex justify-content-end">
                <div className="menus1">
                  <ul className='d-flex'>
                    <li><a href="#">Home</a></li>
                    <li className="all-menu"><a href="#">Category<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">Shop Left sidebar</a></li>
                        <li><a href="#">Shop Right sidebar</a></li>
                        <li><a href="#">Full Width</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Products<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">product Left sidebar </a></li>
                        <li><a href="#">product Right sidebar </a></li>
                        <li><a href="#">product Full Width</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Pages<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Policy</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Blog<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">Left Sidebar</a></li>
                        <li><a href="#">Right Sidebar</a></li>
                        <li><a href="#">Full Width</a></li>
                        <li><a href="#">Detail Left Sidebar</a></li>
                        <li><a href="#">Detail Right Sidebar</a></li>
                        <li><a href="#">Detail Full Width</a></li>
                      </ul>
                    </li>
                    <li><a href="#">Elements<i className="fa-solid fa-chevron-down" /></a>
                      <ul className='dropdown'>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Typography</a></li>
                        <li><a href="#">Buttons</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-3 col-xl-3 d-xl-flex d-sm-none justify-content-end">
                <div className="contact">
                  <ul className='d-flex justify-content-end'>
                    <li><i className="fa-solid fa-phone" /></li>
                    <li><a href="#"><span>+123 ( 456 ) ( 7890 )</span></a></li>
                  </ul>
                </div>
              </div>

              <div className='col-sm-10 d-sm-flex d-lg-none align-items-center justify-content-end p-0'>
                <div className="menu">
                  <ul className="d-flex justify-content-end">
                    <li className="menu-item  ">
                      <a href="#"><i className="fa-regular fa-user" /></a>
                      <ul className="dropdown">
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Checkout</a></li>
                        <li><a href="#">Login</a></li>
                      </ul>
                    </li>
                    <li className="menu-item">
                      <a href="#"><i className="fa-regular fa-heart" /></a>
                    </li>
                    <li className="menu-item">
                      <a href="#"><i className="fa-solid fa-cart-shopping" /></a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* header menu end */}

      </header>
    </div>
  );
}

export default Header;












