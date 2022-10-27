

const DisplayEntries = (props) => {
    return ( 
    <table className="table">
        <tbody>
           <tr>
            {props.parentEntries.map((entry)=> {
              return (
                <tr>
                    <tr><td>{entry.Name}</td></tr>
                    <tr><td>{entry.Post}</td></tr>
                    <tr>
                        <button type="submit">Like</button>
                        <button type="submit" onclick="myFunction(this, 'red')">Dislike</button>
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