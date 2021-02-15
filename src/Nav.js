import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <div>
    <Link to="/">
      <img
        width="120"
        className="img-fluid"
        src="https://mesinkasironline.web.app/img/createwebsitelaravel.png"
      />
      <h1 className="text-danger">Larapos</h1>
    </Link>
    <p>Aplikasi kasir toko grosir dan eceran</p>
    <a
      href="https://mesinkasir.github.io/e-catalog/larapos.pdf"
      className="btn btn-danger rounded-pill btn-block"
    >
      Download
    </a>
  </div>
);

export default Nav;
