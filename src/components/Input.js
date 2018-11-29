import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuControl from './MenuControl';
import { connect } from 'react-redux';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.getText(),
            isEdit: this.getEditState(),
            value: ""
        }
    }

    getEditState = () => {
        var edit = true
        if(this.props.formData !== undefined) {
            this.props.formData.map((ele,ind) => {
                if(ind === this.props.index) {
                    edit = false
                }
            })
        }
        return edit
    }

    getText = () => {
        var val = ""
        if (this.props.formData !== undefined)
            this.props.formData.map((ele,index) => {
                if (index === this.props.index) {
                    val = ele.value
                }
            })
        return val
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    handleValue = (event) => {
        this.setState({value: event.target.value})
    }

    onEnter = (event) => {
        if (event.keyCode == 13)
        {
            this.setState({isEdit: false})
            this.props.dispatch({type: "SETITEM", item: "Input", data: {item: "Input",value: this.state.text}})
        }
    }
    render() {
        return (
            <div className="textBox">
                { this.state.isEdit 
                    ?
                    <TextField
                    label="Enter Input placeholder and press enter"
                    name="input"
                    margin="normal"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyDown={this.onEnter}
                    id="textInput"
                    />
                    :
                    <input 
                        placeholder={this.state.text}
                        size="35"
                        id="textInput"
                        value={this.state.value}
                        onChange={this.handleValue}
                        />
                }
                <MenuControl 
                    id="menuBox" 
                    visibility={!this.state.isEdit}
                    index={this.props.index}
                    />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shouldRender: state.shouldRender,
    formData: state.formData
});

export default connect(mapStateToProps)(Input)