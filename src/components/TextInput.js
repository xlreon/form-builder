import React from 'react';
import TextField from '@material-ui/core/TextField'

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: "",
            isEdit: true
        }
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
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
                    <TextField
                    label="Enter Text and press enter"
                    name="text"
                    margin="normal"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyDown={this.onEnter}
                    id="textInput"
                    />
                    :
                    <span id="textName">
                        { this.state.text}
                    </span> }
            </div>
        );
    }
}

export default TextInput;