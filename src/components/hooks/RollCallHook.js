import {useState} from "react";

const RollCall = ({names}) => {
    let [name, setName] = useState(0);
    let handleClick = () => setName((name + 1) % names.length);

    return (

        <div>
            <p>{names[name]}</p>
            <button
                className="btn btn-primary"
                onClick={handleClick}
                >Next
            </button>
        </div>
    )
}

export default RollCall;