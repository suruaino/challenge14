import React, { useState } from 'react';
import success_icon from './assets/images/icon-success.svg';
import mobile_illustration from './assets/images/illustration-sign-up-mobile.svg';
import './App.css';

function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  function openDialog(event){
    // dialog.style.display ="flex";
    // dialog.style.flexDirection ="column";
    // dialog.style.gap = 1 + "rem";
    event.preventDefault(); // Prevent form submission
    setDialogOpen(true);
    // dialog.showModal();
    // console.log("modal is open!")
}

  // const openDialog = () => {
  //   setDialogOpen(true);
  // };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  return (
    <main className="">
      <div className="imgbx">
        <img src={mobile_illustration} alt="" />
      </div>

      <div className="contentbx mt-5 flex flex-col gap-6">
        <h2 className="font-bold text-4xl">Stay updated!</h2>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="flex flex-col gap-2 ">
          <li><img src={success_icon} alt="" />Product discovery and building what matters</li>
          <li><img src={success_icon} alt="" />Measuring to ensure updates are a success</li>
          <li><img src={success_icon} alt="" />And much more!</li>
        </ul>
        <form action="" className="flex flex-col gap-2 relative">
          <label htmlFor="" className="text-sm font-bold">Email address</label>
          <label htmlFor="" className='text-red-600 absolute right-0'>valid email required</label>
          <input value={inputValue}
                 onChange={handleChange}
                 style={{ borderColor: inputValue === "" ? "red" : "black" }} 
               
                 type="email" 
                 placeholder="email@company.com" />
          <button onClick={openDialog}>Subscribe to monthly newsletter</button>
        </form>
      </div>

      {dialogOpen && (
        <dialog open className="dialog px-4 py-6 flex flex-col gap-4">
          <img src={success_icon} alt="" />
          <h2 className="text-4xl font-bold">Thanks for subscribing!</h2>
          <p className="text-sm">
            A confirmation email has been sent to ash@loremcompany.com.
            Please open it and click the button inside to confirm your subscription.
          </p>
          <button onClick={closeDialog}>Dismiss message</button>
        </dialog>
      )}

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
        Coded by <a href="#">SURU EMMANUEL</a>.
      </div>
    </main>
  );
}

export default App;
