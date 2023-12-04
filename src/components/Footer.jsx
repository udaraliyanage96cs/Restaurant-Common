import React from "react";

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
            <div className="single-footer-widget footer_1">
              <h4>About Us</h4>
              <p>
                Heaven fruitful doesn't over for these theheaven fruitful doe
                over days appear creeping seasons sad behold beari ath of it fly
                signs bearing be one blessed after.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-md-2 col-lg-3">
            <div className="single-footer-widget footer_2">
              <h4>Important Link</h4>
              <div className="contact_info">
                <ul>
                  <li>
                    <a href="#">WHMCS-bridge</a>
                  </li>
                  <li>
                    <a href="#"> Search Domain</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Shopping Cart</a>
                  </li>
                  <li>
                    <a href="#"> Our Shop</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-md-3 col-lg-3">
            <div className="single-footer-widget footer_2">
              <h4>Contact us</h4>
              <div className="contact_info">
                <p>
                  <span> Address :</span>Hath of it fly signs bear be one
                  blessed after{" "}
                </p>
                <p>
                  <span> Phone :</span> +2 36 265 (8060)
                </p>
                <p>
                  <span> Email : </span>info@colorlib.com{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-md-4 col-lg-3">
            <div className="single-footer-widget footer_3">
              <h4>Newsletter</h4>
              <p>
                Heaven fruitful doesn't over lesser in days. Appear creeping
                seas
              </p>
              <form action="#">
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Address"
                    />
                    <div className="input-group-append">
                      <button className="btn" type="button">
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="copyright_part_text">
          <div className="row">
            <div className="col-lg-8">
              <p className="footer-text m-0">
                Copyright &copy;2024 All rights reserved | This template is made
                with <i className="ti-heart" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <div className="copyright_social_icon text-right">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="ti-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fab fa-behance"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
