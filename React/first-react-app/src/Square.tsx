interface SquareProps {
    size: number;
    backgroundColor: string;
    text: string;
}

function Square({ size, backgroundColor, text }: SquareProps) {
    const divStyle = {
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid black',
        color: 'white',
        fontSize: '20px',
    };

    return <div style={divStyle}>{text}</div>;
}

export default Square;
