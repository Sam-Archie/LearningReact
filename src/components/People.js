


const People = ({names}) => (
    <ul>
        {!names ? <li>"Nothing to see here"</li> : names.map((value, index) => (
           <li className="list-group-item" key={index}>{value}</li> 
        ))}
    </ul>

);
People.defaultprop = ["Nothing to see here"];

export default People;