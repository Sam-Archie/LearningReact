import {useState} from "react";

const Clicked = () => {
    
    let [clicked, setClicked] = useState(false);

    const updateClicked = () => setClicked(clicked = true);

    return <p onClick={updateClicked}>{clicked ? "Clicked" : "Not Clicked"}</p>
}

export default Clicked;
