import React from "react";

import Contact from "./Contact";
const Demo = () => (
  <div className="text-right">
    <Contact />
    <a
      href="https://youtu.be/Q65TPCAeQlU"
      target="_blank"
      className="btn btn-dark rounded-pill col-4 col-md-2"
    >
      Mobile
    </a>
    <a
      href="https://youtu.be/hlGd7yk4nko"
      target="_blank"
      className="btn btn-info rounded-pill col-4 col-md-2"
    >
      Desktop
    </a>
  </div>
);

export default Demo;
