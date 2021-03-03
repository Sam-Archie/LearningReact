import { Component } from "react";

class Length extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value : "",
            
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) 
    {
        this.setState({value : e.currentTarget.value})
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