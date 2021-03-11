import {useState} from "react";

const Counter = ({ initial, max }) => {
    let [counter, setCounter] = useState(initial);

    let lessThanMax = () => counter < max ? 1 : 0;
    let greaterThanZero = () => counter > 0 ? 1 : 0;

    const updateCounterAdd = () => setCounter(counter + +lessThanMax());
    const updateCounterMinus = () => setCounter(counter - +greaterThanZero());

    return (
        <div>
            <p>{counter}</p>
            <button onClick={updateCounterAdd}>+</button>
            <button onClick={updateCounterMinus}>-</button>
        </div>
    )
}

export default Counter;