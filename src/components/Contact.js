import React from "react";
import "./Contact.css";
import { useTranslation } from 'react-i18next';
import e1 from '../images/Ellipse.png';
import e2 from "../images/Ellipse2.png";
import line from "../images/line.png";

function AboutUs(){
  const { t, i18n } = useTranslation();
    return (
      <div className="about">
          <div className="pg">
              <div className="pg2">
                <div className = "t1">{t('c1')}</div>
                <div className="pg3">
                    <img src={e1} className="t3"></img>
                    <div className = "t4">{t('c3')}</div>
                    <div className = "t5">Jon Höfner </div>
                    <div className = "t6"> Tel.: 089/123456</div>
                    <div className = "t7">E-Mail: höfner@dekarbo.de</div>
                </div>
                
              </div>

              <img src={line} className="tt"></img>

              <div className="pg2">
                <div className = "t2">{t('c2')}</div>
                <div className="pg3">
                    <img src={e2} className="t33"></img>
                    <div className = "t4">{t('c3')}</div>
                    <div className = "t5">Anna Müller </div>
                    <div className = "t6"> Tel.: 089/123456</div>
                    <div className = "t7">E-Mail: mueller@stadtmuenchen.de</div>
                </div>
                
              </div>

          </div>
      </div>

      
    );
}

export default AboutUs;