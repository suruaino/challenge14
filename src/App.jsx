
import './App.css'
import success_icon from './assets/images/icon-success.svg'
import mobile_illustration from './assets/images/illustration-sign-up-mobile.svg'
function App() {
  
const dialog = document.getElementById('myDialog');

function openDialog(event){
    dialog.style.display ="flex";
    dialog.style.flexDirection ="column";
    dialog.style.gap = 1 + "rem";
    event.preventDefault();
    dialog.showModal();
}

function closeDialog(){
    dialog.close();
}


  return (
    <main>
    
      <div class="imgbx">
        <img src={mobile_illustration} alt="" />
      </div>

      <div class="contentbx mt-5 flex flex-col gap-6">
        <h2 class="font-bold text-4xl">Stay updated!</h2>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul class="flex flex-col gap-2 ">
          <li><img src={success_icon} alt="" />Product discovery and building what matters</li>
          <li><img src={success_icon} alt="" />Measuring to ensure updates are a success</li>
          <li><img src={success_icon} alt="" />And much more!</li>
        </ul>
        <form action="" class="flex flex-col gap-2">
          <label for="" class="text-sm font-bold">Email address</label>
          <input type="email" placeholder="email@company.com" />
          <button onClick={openDialog}>Subscribe to monthly newsletter</button>
        </form>
      </div>

      <div className ="dialog_container">
        <dialog class="dialog px-4 py-6 flex flex-col gap-4">
          <img src={success_icon} alt="" />
          <h2 class="text-4xl font-bold">Thanks for subscribing!</h2>
          <p class="text-sm">
            A confirmation email has been sent to ash@loremcompany.com.
            Please open it and click the button inside to confirm your subscription.
          </p>
          <button onClick={closeDialog}>Dismiss message</button>
        </dialog>
      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">SURU EMMANUEL</a>.
      </div>

    </main>
  )
}

export default App
