import React from 'react';
import Button from '@material-ui/core/Button';

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
        } 
    }

    render() {
        return (
            <div className="buttonInput">
                <Button variant="contained" color="primary" style={{marginTop: '6vh'}}>
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

export default ButtonInput;