import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import Button from 'react-bootstrap/Button';

export default function IconMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    showMenu
    ?
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem onClick={() => setShowMenu(false)}>
          <ListItemIcon>
            <ContentCut fontSize="small" style={{color: "red"}} />
          </ListItemIcon>
          <ListItemText>Вырезать</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => setShowMenu(false)}>
          <ListItemIcon>
            <ContentCopy fontSize="small" style={{color: "blue"}} />
          </ListItemIcon>
          <ListItemText>Копировать</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem onClick={() => setShowMenu(false)}>
          <ListItemIcon>
            <ContentPaste fontSize="small" style={{color: "#ff9800"}} />
          </ListItemIcon>
          <ListItemText>Вставить</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setShowMenu(false)}>
          <ListItemIcon>
            <Cloud fontSize="small" style={{color: "#03a9f4"}} />
          </ListItemIcon>
          <ListItemText>Веб-буфер обмена</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
    : 
    <Button variant="outline-primary" onClick={() => setShowMenu(true)}>Открыть меню</Button>    
  );
}
