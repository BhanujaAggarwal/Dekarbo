import React from "react";
import "./Imprint.css";
import { useTranslation } from 'react-i18next';

function Imprint(){
    const { t, i18n } = useTranslation();
    return (
      <div>
      <div className="imprint">
        
        <h1 style={{fontWeight:'bold'}}>{t('imprint.1')}</h1>
        <br></br>
        <br></br>
        <h4 style={{fontWeight:'bold'}}>{t('imprint.2')}</h4>
        <br></br>
        <p>{t('imprint.3')}</p>
        <br></br>
        <h5 style={{fontWeight:'bold'}}>{t('imprint.4')}</h5>
        <br></br>
        <p>{t('imprint.5')}</p>
        <p>{t('imprint.6')}</p>
        <p>{t('imprint.7')}</p>
        <br></br>
        <h5 style={{fontWeight:'bold'}}>{t('imprint.8')}</h5>
        <br></br>
        <p>{t('imprint.9')}</p>
        <p>Claudia Frey</p>
        <p>Stefan Drüssler</p>
        <p>Thomas Zeller</p>
        <p>{t('imprint.10')}</p>
        <br></br>
        <h5 style={{fontWeight:'bold'}}>{t('imprint.11')}</h5>
        <br></br>
        <p>+49 89-18 94 69-0</p>
        <p>+49 89-18 94 69-1199</p>
        <h5 style={{fontWeight:'bold'}}>info@unternehmertum.de</h5>
        <br></br>
        <h5 style={{fontWeight:'bold'}}>{t('imprint.12')}</h5>
        <br></br>
        <p>{t('imprint.13')}</p>
        <p>{t('imprint.14')}</p>
        <p>{t('imprint.15')}</p>
        <br></br>
        <h5 style={{fontWeight:'bold'}}>{t('imprint.16')}</h5>
        <br></br>
        <p>{t('imprint.17')}</p>
        <p>DE 252 789 694</p>
        <br></br>
        <h5 style={{fontWeight:'bold'}}>{t('imprint.18')}</h5>
        <br></br>
        <p>{t('imprint.19')}</p>
        <br></br>
        <h5 style={{fontWeight:'bold'}}>{t('imprint.20')}</h5>
        <br></br>
        <p>{t('imprint.21')}</p>
        <br></br>
        <h5 style={{fontWeight:'bold'}}>{t('imprint.22')}</h5>
        <br></br>
        <p>{t('imprint.23')}</p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>
      </div>
    );
}

export default Imprint;