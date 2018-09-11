import React, { Component } from 'react'

class AddElement extends Component {
    state = {
        name : null,
        color : null,
        strength : null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.addElement(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' onChange={this.handleChange} />

                    <label htmlFor='color'>Color:</label>
                    <input type='text' id='color' onChange={this.handleChange} />

                    <label htmlFor='strength'>Strength(number):</label>
                    <input type='text' id='strength' onChange={this.handleChange} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddElement;