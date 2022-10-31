import React, { useState } from 'react';
import "./AddEntryForm.css"


const AddEntryForm = (props) => {

    const [name, setName] = useState("")
    const [post, setPost] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
             Name: name,
             Post: post,
        }
        props.addNewEntryProperty(newEntry)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <label>Name</label>
                        <input  type="text" value={name} onChange={(event)=>setName(event.target.value)}></input>
                    </tr>
                    <tr>
                        <label>Post</label>
                        <input  type="text" value={post} onChange={(event)=>setPost(event.target.value)}></input>  
                        <button type="submit" className="round">Create</button>   
                    </tr>
                </tbody>
            </table>
        </form>
     );
}
 
export default AddEntryForm;