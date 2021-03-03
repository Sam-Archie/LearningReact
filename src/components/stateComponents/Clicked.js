import {Component} from "react";

class Clicked extends Component
{
    constructor(props) {

        super(props);
        
        this.state = {
            isClicked : false,        
        };

        this.handleClick = this.handleClick.bind(this);
    }
        handleClick() {

            let currentState = this.state.isClicked;

            this.setState({isClicked : !currentState})
            
        }
        
        render() {
            let {isClicked} = this.state;

            return (
                <button class="btn btn-primary" onClick={this.handleClick}>{isClicked ? "Clicked" : "Not clicked"}</button>
            )
        }

}
export default Clicked;