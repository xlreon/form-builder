import React from 'react';

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
                    <input 
                        placeholder="Enter Text" 
                        value={this.state.text}
                        onChange={this.handleChange}
                        onKeyDown={this.onEnter}
                        size="35"
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