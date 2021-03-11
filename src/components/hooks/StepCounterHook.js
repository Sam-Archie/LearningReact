import {useState} from "react";

const StepCounter = ({ step, max }) => {
    let [counter, setStepCounter] = useState(0);

    let lessThanMax = () => counter < max ? step : 0;
    let greaterThanZero = () => counter > 0 ? step : 0;

    const updateStepCounterAdd = () => setStepCounter(counter + +lessThanMax());
    const updateStepCounterMinus = () => setStepCounter(counter - +greaterThanZero());

    return (
        <div>
            <p>{counter}</p>
            <button onClick={updateStepCounterAdd}>+</button>
            <button onClick={updateStepCounterMinus}>-</button>
        </div>
    )
}

export default StepCounter;