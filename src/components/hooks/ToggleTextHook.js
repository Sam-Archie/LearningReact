import {useState} from "react";

const ToggleText = ({initial, alternate}) => {
    
    let [toggle, setToggle] = useState(false);

    const updateToggle = () => setToggle(!toggle);

    return <p onClick={updateToggle}>{toggle ? alternate : initial}</p>
}
export default ToggleText;