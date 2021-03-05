import { Component } from "react";

class Transform extends Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            number : 0
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e)
    {
        this.setState({number: e.currentTarget.value});
    }

  

    render()
    {
        const {number} = this.state;
        const fn = this.props.transform;
        return (
            <section>
                <input onChange={this.handleChange} value={number}/>
                <p className="lead">{fn(+number)}</p>
            </section>
        )
    }
}

export default Transform;