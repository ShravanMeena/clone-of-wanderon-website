import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';



export default class Banner extends Component {



    render() {
        return (
      <header class="header">
      <div class="header__logo-box">
      <div class="header__logo-box-start">
        <img class="header__logo" src="https://www.wanderon.in/wanderon-logo.svg" alt="Logo" />
        </div>

      <div class="header__logo-box-mid">
        <img src="https://www.wanderon.in/svg/nav/phone.svg" alt="phone" />
          <h1>+91-8887756502</h1>
        </div>

      <div class="header__logo-box-last">
          <h1>TRENDING TRIPS</h1>
          <h1>WORKCATIONS</h1>
          <h1>BLOGS</h1>
        </div>
      </div>

      <div class="header__text-box">
        <h1 >
         India's Coolest Travel Community
        </h1>
        <p> 
          <Typewriter
        options={{
    strings: [' Spreading Happiness', ' Connecting People'," Creating Memories"," Creating Stories"," Fulfilling Adventure"],
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter.typeString()
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .deleteAll()
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
  }}
/>
</p>

        <div className="header__text-box-inputContainer">
          <input placeholder="Where do you wanna go?"/>
          <div className="header__text-box-inputContainer-imgConatiner">
            <img src="https://www.wanderon.in/svg/search.svg" alt="phone" />
          </div>
          </div>
          <div>

{/* card */}
 <div className="header__text-box-card_container">
            <div className="header__text-box-card_container--inner">
             {this.props.data.map((item,index) =>{return(
                    <div key={index} className="header__text-box-card_container--inner-card">
                        <img src={item.url} alt="item"/>
                        <h1>5000+</h1>
                        <h1>{item.title}</h1>
                    </div>
                )})}
                </div>
               
            </div>
        </div>
      </div>
    </header>
        )
    }
}
