import "./DisplayEntries.css"
import React, { useState } from 'react';

const DisplayEntries = (props) => {
  return ( 
    <table className="table">
        <tbody >
           <tr >
            {props.parentEntries.map((entry)=> {
              return (
                <tr className="displays">
                    <tr className="postname">{entry.Name}</tr>
                    <tr className="posts">{entry.Post}</tr>
                    <tr className="like">
                      <button>Like</button>
                      <button>Disike</button>
                    </tr>
                </tr>
              );
            })}
           </tr>
        </tbody>
    </table>
     );
}
 
export default DisplayEntries;


