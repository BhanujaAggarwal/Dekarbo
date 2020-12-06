import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Form.css";
import { db } from "../firebase";
import { Link } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const [os, setOs] = useState("");
  const [oss, setOss] = useState("");
  const [gen, setGen] = useState("");

  const [platformValue, plaftormInputProps] = useRadioButtons("platform");
  const [langValue, langInputProps] = useRadioButtons("lang");
  const [genderValue, genderInputProps] = useRadioButtons("gender");

  const [checked, setChecked] = useState(false);
  const isEnabled = checked == true;

  const [fields, setFields] = useState([
    { name: null, working_hours: null, number: null }
  ]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].name = event.target.value;
    setFields(values);
  }
  function handleChange1(i, event) {
    const values = [...fields];
    values[i].working_hours = event.target.value;
    setFields(values);
  }
  function handleChange2(i, event) {
    const values = [...fields];
    values[i].number = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }

  const handleSubmit = e => {
    e.preventDefault();

    setLoader(true);

    db.collection("ShopData")
      .add({
        products: fields,
        Number_of_employees: os,
        Revenue_in_Millions: gen,
        name: name,
        email: email,
        message: message,
        verified: false,
        terms:checked,
        language : oss
      })
      .then(() => {
        alert("Form has been submitted :)");
        setLoader(false);
      })
      .catch(error => {
        alert(error.message);
        setLoader(false);
      });
    setOs("");
    setOss("");
    setGen("");
    setName("");
    setEmail("");
    setMessage("");
    // setFields("");
  };
  const { t, i18n } = useTranslation();
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="f1">{t("form1")}</h1>
      <br></br> <br></br><br></br><br></br>

    <div>
      <fieldset onChange={e => setOs(e.target.value)}>
        <span className="f2">{t("form2")}</span>
        <input
          // style={{ marginRight:"10vw"}}
          value="<250"
          checked={platformValue === "<250"}
          {...plaftormInputProps}
        />
        <span className="f3">＜ 250</span>
        <input
          value=">=250"
          checked={platformValue === ">=250"}
          {...plaftormInputProps}
        />
        <span className="f3">＞= 250</span>
        
      </fieldset>
      </div>

      <br></br><br></br>

      


      <div>
      <fieldset onChange={e => setGen(e.target.value)}>
      <span className="f2">{t("form3")}</span>
        <input
          value="<50"
          checked={genderValue === "<50"}
          {...genderInputProps}
        />
        <span className="f3">＜50 Million</span>
        <input
          value=">=50"
          checked={genderValue === ">=50"}
          {...genderInputProps}
        />
        <span className="f3">＞=50 Million</span>
      </fieldset>
      </div>

      <br></br><br></br>

      <div>
      <fieldset onChange={e => setOss(e.target.value)}>
        <span className="f2">{t("form22")}</span>
        <input
          // style={{ marginRight:"10vw"}}
          value="en"
          checked={langValue === "en"}
          {...langInputProps}
        />
        <span className="f3">English</span>
        <input
          value="de"
          checked={langValue === "de"}
          {...langInputProps}
        />
        <span className="f3">German</span>
        
      </fieldset>
      </div>

      <br></br><br></br>


      <div>
          <span className="f5">{t("form4")}</span>
          <span className="f4">{t("form5")}</span>
      </div>
      

      <br></br>
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              style={{ padding: 15, fontSize: 16 }}
              type="text"
              placeholder={t("form6")}
              onChange={e => handleChange(idx, e)}
            />
            <input
              style={{ padding: 15, fontSize: 16 }}
              type="text"
              placeholder={t("form7")}
              onChange={e => handleChange1(idx, e)}
            />
            <input
              style={{ padding: 15, fontSize: 16 }}
              type="text"
              placeholder={t("form8")}
              onChange={e => handleChange2(idx, e)}
            />
            <button
              style={{ padding: 15, fontSize: 16 }}
              type="button"
              onClick={() => handleRemove(idx)}
            >
              {t("form14")}
            </button>
          </div>
        );
      })}

      <button
      className = "f6"
        type="button"
        onClick={() => handleAdd()}
      >
        {t("form9")}
      </button>
      <br></br>

      <div>
      {/* <lable >{t("form10")}</lable> */}
      <input
        style={{ padding: 15, fontSize: 16,width:"28vw"}}
        placeholder={t("form10")}
        value={name}
        onChange={e => setName(e.target.value)}
      />
      </div>

      <br></br>

      <div>
      {/* <lable >{t("form11")}</lable> */}
      <input
        style={{ padding: 15, fontSize: 16 ,width:"28vw"}}
        placeholder={t("form11")}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      </div>

      <br></br>

      <div>
      {/* <lable >{t("form12")}</lable> */}
      <textarea
        style={{ padding: 15, fontSize: 16, height:"15vh",overflowY:"scroll",width:"28vw" }}
        placeholder={t("form12")}
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>
      </div>

      <br></br> <br></br> <br></br>

      <div>
      <input type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {" "}
      <span>{t("form15a")}</span>
      {" "}
      <span>
        <Link to = "/policy">{t("form15b")}</Link>
      </span>
      {" "}
      <span>{t("form15c")}</span>
      </div>
      <br></br>
      
      <button
      disabled={!isEnabled}
        className = "f7"
        type="submit"
        style={{ background: checked ? "#1F4037" : "#ccc" }}
      >
        <span style={{ color:"#FFFFFF"}}>{t("form13")}</span>
        
      </button>

      <br></br><br></br>

      
      

      <br></br><br></br><br></br><br></br>
    </form>
  );
};

function useRadioButtons(name) {
  const [value, setState] = useState(null);

  const handleChange = e => {
    setState(e.target.value);
  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange
  };

  return [value, inputProps];
}

export default Contact;
