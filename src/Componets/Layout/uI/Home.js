import React from 'react'
import "../css/button.css"
import File from "../images/file.png"
import database from "../images/database.png"
import coin from "../images/coin.png"
const Home = () => {
  return (
    <div >
      <div style={{marginTop:"50px"}}>
        <h1 className='text-center'>
          <button className='button-78 w-25' style={{fontFamily:""}}>PΛY-MIПƬ</button>
        </h1>
      </div>
      <div style={{marginTop:"50px"}}>
        <h1 className='text-center'>
        Deposit Via Minting A Digital Bank
        </h1>
      </div>
      <div className="container"  style={{marginTop:"50px"}}>
        <div className='row text-center'> 
          <div className="col-sm">
            <img  style={{width:"33%",height:"65%"}} src={File} alt="Logo" />
            <p className='my-4'> NOTE IN</p>
          </div>
          <div className="col-sm">
            <img style={{width:"45%",height:"65%"}} src={database} alt="Logo" />
            <p className='my-4'>HOLD FLAT & CRYPTO</p>
          </div>
          <div className="col-sm" >
          <img src={coin} style={{width:"40%",height:"65%"}} alt="Logo" />
          <div>
          <p className='my-4'>COIN OUT</p>
          </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:"50px"}}>
        <h1 className='text-center'>
        WITHDROW VIA DIGITAL CURRNCY EXCHANGE
        </h1>
      </div>
    </div>
  )
}

export default Home