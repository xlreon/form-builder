import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';

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

    onDrop = (data) => {
        console.log('adding')
        this.props.dispatch({type: "ADDITEM", item: "item"})
    }

    render() {
        const { classes, elements } = this.props;
        console.log(elements)
        return (
        <Card className={classes.card} onClick={this.onDrop.bind(this)}>
            {elements.map( item => {
                return <h1>{item}</h1>
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