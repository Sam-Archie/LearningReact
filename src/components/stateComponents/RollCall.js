import { Component } from "react";

class RollCall extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            index : 0 
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        const {index} = this.state;

        const {names} = this.props;

        this.setState({index : (index + 1) % names.length});
    }

    render()
    {
        const {names} = this.props;

        const {index} = this.state;
        return( 
            <section>
                <button className="btn btn-primary m-2" onClick={this.handleClick}>I Show Names</button>
                <p>{names[index]}</p>     
            </section>
        )
    }
}



export default RollCall;

// names.filter(name => name[currentName])