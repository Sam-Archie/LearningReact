import { Component } from "react";

class StepCounter extends Component
{
    constructor(props)
    {
        super(props);

        let initial = 0;

        this.state = {
            value : initial
        }

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClickAdd()
    {
        let currentValue = this.state.value;

        let {step, max} = this.props;
        
        if (currentValue < max) {
            
            this.setState({value: currentValue + step});

        }
    }

    handleClickMinus()
    {
        let currentValue = this.state.value;

        let {step} = this.props;
        
        if (currentValue > 0) {
            
            this.setState({value: currentValue - step});
            
        }
    }

    render()
    {
        return (
            <section>
                <p>{this.state.value}</p>
                <button class="btn btn-primary m-2" onClick={this.handleClickAdd}>+</button>
                <button class="btn btn-primary m-2" onClick={this.handleClickMinus}>-</button>
            </section>
        )
    }
}

export default StepCounter;