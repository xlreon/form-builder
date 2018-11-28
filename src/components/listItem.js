import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function ButtonItem(props) {
    return (
            <div>
                <ListItem draggable type="button" data="button">
                    <ListItemText primary={props.itemName}/>
                </ListItem>
                <Divider />
            </div>
    );
}

export default ButtonItem