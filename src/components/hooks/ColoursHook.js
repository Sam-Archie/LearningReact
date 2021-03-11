import {useState} from "react";

const Colours = ({colours}) => {
    
    let [counter, setCounter] = useState(0);

    const handleClick = () => setCounter((counter + 1) % colourData.length);

    let colourData = colours;

    console.log(colourData);

    let style={
        height : "200px",
        width: "200px",
        backgroundColor: `${colourData[counter]}`
    }

    return <div>
        <div onClick={handleClick} style={style}></div>
    </div>
}

export default Colours;