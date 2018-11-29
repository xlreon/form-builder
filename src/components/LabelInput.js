import React from 'react';
import { connect } from 'react-redux';

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
            this.props.dispatch({type: "UPDATELABEL",labelIndex: this.props.labelIndex,radioIndex: this.props.radioIndex,labelValue: this.state.text})
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

export default connect()(LabelInput)