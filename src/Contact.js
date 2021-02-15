import React from "react";
import "./Wohoo";
const Contact = () => (
  <div className="text-center uk-animation-toggle">
    <button
      type="button"
      className="btn btn-primary float-right rounded-pill uk-animation-shake col-4 col-md-2"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#contact"
      aria-expanded="false"
      aria-controls="contact"
    >
      Contact Us
    </button>
    <div className="collapse" id="contact">
      <div className="card card-body">
        <a
          href="https://wa.me/6285646104747?text=Axcoraapps%20saya%20mau%20informasi%20WebApp%0A"
          className="btn btn-success col-12"
          target="_blank"
        >
          Chat
        </a>
        <a href="tel:+6285331361404" className="btn btn-primary col-12">
          Call us
        </a>
        <a href="mailto:axcora@gmail.com" className="btn btn-danger col-12">
          E-Mail
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
