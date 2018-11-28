import React from 'react';

class LabelInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: true,
            text: ""
        }
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    onEnter = (event) => {
        if(event.keyCode == 13) {
            this.setState({isEdit: false})
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.isEdit 
                        ? 
                            <input 
                            placeholder="Enter Label"
                            value={this.state.text}
                            onChange={this.handleChange}
                            onKeyDown={this.onEnter}
                            /> 
                        : 
                            this.state.text
                }
            </div>
        );
    }
}

export default LabelInput