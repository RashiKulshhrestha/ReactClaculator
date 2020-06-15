import React, {Component} from 'react';
import './Display.css';

class Result extends Component {


    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default Result;