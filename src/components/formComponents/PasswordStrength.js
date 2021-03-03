import { Component } from "react";



class PasswordStrength extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            value : "",
        }

        this.passwordStyling = this.passwordStyling.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e)
    {   
        this.setState({ value : e.currentTarget.value})

    }


    passwordStyling()
    {
        const {value} = this.state;
            if (value.length < 9) {
                return {backgroundColor: "red"};
            }
            else if (value.length < 16) {
                return {backgroundColor: "orange"};
            }
            else {
                return {backgroundColor: "green"};
            }

    }

    render()
    {
        const {value} = this.state;
        return (
            <form>
                <input style={ this.passwordStyling() } onChange={ this.handleChange } value={value} type="password"/>
            </form>
        );
    }
}

export default PasswordStrength;