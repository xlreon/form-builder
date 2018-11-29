import React from 'react';
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import LabelInput from './LabelInput';
import MenuControl from './MenuControl';
import { connect } from 'react-redux';

class RadioInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            current: 0,
            isEdit: true,
            label: "Male",
            selected: 0
        }
    }

    handleChange = (event) => {
        let val = parseInt(event.target.value)
        this.setState({number: val < 0 ? 0 : val})
    }

    handleRadio = (event) => {
        this.setState({selected: parseInt(event.target.value)})
    }

    onEnter = (event) => {
        if (event.keyCode == 13)
        {
            this.setState({current: 1})
            this.props.dispatch({type: "SETITEM", item: "Radio", data: {item: "Radio",value: this.generateRadioData(this.state.number)}})
        }
        
    }

    generateRadioData = (number) => {
        var labelArr = []
        for(var i=0;i<number;i++) {
            labelArr.push({label: i,value: ""})
        }
        return labelArr;
    }

    getCurrent = (current) => {
        switch (current) {
            case 0:
                return (
                    <TextField
                    label="Enter How many in group and press enter"
                    name="text"
                    margin="normal"
                    type="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                    onKeyDown={this.onEnter}
                    id="textInput"
                    />
                );
            case 1:
                return this.generateRadio(this.state.number)
            default:
                    return
        }
    }

    generateRadio = (number) => {
        
        var fields = []
        for(var i=0;i<number;i++) {
            console.log(i)
            fields.push(<FormControlLabel
                        value={i}
                        style={{width: '3vh'}}
                        control={<Radio color="primary" />}
                        label={<LabelInput radioIndex={this.props.index} labelIndex={i}/>} />)
        }
        
        return (
            <RadioGroup
            value={this.state.selected}
            onChange={this.handleRadio}
            >
                {fields.map(item => item)}
            </RadioGroup>
        ); 
    }

    render() {
        return (
            <div className="textBox">
                <MenuControl 
                    id="menuBox" 
                    visibility={this.state.current === 1 ? true : false}
                    index={this.props.index}
                    />
                {this.getCurrent(this.state.current)}
            </div>
        );
    }
}

export default connect()(RadioInput);