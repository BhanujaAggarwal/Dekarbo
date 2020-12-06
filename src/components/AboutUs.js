import React from "react";
import "./AboutUs.css";
import { useTranslation } from 'react-i18next';
import group from '../images/group.png';
import about from "../images/about.png";
import vector from "../images/dekarbo.png"
import line from "../images/line.png";

function AboutUs(){
  const { t, i18n } = useTranslation();
    return (
      <div className="about">
        
          <div className="green">
          <img src={about}></img>
          <img src={vector} className="imgg"></img>
          <img src={line} className="imgg1"></img>
          <img src={group} className="imgg2"></img>
            <div>
              <h1 style={{color:'white',fontWeight:'600',fontSize:'36px',marginLeft:'9vw',textAlign:"left",marginTop:"30vh"}}>{t('about')}</h1>
              <br></br>
              <h3 style={{color:'white',fontWeight:'400',fontSize:'18px',marginRight:'9vw',marginLeft:'9vw',textAlign:"left"}}>{t('about1')}</h3>
              <h3 style={{color:'white',fontWeight:'400',fontSize:'18px',marginRight:'9vw',marginLeft:'9vw',textAlign:"left"}}>{t('about2')}</h3>
            </div>
          </div>
      </div>
    );
}

export default AboutUs;