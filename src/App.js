import React, {useState } from 'react'
import './App.css';
// import Textbox from './components/Textbox';
import Text from './components/Text';
// import Image from './components/Image';
// import Video from './components/Video';
import Theme from './components/Theme';

function App() {
  const [text, setText] = useState('');


  return (
    <div className="App">

      <Theme />
      <h1>Notes:</h1>
      <Text/> 
      <br />
 


    </div>
  );
}

export default App;
