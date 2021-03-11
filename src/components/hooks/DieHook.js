import {useState} from "react";

const DieHook = ({sides}) => {
    let [number, setNumber] = useState(1);

    const randomNumber = () => setNumber(Math.floor(Math.random() * sides) + 1);

    return <div>
            <p onClick={randomNumber}>{number}</p>
            </div>
}
export default DieHook;