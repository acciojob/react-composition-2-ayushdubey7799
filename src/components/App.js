
import React from "react";
import {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);


  return (
    <div>
      <button onClick={showModal ? "" : () => setShowModal(true)}>Show Modal</button>
      {showModal && 
      <div className="model-overlay" onClick={() => setShowModal(false)}>
        <button className="model-close" onClick={() => setShowModal(false)}>Close</button>
        <p>This is the content of the modal</p>
      </div>}
    </div>
  )
}

export default App
