import React, { Component } from 'react';

// ! Maybe you could copy the following code if you ever wanted to create a form in React?

class AddPlayerForm extends Component {

    state = {
        value: ''
    };
    
    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        // this prevents the forms default behavior
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        //sets form back to an empty string
        this.setState({value: ''});
    }

    render() {
        console.log(this.state.value);
        return (
            // the onSubmit event will execute our custom handleSubmit function when submitting
            <form onSubmit={this.handleSubmit}>
            {/* NOTE: JSX requires a self closing tag for input elements */}
                <input
                    type="text"
                    value={this.state.value}
                    // the onChange event gets triggered after each change, like when a user types into the feield
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name"                    
                />

                <input
                    type="submit"
                    value="Add Player"
                />
            </form>
        );
    }
}

export default AddPlayerForm;

/**
 * In React form elements naturally keep some internal state
 */