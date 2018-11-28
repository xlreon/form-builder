import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Draggable } from 'react-drag-and-drop'

function ButtonItem(props) {
    return (
        <Draggable>
            <ListItem type="button" data="button">
                <ListItemText primary="Button" />
            </ListItem>
        </Draggable>
    );
}

export default ButtonItem