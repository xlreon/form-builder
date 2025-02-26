import React from 'react';
import Fab from '@material-ui/core/Fab';
import UpIcon from '@material-ui/icons/ExpandLess';
import DownIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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

    handleDelete = () => {
        this.props.dispatch({type: "DELETE",index: this.props.index})
    }

    handleDown = () => {
        this.props.dispatch({type: "DOWN",index: this.props.index})
    }

    handleUp = () => {
        this.props.dispatch({type: "UP",index: this.props.index})
    }

    render() {
        const { classes, visibility } = this.props;
        return (
            <span className={visibility ? classes.menuVisible : classes.menuGone}>
                <Fab 
                    color="secondary" 
                    aria-label="delete" 
                    className={classes.icon}
                    onClick={this.handleDelete}
                    >
                    <DeleteIcon />
                </Fab>
                <Fab 
                    color="primary" 
                    aria-label="down" 
                    className={classes.icon}
                    onClick={this.handleDown}
                    >
                    <DownIcon />
                </Fab>
                <Fab 
                    color="primary" 
                    aria-label="up" 
                    className={classes.icon}
                    onClick={this.handleUp}
                    >
                    <UpIcon />
                </Fab>
            </span>
        );
    }
}

MenuControl.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect()(MenuControl))