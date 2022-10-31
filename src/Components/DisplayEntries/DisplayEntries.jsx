import "./DisplayEntries.css"

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