import React, { useState } from 'react';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries';

function App() {

  const [entries, setEntries] = useState([{Name:"David", Post: "Second  Sky!"}
  ])

  return (
    <div >
      <DisplayEntries parentEntries={entries}/>


    </div>
  );
}

export default App;
