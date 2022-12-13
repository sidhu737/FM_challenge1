import React from "react";
import thankyou from "../images/illustration-thank-you.svg";
function Greeting({ flagr }) {
  return (
    <div className="bg-Dark_Blue max-w-md py-7 pl-7 pr-9 rounded-3xl flex flex-col items-center bg-opacity-80">
      <img src={thankyou} alt="" />
      <p className="text-Orange  bg-Medium_Grey my-5 py-1 px-4 h-fit rounded-2xl justify-center text-sm items-center bg-opacity-10">
        You selected {flagr} out of 5
      </p>
      <p className="text-xl font-semibold text-White tracking-wider">
        Thank you!
      </p>
      <p className="text-Light_Grey text-center mt-3">
        We appreciate you taking the time to give a rating.
      </p>
      <p className="text-Light_Grey text-center mx-5 ">
        {" "}
        If you ever need more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Greeting;
