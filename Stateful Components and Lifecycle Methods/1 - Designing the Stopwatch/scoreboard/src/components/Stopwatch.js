import React, { Component } from 'react';

/*
    * Stop watch has 3 states:
    ? 1.) running state
    ? 2.) Elapsed time state
    ? 3.) previous time state
*/

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    };
    
    // this method is imediately called after a component is inserted or mounted into the DOM
    componentDidMount() {
        //console.log('The stopwatch mounted');

        // Below is a JS method that repetedly executes code with a fixed time delay between each call,
        // and returns an interval ID, which uniquely identifies the interval
     
        this.intervalId = setInterval(() => this.tick(), 100); // 100 miliseconds
    }

    //handles memory leaks. This is invoked right before a component instance is destroyed
    componentWillUnmount() {
        //cancels timed repeating actions created by calling setInterval
        clearInterval(this.intervalId);
    }

    // makes clock tick second after second
    tick = () => {
        //console.log('ticking...');
        if(this.state.isRunning){
            const currentTime = Date.now();
            this.setState( prevState => ({
                previousTime: currentTime,
                elapsedTime: prevState.elapsedTime + (currentTime - this.state.previousTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            //setting isRunning to the opposite of what it currently is
            isRunning: !prevState.isRunning
        }));
        //if the ticker is not running, start running
        if (!this.state.isRunning) {
            this.setState({
                previousTime: Date.now()
            });
        }
    }

    handleReset = () => {
        this.setState({
            elapsedTime: 0
        });
    }

    render() {

        // ? If you were to do if else route:
        // let button;
        // if(this.state.isRunning){
        //     button = <button>Stop</button>
        // } else {
        //     button = <button>Start</button>
        // }

        const seconds = Math.round(Math.floor(this.state.elapsedTime) / 1000); // This convert milliseconds to seconds

        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">
                    { seconds }
                </span>
                <button onClick={this.handleStopwatch}>                    
                    { this.state.isRunning ? 'Stop' : 'Start' /* Short hand if statement, 'ternary operator' */ }
                </button>
                <button onClick={this.handleReset}>
                    Reset
                </button>
                { /* 
                    * uncomment if using if else route
                    { button } 
                    <button onClick={this.handleReset}>Reset</button>
                */ }
                
            </div>
        );
    }
}

export default Stopwatch;

/**
 *  
 * ? Component Lifecycle
    In React, every component instance follows a cycle.
    It's mounted onto the DOM, it's updated with changes in data, and finally,
    it's unmounted from the DOM.

    - React provides built in lifecycle methods that get called at each point in the lifecycle
      These act as hooks you can use to run code at key times in your components lifecycle
  * ! This gives you the ability to control what happens when a component mounts, updates and unmounts

  ** - The life cycle you'll mostly use is componentDidMount()
 */