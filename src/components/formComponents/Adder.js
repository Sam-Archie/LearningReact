import { Component } from "react";


class Adder extends Component
{
    constructor()
    {
        super();

        this.state = {
            numberList : [],
            number : 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleChange(e)
    {
        this.setState({number : e.currentTarget.value});
    }

    handleClick()
    {
        const {numberList, number} = this.state;
        this.setState({numberList: [...numberList, number], number: 0});
    }

    render()
    {
        const {numberList, number} = this.state;

        return (
            <section>
                <input onChange={this.handleChange} value={number}></input>
                <button onClick={this.handleClick}>ADD</button>
                <ul>
                    {numberList.map((value, index) => (
                        <li className="list-group-item" key={index}>{value}</li>
                    ))}
                </ul>
                <p>
                    {numberList.reduce((acc, current) => {
                        return acc += +current;
                    }, 0)}
                </p>
            </section>
        )
    }
}


export default Adder;

