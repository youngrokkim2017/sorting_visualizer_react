import React from 'react';
import './SortingVisualizer.css';

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];

        for (let i = 0; i < 240; i ++) {
            array.push(randomInt(5, 456));
        }

        this.setState({ array });
    }

    render() {
        const { array } = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                        className="array-bar" 
                        key={idx} 
                        style={{height: `${value}px`}}
                    />
                ))}
            </div>
        )
    }
}

export default SortingVisualizer;