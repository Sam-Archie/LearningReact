import { Component } from "react";

class ToggleText extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            clicked : false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        let currentState = this.state.clicked;

        this.setState({clicked : !currentState})
    }

    render()
    {
        let {clicked} = this.state;

        let {initial, alternate} = this.props;


        return (<section>
                <p>{!clicked ? initial : alternate}</p>
                <button className="btn primary" onClick={this.handleClick}>ClickMe</button>
            </section>
        )
    }
}

export default ToggleText;