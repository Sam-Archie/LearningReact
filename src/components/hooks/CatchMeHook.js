import {useState} from "react";

const CatchMe = ({jump}) => {
    let [position, setPosition] = useState(0);

    const newPosition = () => setPosition(position + jump);

    return <button onClick={newPosition} style={{zIndex: "2", position: "relative", top : position}}>Jump</button>
}


export default CatchMe;