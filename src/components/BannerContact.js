import React from "react";
import grassWrapsInBox from "../assets/images/contactBanner.png";

const BannerContact = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="my-5 pt-5"></header>
      <div className="row mt-5">
        <div className="container contact_section">
          <img src={grassWrapsInBox} alt="grassWrapsInBox" />
          <div className="contact_section_info">
            <div className="col-sm-6 text-left contact_section_left">
              <h2>Thy, Denmark</h2>
              <div className="contact_links mb-5">
                <h4>
                  <a href="tel:+4522437060">+4522437060</a>
                </h4>
                <h5>
                  <a href="mailto:buzzin@waxhivewraps.com" className="my-5 green">
                    buzzin@waxhivewraps.com
                  </a>
                </h5>
              </div>
            </div>
            <div className="col-sm-6 text-right contact_section_right ">
              <form className="form">
                <div className="form-group mb-2 text-left">
                  <label htmlFor="">Name</label>
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group mb-2">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group mb-2">
                  <textarea className="mt-3" placeholder="Message" />
                  <button type="submit" className="mt-3">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BannerContact;
