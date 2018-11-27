import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    height: '100%',
    backgroundColor: theme.palette.background.paper
  },
});

function LeftPane(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem>
          <ListItemText primary="Text" />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

LeftPane.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftPane);