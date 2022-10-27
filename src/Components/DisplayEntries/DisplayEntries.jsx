

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
                </tr>
              );
            })}
           </tr>
        </tbody>
    </table>
     );
}
 
export default DisplayEntries;