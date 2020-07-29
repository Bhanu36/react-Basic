import React from 'react';
import './App.css';
import Main from './components/Main'

function App(props) {
  console.log(props)
  return (
    <div className="App">
       <div>
    <h1>File Upload</h1>
    <Main/>
  </div>
    </div>
  );
}

export default App;
