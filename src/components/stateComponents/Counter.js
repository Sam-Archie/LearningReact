import { Component } from "react";

class Counter extends Component
{
    constructor(props)
    {
        super(props);

        let {initial} = this.props;
        this.state = {
            counter : initial,
        }

        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickMinus = this.handleClickMinus.bind(this);
    }

    handleClickAdd()
    {
        let currentValue = this.state.counter;

        let {max} = this.props;

        if (currentValue < max) {

            this.setState({counter: currentValue + 1});
        } 

    }

    handleClickMinus()
    {
        let currentValue = this.state.counter;

        if (currentValue > 0) {
            this.setState({counter: currentValue - 1});
        }
    }

    render()
    {
       return (<section>
            <p>{this.state.counter}</p>
            <button class="btn btn-primary m-2" onClick={this.handleClickAdd}>+</button>
            <button class="btn btn-primary m-2" onClick={this.handleClickMinus}>-</button>
        </section>
       )
    }


}

    export default Counter;