import {useState} from "react";

const TempConverter = () => {

    let [farenheit, setFarenheit] = useState(32);
    let [celsius, setCelsius] = useState(0);


    const handleChangeF = (e) => {
        let fn = setFarenheit(e.currentTarget.value);
        setCelsius((e.currentTarget.value -32) * (5/9));
    };
    const handleChangeC = (e) => {
        setCelsius(e.currentTarget.value);
        setFarenheit((e.currentTarget.value * 1.8) + 32);
    };

    return <div>
        <form className="mt-4 mb-4">
            <label>Farenheit</label>
            <input className="form-control" onChange={handleChangeF} value={farenheit}/>
            <label>Celsius</label>
            <input className="form-control" onChange={handleChangeC} value={celsius}/>
        </form>
    </div>
}

export default TempConverter;