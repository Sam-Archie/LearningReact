

const Square = ({color}) => {
    
    const divStyle = {
        border: `1px solid ${color}`,
        height: "200px",
        width: "200px"
    }
    
    return <div style={divStyle}></div>
};

Square.defaultProps = {color: "red"};

export default Square;