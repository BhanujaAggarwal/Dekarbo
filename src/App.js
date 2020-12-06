import React, { Component, Suspense, useState } from "react";
import "./i18n";
import { useTranslation } from "react-i18next";
import "./App.css";
import { functions } from "./firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Policy from "./components/DataPolicy";
import Imprint from "./components/Imprint";
import Verification from "./components/Verification";
import Verified from "./components/AlreadyVerified";
import { Helmet } from "react-helmet";
import Form from "./components/Form";

function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "");
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    setLang(localStorage.getItem("lang"));
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={null}>
            <Header />
          
          <Switch>
            <Route path="/imprint" component={Imprint} />
            {/* <Route path="/home" component={() => <Home lang={lang} />} /> */}
            <Route path="/home" component={Home} />
            <Route path="/policy" component={Policy} />
            <Route path="/about" component={AboutUs} />
            <Route path="/success" component={Verification} />
            <Route path="/verified" component={Verified} />
            <Route path="/form" component={Form} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        </Suspense>
      </div>
      <Helmet>
        <script
          src="https://233eebe5db25456c860558079b58c145.js.ubembed.com"
          async
        ></script>
      </Helmet>
    </BrowserRouter>
  );
}

export default App;
