import React from "react";
import { useTranslation } from "react-i18next";
import "./Verification.css";
import error from "../images/error_outline.png";
function DataPolicy(props) {
  const { t, i18n } = useTranslation();
  return (
    // <div className="data">
    //   <h1>{t("a1")}</h1>
    //   <div className="button">
    //     <button className="btn" onClick={() => props.history.push("/home")}>
    //       <span className="button-text">{t("a2")}</span>
    //     </button>
    //   </div>
    // </div>
    <div className="verify">
      <img className="image" src={error}></img>
      <div className="text">{t("a1")}</div>
      <div className="button">
        <button className="btn" onClick={() => props.history.push("/home")}>
          <span className="button-text">{t("v3")}</span>
        </button>
      </div>
    </div>
  );
}

export default DataPolicy;
