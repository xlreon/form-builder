import React from 'react';
import { connect } from 'react-redux';

class LabelInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: this.getEditState(),
            text: this.getLabel()
        }
    }

    getEditState = () => {
        var edit = true
        if(this.props.formData !== undefined) {
            this.props.formData.map((ele,ind) => {
                if(ind === this.props.radioIndex) {
                    ele.value.map((e) => {
                        if (e.label===this.props.labelIndex && e.value !== "") {
                            edit = false
                        }
                    })
                }
            })
        }
        return edit
    }

    getLabel = () => {
        var label = ""
        if(this.props.formData !== undefined) {
            this.props.formData.map((ele,ind) => {
                if(ind === this.props.radioIndex) {
                    ele.value.map((e) => {
                        if (e.label===this.props.labelIndex) {
                            label = e.value
                        }
                    })
                }
            })
        } 
        return label
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

const mapStateToProps = state => ({
    formData: state.formData
});

export default connect(mapStateToProps)(LabelInput)