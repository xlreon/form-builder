import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuControl from './MenuControl';
import { connect } from 'react-redux';

class DropDownInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: this.getMenuCount(),
            current: this.getCur(),
            fields: this.getField(),
            menuValue: "",
            selected: 0
        }
    }

    getMenuCount = () => {
        var num = 0
        if(this.props.formData !== undefined) {
            this.props.formData.map((ele,ind) => {
                if(ind === this.props.index) {
                    num = ele.value.length
                }
            })
        } 
        return num
    }

    getCur = () => {
        var curr = 0
        if(this.props.formData !== undefined) {
            this.props.formData.map((ele,ind) => {
                if(ind === this.props.index) {
                    curr = 2
                }
            })
        }
        return curr
    }

    getField = () => {
        var fd = []
        if(this.props.formData !== undefined) {
            this.props.formData.map((ele,ind) => {
                if(ind === this.props.index) {
                    ele.value.map((e) => {
                        fd.push(e.value)
                    })
                }
            })
        }
        return fd
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
            console.log(this.state.fields)
            if (this.state.fields.length !== this.state.number) {
                this.state.fields.push(this.state.menuValue)
                this.setState({menuValue: "",current: 1})
            }
            this.setState({menuValue: "",current: 2})
            this.props.dispatch({type: "SETITEM", item: "DropDown", data: {item: "DropDown",value: this.generateDropDownData(this.state.number)}})
        }
    }

    generateDropDownData = (number) => {
        var fieldArr = []
        this.state.fields.map((ele,index) => {
            fieldArr.push({id: index,value: ele})
        })
        return fieldArr;
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
            <MenuControl 
                id="menuBox" 
                visibility={this.state.current === 2 ? true : false}
                index={this.props.index}
                />
                {this.getCurrent(this.state.current)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    formData: state.formData
});

export default connect(mapStateToProps)(DropDownInput);