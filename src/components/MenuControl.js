import React from 'react';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/ExpandLess';
import DownIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    icon: {
        width: '4vh',
        height: '4vh',
        marginBottom: '1em',
        float: 'right',
        marginRight: '0.5em'
    },
    menuGone: {
        visibility: "hidden"
    },
    menuVisible: {
        visibility: "visible" 
    }
}

class MenuControl extends React.Component {

    render() {
        const { classes, visibility } = this.props;
        console.log(visibility)
        return (
            <span className={visibility ? classes.menuVisible : classes.menuGone}>
                <Fab color="secondary" aria-label="delete" className={classes.icon}>
                    <DeleteIcon />
                </Fab>
                <Fab color="primary" aria-label="down" className={classes.icon}>
                    <DownIcon />
                </Fab>
                <Fab color="primary" aria-label="up" className={classes.icon}>
                    <UpIcon />
                </Fab>
            </span>
        );
    }
}

MenuControl.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuControl)