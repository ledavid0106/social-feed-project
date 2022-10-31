import "./DisplayEntries.css"
import React, { useState } from 'react';
import CustomButton from "./CustomButton/CustomButton";
import DislikeButton
 from "./DislikeButton/DislikeButton";
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
                      <CustomButton message="Like"/>
                      <DislikeButton message="Dislike"/>
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


