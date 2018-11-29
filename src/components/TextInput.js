import React from 'react';
import TextField from '@material-ui/core/TextField'
import MenuControl from './MenuControl';
import { connect } from 'react-redux';

class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.getText(),
            isEdit: this.getEditState()
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
                    if(ele !== undefined)
                        val = ele.value
                }
            })
        return val
    }

    handleChange = (event) => {
        this.setState({text: event.target.value})
    }

    onEnter = (event) => {
        if (event.keyCode == 13)
            {
                this.setState({isEdit: false})
                this.props.dispatch({type: "SETITEM", item: "Text", data: {item: "Text",value: this.state.text}})
            }

    }
    render() {
        return (
            <div className="textBox">
                { this.state.isEdit 
                    ?
                    <TextField
                    label="Enter Text"
                    name="text"
                    margin="normal"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyDown={this.onEnter}
                    id="textInput"
                    />
                    :
                    <span id="textInput">
                        { 
                            this.state.text
                        }
                    </span> 
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

export default connect(mapStateToProps)(TextInput);