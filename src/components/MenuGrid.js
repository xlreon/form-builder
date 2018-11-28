import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuControl from './MenuControl';

class MenuGrid extends React.Component {

    render() {
        return (
            <div>
                {this.props.child}
            </div>
        );
    }
}
export default MenuGrid;