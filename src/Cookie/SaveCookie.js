import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["rememberText"]);

  let now = new Date();
  let after1m = new Date();

  useEffect(() => {
    if (cookies.rememberText !== undefined) {
      setText(cookies.rememberText);
      setIsRemember(true);
    }
  });

  function onChange(e) {
    setText(e.target.value);
  }

  const handleOnChange = (e) => {
    after1m.setMinutes(now.getMinutes() + 2); 
    setIsRemember(e.target.checked);
    if (e.target.checked) {
      setCookie("remeberText", text, { path: "/", expires: after1m });
    } else {
      removeCookie("rememberText");
    }
  };

  return (
    <>
      {" "}
      <input value={text} onChange={onChange} />{" "}<br/>
      <input type="checkBox" onChange={handleOnChange} checked={isRemember} />{" "}<br/>
      <input type="button" value ="create to cookie"/><br/>
      <input type="button" value ="remove to cookie" onClick={()=>{removeCookie("rememberText")}}/>
      <h1>{text}</h1>{" "}
    </>
  );
}

export default App;