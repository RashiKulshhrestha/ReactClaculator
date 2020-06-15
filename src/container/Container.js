import React from 'react';
import Keypad from '../keypad/Keypad';
import './Container.css';
import Result from '../display/Result';

class Container extends React.Component{
    constructor(){
        super();

        this.state = {
            result: "0"
        }
    }
    
    onClick = button => {
        this.PlaySound()
        if(button === "="){
            this.calculate()
        }

        else if(button === "AC"){
            this.reset()
        }
        else if(button === "C"){
            this.backspace()
        }

        else {
            if(this.state.result === "0"){
            this.setState({
                result:button
            })
        }
        else{
            this.setState({
                result: this.state.result + button
            })
        }
        }
    };


    calculate = () => {
        try {
            this.setState({
                result: ((eval(this.state.result)).toFixed(4) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: "0"
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
            
        })
    };
    PlaySound = () =>{
        var audio = new Audio("https://www.soundjay.com/button/button-50.mp3");
        audio.play();
    };
    render(){
        return(
            <main className = "container">
                <Result result={this.state.result}/>
                <Keypad onClick={this.onClick}/>
            </main>    
        );
    }
}

export default Container;