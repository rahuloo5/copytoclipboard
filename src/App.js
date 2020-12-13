import React,{useState} from 'react'
import './App.css';
import copy from "copy-to-clipboard";

function App() {
  const [input ,setInput] = useState("");

  const handleInput=(e)=>{

    setInput(e.target.value)
  }
  
const hadnleCopy=()=>{
  copy(input)
}


  return (
    <div className="App">
      <h1>text</h1>
      <textarea value={input} onChange={handleInput}>

      </textarea>

      <button  onClick={hadnleCopy} >
        copy to clipboard
        </button>
    
    </div>
  );
}

export default App;
