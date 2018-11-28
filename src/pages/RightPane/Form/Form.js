import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import ButtonInput from '../../../components/ButtonInput';
import TextInput from '../../../components/TextInput';
import Input from '../../../components/Input';
import RadioInput from '../../../components/RadioInput';
import DropDownInput from '../../../components/DropDownInput';
import MenuGrid from '../../../components/MenuGrid';

const styles = {
  card: {
    minWidth: '80vh',
    height: '90vh',
    zIndex: '1',
    display: 'inline-block',
    marginTop: '2vh',
    marginBottom: '2vh',
    paddingLeft: '3.5vh',
    paddingTop: '2vh',
    textAlign: 'left'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


class Form extends React.Component {
    
    onDrop = (event) => {
        var itemName = event.dataTransfer.getData("itemName")
        this.props.dispatch({type: "ADDITEM", item: itemName})
    }

    onDragOver = (event) => {
        event.preventDefault();
    }

    itemBuilder = (itemName) => {
        console.log(itemName)
        switch(itemName) {
            case 'Button':
                return <MenuGrid child={<ButtonInput />} />
            case 'Text':
                return <MenuGrid child={<TextInput />} />
            case 'Input':
                return <MenuGrid child={<Input />} />
            case 'Radio':
                return <MenuGrid child={<RadioInput />} />
            case 'Drop Down':
                return <MenuGrid child={<DropDownInput />} />
            default:
                return <h1>{itemName}</h1>
        }

    }

    render() {
        const { classes, elements } = this.props;
        return (
        <Card
            className={classes.card} 
            onDragOver={(e) => this.onDragOver(e)}
            onDrop={(e) => this.onDrop(e)}
            >
            {/* <div style={{width: '100%',height: '100%',float: "left"}}> */}
            {elements.map( item => {
                return this.itemBuilder(item)
            })}
            {/* </div> */}
        </Card>
        );
    }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    elements: state.elements
});

export default withStyles(styles)(connect(mapStateToProps)(Form));