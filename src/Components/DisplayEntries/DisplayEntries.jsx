

const DisplayEntries = (props) => {
    return ( 
    <table>
        <tbody>
           <tr>
            {props.parentEntries.map((entry)=> {
              return (
                <tr>
                  <td>{entry.Name}</td>
                  <td>{entry.Post}</td>
                  <button type="submit">Like</button>
                  <button type="submit" onclick="myFunction(this, 'red')">Dislike</button>
                </tr>
              );
            })}
           </tr>
        </tbody>
    </table>
     );
}
 
export default DisplayEntries;