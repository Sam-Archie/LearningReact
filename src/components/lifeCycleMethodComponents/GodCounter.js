import { Component } from "react";

class GodCounter extends Component
{
    constructor()
    {
        super();

        this.state = {
            counter: 0
        }

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick()
    {
        const {counter} = this.state;
        this.setState({counter: counter + 1})
    }

    componentDidMount()
    {
        window.addEventListener("click", this.handleClick);
    }

    componentWillUnmount()
    {
        window.removeEventListener("click", this.handleClick);
    }

    render()
    {
        return<></>;
    }

}

export default GodCounter;