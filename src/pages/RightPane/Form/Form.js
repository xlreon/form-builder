import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import ButtonInput from '../../../components/ButtonInput';
import TextInput from '../../../components/TextInput';
import Input from '../../../components/Input';

const styles = {
  card: {
    minWidth: '80vh',
    height: '90vh',
    zIndex: '1',
    display: 'inline-block',
    marginTop: '2vh',
    marginBottom: '2vh'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


class Form extends React.Component {
    
    constructor(props) {
        super(props)
    }

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
                return <ButtonInput />
            case 'Text':
                return <TextInput />
            case 'Input':
                return <Input />
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
            {elements.map( item => {
                return this.itemBuilder(item)
            })}
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