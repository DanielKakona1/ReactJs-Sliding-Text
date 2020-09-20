import React from 'react'

import './App.css'

function App() {
  return <div className="App">
    <div className="container">
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
    </div>
  </div>
}

export default App
