import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ButtonItem from '../../components/ButtonItem';

const styles = theme => ({
  root: {
    width: '40vh',
    maxWidth: 360,
    height: '100%',
    float: 'left',
    backgroundColor: theme.palette.background.paper
  },
});

function LeftPane(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ButtonItem />
        <Divider />
      </List>
    </div>
  );
}

LeftPane.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftPane);