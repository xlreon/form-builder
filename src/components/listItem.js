import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class ButtonItem extends React.Component {
    
    onDragStart = (event, itemName) => {
        console.log(itemName)
        event.dataTransfer.setData("itemName",itemName)
    }

    render() {
        const { itemName } = this.props
        return (
                <div>
                    <ListItem 
                        draggable 
                        type="button" 
                        data="button"
                        onDragStart={(e) => this.onDragStart(e, itemName)}
                        >
                        <ListItemText primary={itemName}/>
                    </ListItem>
                    <Divider />
                </div>
        );
    }

}

export default ButtonItem