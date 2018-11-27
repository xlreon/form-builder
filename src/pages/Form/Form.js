import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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

function Form(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
        <h1>Test Form</h1>
    </Card>
  );
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);