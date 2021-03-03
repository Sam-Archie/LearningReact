import { Component } from "react";

class CatchMeIfYouCan extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            position : 0
        }

        this.jump = this.jump.bind(this);
    }

    jump()
    {
        let {jump} = this.props;

        let currentPosition = this.state.position;

        this.setState({position: currentPosition += jump});
    }

    render()
    {
        let {position} = this.state;
    
        return (
                <button className="btn primary" onClick={this.jump} style={{transform: `translateY(${position}px)`, color:"white", backgroundColor:"red"}}>Click Jump</button>
           
        )
    }
}


export default CatchMeIfYouCan;
