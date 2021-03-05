import { Component } from "react";

class Length extends Component
{
    constructor()
    {
        super();
        this.state = {
            value : "",
            
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) 
    {
        const newState = {
            value : e.currentTarget.value
        };

        this.setState(newState);
    }

    render()
    {
        const {value} = this.state;

        return (
            <form>
                <input onChange={ this.handleChange } value={value}/>
                <p>{value.length}</p>
            </form>
        );
    };
}



export default Length;