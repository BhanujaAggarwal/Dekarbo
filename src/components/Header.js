import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import "./Header.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import dekarbo_logo from '../images/dekarboLogo.png'
import {Link} from 'react-scroll'


function Header(props) {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [lang, setLang] = useState(localStorage.getItem('lang') || "zh-hk")

  const changeLanguage = (event) => {
    setLang(event.target.value);
  }

  React.useEffect(() => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }, [lang]);


  return (
    <div>
      <Navbar color="light" light expand="md" >
        <div>
          <NavbarBrand href="/">
            <img src={dekarbo_logo} style={{ width: 100, marginTop: -7 }} />
          </NavbarBrand>
        </div>
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar> 
            
            <NavItem className="navItem">
              <NavLink href="/about">
                <div style={{color:"black"}}>
                  {t('Header1')}
                </div>
                </NavLink>
            </NavItem>
            
            <NavItem className="navItem" >
              <NavLink style={{color:"black"}} href="/">{t('Header2')}</NavLink>
            </NavItem>

            {/* <NavItem className="navItem" >
              <Link activeClass="active" to="scroll_nav" spy={true} smooth={true}>
                <div style={{marginTop:"8.5px",textDecoration:"underline", textDecorationColor:"black",textUnderlineOffset:"12px"}}>
                {t('Header2')}
                </div>
              </Link>
            </NavItem> */}
            <NavItem className="navItem" >
              <NavLink style={{color:"black"}} href="/policy">{t('Header3')}</NavLink>
            </NavItem>
            <NavItem className="navItem" >
              <NavLink style={{color:"black"}} href="/imprint">{t('Header4')}</NavLink>
            </NavItem>
            <NavItem className="navItem" >
              <NavLink style={{color:"black"}} href="/contact">{t('Header5')}</NavLink>
            </NavItem>
            <NavItem className="navItemLang" >
              <div onChange={changeLanguage}>
                <input className="radioLang" id="de" type="radio" value="zh-hk" name="language" checked={lang === "zh-hk"} /><label for="de"> DE </label>
                <> |</>
                <input className="radioLang" id="en" type="radio" value="en" name="language" checked={lang === "en"} /><label for="en">EN </label>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
