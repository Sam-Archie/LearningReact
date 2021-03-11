import {useState} from "react";

const PasswordStrength = () => {

    let [password, setPassword] = useState("");

    let handleChange = (e) => setPassword(e.currentTarget.value);
    
    const strength = (password) => {
        if (password.length < 9 ) {
            return "red";
        }
        else if (password.length < 16) {
            return "orange";
        }
        else {
            return "green";
        };
    }

    return <div>
        <label>Password</label>
        <input id="password" name="password" type="password" onChange={handleChange} value={password} style={{backgroundColor: strength(password)}}/>
    </div>

}

export default PasswordStrength;