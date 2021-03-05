

const Square = ({square}) => {
    
    const divStyle = {
        border: `1px solid ${square}`,
        height: "200px",
        width: "200px"
    }
    
    return <div style={divStyle}></div>
};

Square.defaultProps = {square: "red"};

export default Square;