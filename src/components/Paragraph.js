import { Component } from "react";


class Paragraph extends Component
{
    render()
    {
        let {content} = this.props;
        return (
            <p>
                {!content ? "Hello World" : content }
            </p>
        )
    }
}

export default Paragraph;

// const Paragraph = ({ content }) => (
//     <p>{!content ? "Hello World" : content }</p>
// )