import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
//import Button from '@mui/material/Button';
import Button from 'react-bootstrap/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { BsInbox } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsCursor } from "react-icons/bs";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsTrash2 } from "react-icons/bs";

//type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
  //const [state, setState] = React.useState({
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    //(anchor: Anchor, open: boolean) =>
    (anchor, open) =>
    //(event: React.KeyboardEvent | React.MouseEvent) => {
    (event) => {
      if (
        event.type === 'keydown' &&
        // ((event as React.KeyboardEvent).key === 'Tab' ||
        //   (event as React.KeyboardEvent).key === 'Shift')
        (event.key === 'Tab' ||
          event.key === 'Shift')        
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  //const list = (anchor: Anchor) => (
  const list = (anchor) => (    
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[{img: <BsInbox style={{color: "blue"}} />, text: 'Входящие'}, 
          {img: <BsStar style={{color: "#faaf00"}} />, text: 'Избранное'},
          {img: <BsCursor style={{color: "green"}} />, text: 'Отправить'}, 
          {img: <BsEnvelopeOpen />, text: 'Черновики'}].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {item.img}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{img: <BsEnvelopeFill style={{color: "#03a9f4"}} />, text: 'Вся почта'}, 
          {img: <BsTrash style={{color: "#000"}} />, text: 'Удаленные'}, 
          {img: <BsTrash2 style={{color: "red"}} />, text: 'Спам'}].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                {item.img}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => ( */}
      {(['left']).map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Button variant="outline-primary" onClick={toggleDrawer(anchor, true)}>Открыть Drawer</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}