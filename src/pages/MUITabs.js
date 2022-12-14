//import * as React from 'react';
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { BsCardList } from "react-icons/bs";
import { BsTree } from "react-icons/bs";
import { BsUiChecks } from "react-icons/bs";
import { BsUiRadiosGrid } from "react-icons/bs";
import { BsTrophy } from "react-icons/bs";
//import { Card } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataGridDemo from './MUIDataGrid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import RichObjectTreeView from './MUITreeView'
import BasicSpeedDial from './MUISpeedDial'
import TransferList from './MUITransferList'
import VerticalLinearStepper from './MUIStepper'
import IconMenu from './MUIIconMenu'
import TemporaryDrawer from './MUIDrawer'
import BasicRating from './MUIAvatarAndRating'
import fSergey from '../imgs/foto_sergey.jpg'
import fAndrey from '../imgs/foto_andrey.jpg'
import MultipleSelectCheckmarks from './MUISelectCheckmarks'

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

//function TabPanel(props: TabPanelProps) {
function TabPanel(props) {    
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/* <Typography>{children}</Typography> */}
          {children}
        </Box>
      )}
    </div>
  );
}

//function a11yProps(index: number) {
function anyProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MUITabs() {
  //const [value, setValue] = React.useState(0);
  const [value, setValue] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(true);

//   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
//     setValue(newValue);
//   };
  const handleChange = (e, newValue) => {
    if (newValue === 1) 
      setOpenSnackbar(true);
    setValue(newValue);
  };

  const handleCloseSnakbar = (e, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setOpenSnackbar(false);
  };

  const actionSnackbar = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleCloseSnakbar} />
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleCloseSnakbar}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  
  return (
    <Box sx={{ width: '100%' }}>
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnakbar}
            // message="Note archived"
            action={actionSnackbar}
            key={"topright"}
        >
        <Alert onClose={handleCloseSnakbar} severity="warning" sx={{ width: '100%' }}>
            Для Pro и Premium версий DataGrid Trial period: 30 дней!
        </Alert>
        </Snackbar>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}
        variant="scrollable" scrollButtons={true}
        aria-label="scrollable auto icon position tabs example" >
          <Tab label="Transfer List и Select Checkmarks" {...anyProps(0)}             
            icon={<BsUiChecks style={{color: "green"}} />} iconPosition="start" />
          <Tab label="Таблица (DataGrid)" {...anyProps(1)} 
            icon={<BsCardList style={{color: "blue"}} />} iconPosition="start" />
          <Tab label="Дерево (TreeView Lab) и Menu" {...anyProps(2)} 
            icon={<BsTree style={{color: "blue"}} />} iconPosition="start" />          
          <Tab label="Stepper и Speed Dial" {...anyProps(3)}             
            icon={<BsUiRadiosGrid style={{color: "red"}} />} iconPosition="start" />
          <Tab label="Avatar, Rating и Drawer" {...anyProps(4)}             
            icon={<BsTrophy style={{color: "green"}} />} iconPosition="start" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Card>
            <Card.Header>Transfer List и Select Checkmarks</Card.Header>
            <Card.Body>
                <Row>
                    <Col md={8}>
                        <TransferList />                        
                    </Col>
                    <Col md={4}>
                        <MultipleSelectCheckmarks />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
      </TabPanel>      
      <TabPanel value={value} index={1}>        
        <Row>
            <Col md={12}>
                <Alert severity="info">
                    Быстрая и расширяемая таблица данных react и DataGrid react. 
                    Это многофункциональный компонент, доступный в MIT или коммерческих версиях.
                </Alert>                
            </Col>
        </Row>
        <Card>
            <Card.Header>Таблица (MIT version)</Card.Header>
            <Card.Body>
                <DataGridDemo />
            </Card.Body>
        </Card>
        <Card>
            <Card.Header>MIT, Pro (Commercial) and Premium versions</Card.Header>
            <Card.Body>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert variant="outlined" severity="warning">
                        MIT версия предназначена для упрощения демонстрации таблицы с помощью 
                        чистой абстракции. Эта абстракция также устанавливает ограничения, 
                        которые позволяют компоненту реализовывать новые функции.
                    </Alert>
                    <Alert variant="outlined" severity="success">
                        Версия Pro (Commercial version) расширяет возможности, доступные в версии MIT, 
                        позволяя сортировать и фильтровать несколько столбцов одновременно. 
                        Он также предоставляет новые функции, например, группы столбцов, 
                        закрепление столбцов, древовидные данные, изменение порядка строк и столбцов и т.д. 
                        Наконец, версия Pro использует виртуализацию для обработки больших наборов данных.                 
                    </Alert>
                    <Alert variant="outlined" severity="success">
                        Premium version содержит все функции Pro (Commercial version), а также функции 
                        для анализа больших наборов данных. Функции, доступные в начальной версии, 
                        включают группировку строк и возможность экспорта в файлы Excel.                
                    </Alert>
                    <Alert variant="outlined" severity="error">
                        В соответствии с Лицензионным соглашением, вы можете использовать 
                        компоненты Pro и Premium без коммерческой лицензии в течение 30 дней 
                        для не prodaction версии приложения.                
                    </Alert>
                    <Alert variant="outlined" severity="info">
                        Лицензирование представляет из себя предоставление ключа и активация компонентов.
                    </Alert>
                </Stack>
            </Card.Body>
        </Card>        
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Card>
            <Card.Header>Дерево и меню</Card.Header>
            <Card.Body>
                <Row>
                    <Col md={6}>
                        <RichObjectTreeView />                        
                    </Col>
                    <Col md={6}>
                        <IconMenu />
                    </Col>
                </Row>
            </Card.Body>
        </Card>        
      </TabPanel>      
      <TabPanel value={value} index={3}>        
        <Card>
            <Card.Header>Stepper и Speed dial</Card.Header>
            <Card.Body>
                <Row>
                <Col md={11}>
                    <VerticalLinearStepper />
                </Col>
                <Col md={1}>
                    <BasicSpeedDial />
                </Col>
                </Row>
            </Card.Body>
        </Card>
      </TabPanel> 
      <TabPanel value={value} index={4}>
        <Card>
            <Card.Header>Avatar, Rating и Drawer</Card.Header>
            <Card.Body>                
                <Row>
                    <Col md={6}>
                        <BasicRating src={fSergey} legend="Сергей Зачитайлов" />
                    </Col>
                    <Col md={6}>
                        <BasicRating src={fAndrey} legend="Андрей Зачитайлов" />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card>
                          <Card.Body>
                            <TemporaryDrawer />
                          </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
        </Card>        
      </TabPanel>      
    </Box>
  );
}
