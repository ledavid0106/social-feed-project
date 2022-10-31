import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';
import "./App.css"
import NavBar from './Components/NavBar/NavBar';

function App() {

  const [entries, setEntries] = useState([{Name:"David", Post: "Second  Sky!"}
  ])

  function addNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);


  }

  return (
    <div className="container-fluid">
      <NavBar/>
      <div className="center">
         <div className="col-md-6">
            <div className="border-box">
              <AddEntryForm addNewEntryProperty={addNewEntry}/>
            </div>
            <div className="border-box">
              <DisplayEntries parentEntries={entries}/>

            </div>
         </div>
      </div>


    </div>
  );
}

export default App;
