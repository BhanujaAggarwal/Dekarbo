import React from "react";
import "./Footer.css";
import logo from "../images/footer.png";
import { withRouter } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <img className="image" src={logo}></img>
      <div className="text"></div>
    </div>
  );
}

export default withRouter(Footer);
