import {useState} from "react";

const Square = ({ colour }) => {
    let [clicked, setClicked] = useState(false);

    const updateClicked = () => setClicked(!clicked);

    let divStyleOn = {
        height: "200px",
        width: "200px",
        backgroundColor: colour
    }

    let divStyleOff = {
        height: "200px",
        width: "200px",
        backgroundColor: "green"
    }

    return <div onClick={updateClicked} style={clicked ? divStyleOn : divStyleOff}></div>
}

export default Square;