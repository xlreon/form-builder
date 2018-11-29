import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ButtonIcn from '@material-ui/icons/CropLandscape';
import RadioButton from '@material-ui/icons/RadioButtonChecked';
import DropDown from '@material-ui/icons/ArrowDropDownCircle';
import Input from '@material-ui/icons/Input';
import Text from '@material-ui/icons/TextFormat';

class ButtonItem extends React.Component {
    
    onDragStart = (event, itemName) => {
        event.dataTransfer.setData("itemName",itemName)
    }

    getButton = (itemName) => {
        switch(itemName)
            {
                case 'Button': return <ButtonIcn/>
                case 'Text' : return <Text />
                case 'Input': return <Input />
                case 'Radio': return <RadioButton/>
                case 'Drop Down': return <DropDown />
                default:
                    return
            }
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
                        <ListItemIcon>
                        { 
                            this.getButton(itemName)
                        }
                        </ListItemIcon>
                        <ListItemText primary={itemName}/>
                    </ListItem>
                    <Divider />
                </div>
        );
    }

}

export default ButtonItem