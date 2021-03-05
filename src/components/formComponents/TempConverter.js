import { Component } from "react";

class TempConverter extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            celsius : 0,
            farenheit : 0
        }

        this.handleCelsius = this.handleCelsius.bind(this);
        this.handleFarenheit = this.handleFarenheit.bind(this);
    }

    handleCelsius(e)
    {

        let convertCelsius = (e.currentTarget.value * 1.8) + 32; 
        this.setState({farenheit: convertCelsius, celsius: e.currentTarget.value})
    }

    handleFarenheit(e)
    {
   
        let convertFarenheit = (e.currentTarget.value -32) / 1.8;
        this.setState({celsius: convertFarenheit, farenheit: e.currentTarget.value});
    }


    render()
    {
        const {celsius, farenheit} = this.state;
       return ( <section>
        <input className="form-control" onChange={this.handleCelsius} value={celsius}/>
        <input  className="form-control" onChange={this.handleFarenheit} value={farenheit}/>
    </section>)
    }
    
} 


export default TempConverter;