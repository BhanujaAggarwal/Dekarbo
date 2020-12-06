import React, { useState } from "react";
import "./Home.css";

import { useTranslation } from "react-i18next";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";

import CityofMunichLogo from "../images/CityofMunichLogo.png";
import UTULogo from "../images/UTULogo.png";
import DPSLogo from "../images/DPSLogo.png";
import upload from "../images/upload.png";
import analyze from "../images/analyze.png";
import mail from "../images/mail.png";
import conc from "../images/conc-image.png";
import left from "../images/left.png";
import right from "../images/right.png";
import foot from "../images/footer.png";

import Footer from "./Footer.js";
import { withRouter } from "react-router-dom";
function Home(props) {
  const { t, i18n } = useTranslation();
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const img = [img1, img3, img4, img2];
  const text = ["carousel_1", "carousel_3", "carousel_4", "carousel_2"];
  const des = ["carousel_11", "carousel_31", "carousel_41", "carousel_21"];

  const indexHandler1 = () => {
    if (index === 0) setIndex(3);
    else setIndex(index - 1);
    setShow();
  };
  const indexHandler2 = () => {
    if (index === 3) setIndex(0);
    else setIndex(index + 1);
    setShow();
  };

  const showHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <div>
        <div className="background">
          <p className="intro">{t("home1")}</p>
        </div>
        <img className="UTULogo" src={UTULogo}></img>
        <img className="CityofMunichLogo" src={CityofMunichLogo}></img>
        <img className="DPSLogo" src={DPSLogo}></img>

        <div className="method" div id="scroll_nav">
          <p className="method-text">{t("home3")}</p>
          <img className="upload" src={upload} />
          <p className="one">1</p>
          <p className="ruleone">{t("home4")}</p>
          <img className="analyze" src={analyze} />
          <p className="two">2</p>
          <p className="ruletwo">{t("home5")}</p>
          <img className="mail" src={mail} />
          <p className="three">3</p>
          <p className="rulethree">{t("home6")}</p>
          <div className="request">
            <button
              className="request-button"
              onClick={() => props.history.push("/form")}
            >
              <span className="request-button-text">
                {t("requestButtonText")}
              </span>
            </button>
          </div>
        </div>
        <div className="carousel-div">
          <div className="carousel-text">{t("home7")}</div>
          <img
            className="carousel-left"
            src={index === 0 ? img[3] : img[index - 1]}
          ></img>
          <div className="center">
            <img
              className="carousel-center"
              onClick={showHandler}
              src={img[index]}
            ></img>
          </div>
          <div className="name" onClick={showHandler}>
            <div className="center-title">{t(text[index])}</div>
          </div>
          {show === true && (
            <div className="center-description" onClick={showHandler}>
              <div className="center-title">{t(text[index])} </div>{" "}
              <div className="description-text">{t(des[index])} </div>
            </div>
          )}
          <img
            className="carousel-right"
            src={index === 3 ? img[0] : img[index + 1]}
          ></img>
          <img className="left" src={left} onClick={indexHandler1}></img>
          <img className="right" src={right} onClick={indexHandler2}></img>
        </div>
        <div className="conc">
          <img src={conc} className="concImage" />
          <div className="concText1">{t("home12")}</div>
          <div className="concInner"></div>
          <div className="concText2">{t("home13")}</div>
        </div>
        <div className="footn">
          <img src={foot} className="footer-image" />
          <div onClick={() => props.history.push("/about")} className="foot1">
            {t("Header1")}
          </div>
          <div
            onClick={() => props.history.push("/imprint")}
            className="foot1 foot2"
          >
            {t("Header4")}
          </div>

          <div
            onClick={() => props.history.push("/policy")}
            className="foot1 foot3"
          >
            {t("Header3")}
          </div>
          <div className="foot4">
            UnternehmerTUM GmbH Lichtenbergstr. 6 85748 Garching b. München
          </div>
          <hr className="line" />
          <div className="foot5">© 2020 DEKARBO. All rights reserved</div>
          <img src={UTULogo} className="footImg1" />
          <img src={CityofMunichLogo} className="footImg2" />

          <img src={DPSLogo} className="footImg3" />
          <div className="foot6">service@dekarbo.de</div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Home);
