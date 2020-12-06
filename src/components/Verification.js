import React from "react";
import { useTranslation } from "react-i18next";
import "./Verification.css";
import tick from "../images/circle_check_outline.png";
import { withRouter } from "react-router-dom";

function Verification(props) {
  const { t, i18n } = useTranslation();
  return (
    <div className="verify">
      <img className="image" src={tick}></img>
      <div className="text">
        {t("v1")}
        <br />
        {t("v2")}
        <br />
        {t("v4")}
      </div>
      <div className="button">
        <button className="btn" onClick={() => props.history.push("/home")}>
          <div className="button-text">{t("v3")}</div>
        </button>
      </div>
    </div>
  );
}

export default withRouter(Verification);
