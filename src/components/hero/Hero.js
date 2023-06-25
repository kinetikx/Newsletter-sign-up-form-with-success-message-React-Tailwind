import React, { useState, useEffect } from "react";
import Thanks from "../Thaks/Thanks";
import signUpMobile from "../../assets/illustration-sign-up-mobile.svg";
import signUpDesktop from "../../assets/illustration-sign-up-desktop.svg";
import success from "../../assets/icon-success.svg";

// Helper function for validating emails
const isValidEmail = (email) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
};

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    
    if (!isValidEmail(emailInput)) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  };

  const handleSubscription = () => {
    if (!isEmailError && email !== "") {
      setIsSuccessVisible(true);
    }
  };

  if(isSuccessVisible){
    return <Thanks show={isSuccessVisible} setShow={setIsSuccessVisible} />;
  }
  if(isSuccessVisible){
    return <Thanks show={isSuccessVisible} setShow={setIsSuccessVisible} />;
}

return (
    <div className="max-w-[930px] flex md:flex-col-reverse gap-16 bg-white mx-auto md:m-0 m-24 p-6 md:p-0 md:rounded-none rounded-3xl">
        <div className="flex-1 py-8 pl-8 mt-6 md:pr-8 text-h1Text ">
            <h1 className="text-6xl font-semibold">Stay updated!</h1>
            <h6 className="my-5">Join 60,000+ product managers receiving monthly updates on:</h6>
            <div className="flex flex-col text-base gap-y-3 ">
                {/* Repeated elements could be generated through map() if data is available */}
                <p className="flex flex-row"><i className="mr-4"><img width={20} src={success} /></i>Product discovery and building what matters</p>
                <p className="flex flex-row"><i className="mr-4"><img width={20} src={success} /></i>Measuring to ensure updates are p success</p>
                <p className="flex flex-row"><i className="mr-4"><img width={20} src={success} /></i>And much more!</p>
            </div>
            <div className="mt-10">
                <div className="flex flex-row justify-between">
                    <p className="text-xs font-bold">Email adress</p>
                    {isEmailError && <p className="text-red-500 text-xs ">Valid email required</p>}
                </div>
                <input
                    placeholder="email@company.com"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="border border-gray-500 mt-3 py-4 pl-5 rounded-lg w-full 
                    invalid:border-red-400 focus:invalid:border-red-400 focus:invalid:text-red-400 invalid:text-red-400 
                    focus:invalid:bg-red-100 invalid:bg-red-100 focus:outline-none focus:invalid:outline-none"
                />
            </div>
            <button onClick={handleSubscription} className="bg-buttonBg mt-6 w-full py-4 hover:bg-slate-900 text-white rounded-lg">
                Subscribe to monthly newsletter
            </button>
        </div>
        <div className="md:w-full">
            {windowWidth >= 766 ? <img src={signUpDesktop} /> : <img className="w-full" src={signUpMobile} />}
        </div>
    </div>
);
};

export default Hero;
