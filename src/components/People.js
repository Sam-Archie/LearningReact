
let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul>
        {names.map((value) => (
           <li>{value}</li> 
        ))}
    </ul>

);

export default People;