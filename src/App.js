import { useState } from "react";
import "./App.css";
import Greeting from "./components/Greeting";
import Rating from "./components/Rating";

function App() {
  const [flagr, setFlagr] = useState("");
  const submitRating = (e) => {
    setFlagr(e);
    console.log(e);
  };
  return (
    <div className="App sm:grid sm:h-screen place-items-center grid h-screen mx-12 ">
      {flagr ? (
        <Greeting flagr={flagr} />
      ) : (
        <Rating submitRating={submitRating} />
      )}
      {/* <Greeting /> */}
      {/* <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/sidhu737">Siddu</a>.
      </div> */}
    </div>
  );
}

export default App;
