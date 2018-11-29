import React from 'react';
import Button from '@material-ui/core/Button';
import MenuControl from './MenuControl';
import { connect } from 'react-redux';

class ButtonInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEdit: true,
            buttonText: ""
        }
    }

    handleChange = (event) => {
        this.setState({buttonText: event.target.value})
    }

    setButtonText = (event) => {
        if (event.keyCode == 13) {
            this.setState({isEdit: false})
            this.props.dispatch({type: "SETITEM", item: "Button", data: {item: "Button",value: this.state.buttonText}})
        } 
    }

    render() {
        return (
            <div className="textBox">
            <MenuControl 
                id="menuBox" 
                visibility={!this.state.isEdit}
                index={this.props.index}
                />
                <Button variant="contained" color="primary">
                    {
                        this.state.isEdit ? <input 
                                placeholder="Button Name" 
                                onKeyDown={this.setButtonText}
                                onChange={this.handleChange}
                                value={this.state.buttonText}
                                />
                                : 
                                this.state.buttonText
                    }
                </Button>
            </div>
        );
    }
}

export default connect()(ButtonInput);