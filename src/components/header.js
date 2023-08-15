import { useState } from 'react';
import '../App.css';
import videoBg from "./video.mp4"

function Header() {

  const [text, setText] = useState("")
  const [check , setCheck] = useState("false")

  const onTextClick =(e) => {
    setText(e.target.value)
  }

  const onCrossClick = () => {
    setText("")
  }

  const boxClick = () => {
    setCheck((check)=>(!check))
  }
  return (
    <div className="App">
        <video src={videoBg} autoPlay loop muted className='video-class'/>
      <div className='container'>
        <div className='uni-logo'></div>
        <span className='heading'><strong>NX Wave.</strong> The next-gen credit card for those who love rewards.</span>
        <div className='row-text'>
          <div>1% Cashback</div>
          <div className='star'></div>
          <div>5x Rewards</div>
          <div className='star'></div>
          <div>Zero Forex Markup</div>
        </div>
        <div className='input-container'>
          <input type = "number" placeholder='Enter Phone Number' className='input-number' onChange={onTextClick} value = {text}></input>
          {text.length > 0 && text.length !== 10 && <div className='cross' onClick={onCrossClick}></div>}
          {text.length === 10 && <div className='tick' ></div>}
          <button type='submit' className='apply-now' disabled = {check}>Apply Now</button>
        </div>
        <div className='checkbox-container'>
          <input type="checkbox" onChange={boxClick}></input>
          <label className='consent-label'>You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
        </div>
      </div>
      <div className='uni-img'>
      </div>
    </div>
  );
}

export default Header;
