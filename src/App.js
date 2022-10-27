import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';
import AddEntryForm from './Components/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntries] = useState([{Name:"David", Post: "Second  Sky!"}
  ])

  return (
    <div >
      <nav>
        <a href="social">Social Feed</a> |
      </nav>
      <AddEntryForm />
      <DisplayEntries parentEntries={entries}/>


    </div>
  );
}

export default App;
