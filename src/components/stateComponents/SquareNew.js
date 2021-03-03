import { Component } from "react";

class SquareNew extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            isClicked : false,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        let currentState = this.state.isClicked;

        this.setState({isClicked : !currentState})
    }

    render()
    {
        let {isClicked} = this.state;
        let {color} = this.props;

        const divStyle = {
            height: "200px",
            width: "200px"
        }
        
        return <div style={{...divStyle, border: !isClicked ?  `solid 5px ${color}` : "solid 5px green" }}
        onClick={this.handleClick}></div>
        
    }   

}


export default SquareNew;