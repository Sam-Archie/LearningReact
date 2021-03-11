import {useState} from "react";

const List = () => {

    let [list, setList] = useState([]);
    let [listItem, setListItem] = useState("");

    const handleChange = (e) => setListItem(e.currentTarget.value);

    const handleClick = () => setList([...list, listItem], setListItem(""));

    return <div>
        <input onChange={handleChange} value={listItem}></input>
        <button onClick={handleClick}>Add</button>
        
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        
    </div>
}

export default List;