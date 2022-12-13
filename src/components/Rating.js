import React, { useState } from "react";
import starLogo from "../images/icon-star.svg";
import "./Rating.css";
function Rating({ submitRating }) {
  const li_class =
    "border p-3 border-none w-10 h-10 flex items-center  justify-center rounded-full bg-Light_Grey bg-opacity-10 text-Light_Grey text-sm listitems sm:m-0 m-0.5";
  const [rating, setRating] = useState("1");
  const ratingHandler = (e) => {
    // console.log(e.target.value);
    setRating(e.target.value);
  };
  return (
    <div className="bg-Dark_Blue max-w-md py-7 pl-7 pr-9 rounded-3xl bg-opacity-80 main-container">
      <img
        src={starLogo}
        alt=""
        className="border p-3 border-none rounded-full bg-Light_Grey bg-opacity-10"
      />
      <h2 className="text-White font-semibold pt-7 pb-3 text-3xl tracking-wide">
        How did we do?
      </h2>
      <p className="text-Light_Grey font-normal text-lg">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="flex justify-between py-4 pr-2 ">
        <li>
          <button onClick={ratingHandler} value={1} className={li_class}>
            1
          </button>
        </li>
        <li>
          <button onClick={ratingHandler} value={2} className={li_class}>
            2
          </button>
        </li>
        <li>
          <button onClick={ratingHandler} value={3} className={li_class}>
            3
          </button>
        </li>
        <li>
          <button onClick={ratingHandler} value={4} className={li_class}>
            4
          </button>
        </li>
        <li>
          <button onClick={ratingHandler} value={5} className={li_class}>
            5
          </button>
        </li>
      </ul>
      <button
        className="w-full rounded-3xl mr-3  text-White tracking-widest font-semibold text-sm mt-4 h-11 bg-Orange"
        onClick={() => submitRating(rating)}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default Rating;
