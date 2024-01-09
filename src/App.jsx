import { useRef } from "react";

import './App.scss'
/*images*/
import banner from "./assets/images/illustration-article.svg";
/*components*/
import User from "./components/user.jsx";

function App() {
  /*color gray*/
  const gray = {
    color:"var(--Grey)",
  };
  /*references*/
  const title = useRef(null);
  const box = useRef(document.querySelector("#root"));

  /*action*/
  function mouseIn(){
    title.current.style.color="var(--Yellow)";
    box.current.style.boxShadow="15px 15px 0 var(--Black)";
  }
    function mouseOut(){
      title.current.style.color="var(--Black)";
      box.current.style.boxShadow="10px 10px 0 var(--Black)";
  }

  return (
    <>
      <img src={banner}/>

      <span>learning</span>

      <p>published at 21 dec 2023</p>

      <h1 ref={title} onMouseOver={mouseIn} onMouseOut={mouseOut}>html and css foundations</h1>

      <p style={gray}>
        these languages are the backbone
        of every website, defining structure,
        content and presentation.
      </p>

      <User user_name="greg hopper"/>
    </>
  )
}

export default App
