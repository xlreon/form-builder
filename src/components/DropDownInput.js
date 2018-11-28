import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuControl from './MenuControl';

class DropDownInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0,
            current: 0,
            fields: [],
            menuValue: "",
            selected: 0
        }
    }

    handleChange = (event) => {
        let val = parseInt(event.target.value)
        this.setState({number: val < 0 ? 0 : val})
    }

    handleMenu = (event) => {
        this.setState({menuValue: event.target.value})
    }

    handleMenuChange = (event) => {
        this.setState({selected: parseInt(event.target.value)})
    }

    onEnter = (event) => {
        if (event.keyCode == 13)
            this.setState({current: 1})
    }

    onAddMenu = (event) => {
        if(event.keyCode == 13)
        {
            if (this.state.fields.length == this.state.number-1) {
                this.setState({fields: this.state.fields.concat([this.state.menuValue]),menuValue: "",current: 2})
            }
            else {
                this.setState({fields: this.state.fields.concat([this.state.menuValue]),menuValue: ""})
            }
        }
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
                var pl = "Enter " + (this.state.fields.length + 1) + " Menu item and press enter"
                return (
                        <TextField
                        label={pl}
                        name="text"
                        margin="normal"
                        value={this.state.menuValue}
                        onChange={this.handleMenu}
                        onKeyDown={this.onAddMenu}
                        id="textInput"
                        /> 
                        )
            case 2:
                return this.generateMenu(this.state.number)
            default:
                    return
        }
    }

    generateMenu = (number) => {
        
        var fields = []
        for(var i=0;i<number;i++) {
            fields.push(<option
                        value={i}
                        style={{width: '5vh',height: '3vh', fontSize: '20px'}}
                        >
                            {this.state.fields[i]}
                        </option>)
        }
        
        return (
            <Select
            value={this.state.selected}
            onChange={this.handleMenuChange}
            style={{fontSize: '20px'}}
            >
                {fields.map(item => item)}
            </Select>
        ); 
    }

    render() {
        return (
            <div className="textBox">
            {/* <MenuControl visibility={this.state.current == 2 ? true : false}/> */}
                {this.getCurrent(this.state.current)}
            </div>
        );
    }
}

export default DropDownInput;