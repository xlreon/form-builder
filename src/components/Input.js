import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            isEdit: true,
            value: ""
        }
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    handleValue = (event) => {
        this.setState({value: event.target.value})
    }

    onEnter = (event) => {
        if (event.keyCode == 13)
            this.setState({isEdit: false})
    }
    render() {
        return (
            <div className="textBox">
                { this.state.isEdit 
                    ?
                    <input 
                        placeholder="Enter Input PlaceHolder" 
                        value={this.state.text}
                        onChange={this.handleChange}
                        onKeyDown={this.onEnter}
                        size="35"
                        id="textInput"
                        />
                    :
                    <input 
                        placeholder={this.state.text}
                        size="35"
                        id="textName"
                        value={this.state.value}
                        onChange={this.handleValue}
                        />
                }
            </div>
        );
    }
}

export default Input