import { Component } from "react";

class List extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            listItems : [],
            value: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        const {listItems, value} = this.state;

        this.setState({listItems : [...listItems, value], value: ""});
    }

    handleChange(e)
    {

        this.setState({value : e.currentTarget.value});
    }

    render()
    {
        const {value, listItems} = this.state;

        return (<section>
            <input onChange={this.handleChange} value={value}/>
            <button onClick={this.handleClick}>Click to ADD</button>
            <ul>
                {listItems.map((value, index) => (
                    <li className="list-group-item" key={index}>{value}</li> 
                ))}
            </ul>
        </section>)
    }
}


export default List;
