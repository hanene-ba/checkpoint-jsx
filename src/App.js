import './style.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from './imageInSrc.jpg';

export default App;

function Appl() {
return <img src = {myImage}/>
  }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
 
<div style={{
      border:'solid 1px black',
      maxWidth: 100,
  }}>  
 
 <h1 className = {'titleRed'}> Hanene Ben Ameur </h1>
 
         <Text>{`Hi~\n je veux retourner en ligne.`}</Text>  

          {'\ n'} 
<img src='/imageInPublic.jpg'/> 
</div>  
<video id="background-video"  width="320" height="240" controls >
    <source src="myVideo.mp4" type="video/mp4"/>
</video>
);
}