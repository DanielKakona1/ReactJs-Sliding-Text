import React, { useState } from 'react'

import './App.css'

function App() {

  const [line1,setLine1]= useState(true)
  const [line2,setLine2]= useState(false)
  const [line3,setLine3]= useState(false)
  const [line4,setLine4]= useState(false)

const sliderhandler = (position: number) => {
  setLine1(false)
  setLine2(false)
  setLine3(false)
  setLine4(false)
switch (position){
  case 1:
   setLine1(true)
  break;
  case 2:
    setLine2(true)
  break;
  case 3:
    setLine3(true)
  break;
  case 4:
    setLine4(true)
  break;
  default:
    setLine1(true)
}
}

const translate = line1? 'translateX(0)' :  line2 ? 'translateX(-25%)' : line3 ? 'translateX(-50%)': 'translate(-75%)'

const indicator = line1? '0px' :  line2 ? '80px' : line3 ? '160px': '240px'

  return   <div className="container">
  
      <div className="navbar">
        <div className="logo">
          <img src={require('./assets/logo.png')} alt="logo"/>
        </div>
<div className="navbarLink">
  <p >About</p>
  <p >Library</p>
  <p >Blog</p>
  <p >Contact</p>
</div>

<div className="user">
  <p>Daiel Kakona</p>
<img src={require('./assets/user.png')} alt="user"/>
</div>
      </div>
      <div className="sidebar">
        <img src={require('./assets/search.png')} alt="" className='search-icon'/>
        <div className="social-links">
          <img src={require('./assets/fb.png')} alt="icon"/>
          <img src={require('./assets/pt.png')} alt="icon"/>
          <img src={require('./assets/tw.png')} alt="icon"/>
        </div>
        <img src={require('./assets/info.png')} alt="" className='info-icon'/>
      </div>

      <div className="msg-container">
        <div className="slider" style={{
          transform:  translate
        }}>
          <div className="msg-col">
            <h1>Supervised Learning</h1>
            <p>Supervised learning is the machine learning task of learning a function that maps an input to an output based on example input-output pairs. It infers a function from labeled training data consisting of a set of training examples.</p>
            <p className='learnMore'>Learn More</p>
          </div>

          <div className="msg-col">
            <h1>Unsupervised learning</h1>
            <p>Unsupervised learning is a type of machine learning that looks for previously undetected patterns in a data set with no pre-existing labels and with a minimum of human supervision.</p>
            <p className='learnMore'>Learn More</p>
          </div>

          <div className="msg-col">
            <h1>Semi-supervised Learning</h1>
            <p>Semi-supervised machine learning is a combination of supervised and unsupervised machine learning methods. With more common supervised machine learning methods, you train a machine learning algorithm on a “labeled” dataset in which each record includes the outcome information.</p>
            <p className='learnMore'>Learn More</p>
          </div>


          <div className="msg-col">
            <h1>Reinforcement Learning</h1>
            <p>Reinforcement learning is an area of machine learning concerned with how software agents ought to take actions in an environment in order to maximize the notion of cumulative reward. Reinforcement learning is one of three basic machine learning paradigms, alongside supervised learning and unsupervised learning.</p>
            <p className='learnMore'>Learn More</p>
          </div>
        </div>
      </div>
      <div className="controller">
        <div className="line1" onClick={()=> sliderhandler(1)}></div>
        <div className="line2" onClick={()=> sliderhandler(2)}></div>
        <div className="line3" onClick={()=> sliderhandler(3)}></div>
        <div className="line4" onClick={()=> sliderhandler(4)}></div>
        <div className="active" style={{
          top: indicator
        }}></div>
      </div>
    </div>

}

export default App
