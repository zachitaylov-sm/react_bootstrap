//https://www.grapecity.com/dataviewsjs/demos/DataViews/GanttView/GanttView/react
//npm install @grapecity/dataviews.react
//пакеты dataviews grid и gantt
//npm install @grapecity/dataviews.grid
//npm install @grapecity/dataviews.gantt
//или все пакеты: npm install @grapecity/dataviews.all
//import ReactDOM from 'react-dom';
// import React from 'react';
// import DataView from '@grapecity/dataviews.react';
// import { GridLayout } from '@grapecity/dataviews.grid';
// import '@grapecity/dataviews.gantt';
// import '../css/GanntGrapeCity.css';
import Card from 'react-bootstrap/Card';
import ImgGanntGrapeCity from '../imgs/GanntGrapeCity.jpg';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsStickies } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";

export default function ChartGanntGrapeCity() {
    // const cols = [
    //     {
    //       id: 'id',
    //       caption: 'Id',
    //       dataField: 'id',
    //       width: 80
    //     },
    //     {
    //       id: 'start',
    //       caption: 'Start',
    //       dataField: 'start',
    //       width: 100,
    //       dataType: 'date',
    //       format: 'dd.mm.yyyy'
    //     },
    //     {
    //       id: 'end',
    //       caption: 'End',
    //       dataField: 'end',
    //       width: 100,
    //       dataType: 'date',
    //       format: 'dd.mm.yyyy'
    //     },
    //     {
    //       id: 'gantt',
    //       ganttColumn: {
    //         timeLineScale: 'month',
    //         scale: 300,
    //         start: 'start',
    //         end: 'end',
    //         text: 'description'
    //       },
    //       width: '*',
    //     },
    //     {
    //       id: 'description',
    //       caption: 'Description',
    //       dataField: 'description',
    //       visible: false
    //     },
    //     {
    //       id: 'resources',
    //       caption: 'Resources',
    //       dataField: 'resources',
    //       visible: false
    //     },
    //     {
    //       id: 'predecessorID',
    //       caption: 'predecessorID',
    //       dataField: 'predecessorID',
    //       visible: false,
    //       allowEditing: false
    //     },
    //     {
    //       id: 'parentID',
    //       caption: 'parentID',
    //       dataField: 'parentID',
    //       visible: false,
    //       allowEditing: false
    //     },
    //   ];
      
    //   const layout = new GridLayout({
    //     colHeaderHeight: 48,
    //     rowHeight: 48,
    //     allowEditing: true,
    //     editRowTemplate: '#popupTemplate',
    //     editMode: 'popup',
    //     hierarchy: {
    //       keyField: 'id',
    //       parentField: 'parentID',
    //       collapsed: false,
    //       column: 'id',
    //       footer: {
    //         visible: false,
    //       },
    //     },
    //   });

    //   const data = [
    //     {
    //       id: '1',
    //       description: 'SITE DESIGN',
    //       start: 'Jan 01,2018',
    //       end: 'Jan 10,2018',
    //       percentComplete: 0.3,
    //       resources: 'Steve, David, Wilson, Clark, Smith'
    //     },
    //     {
    //       id: '2',
    //       parentID: '1',
    //       description: 'MARKET RESEARCH',
    //       start: 'Jan 01,2018',
    //       end: 'Jan 10,2018',
    //       percentComplete: 0.7,
    //       resources: 'Steve, David'
    //     },
    //     {
    //       id: '3',
    //       parentID: '1',
    //       predecessorID: '2',
    //       description: 'VISUAL DESIGN',
    //       start: 'Jan 11,2018',
    //       end: 'Jan 16,2018',
    //       percentComplete: 0.1,
    //       resources: 'Wilson'
    //     },
    //     {
    //       id: '4',
    //       parentID: '1',
    //       predecessorID: '3',
    //       description: 'PROGRAMMING',
    //       start: 'Jan 16,2018',
    //       end: 'Jan 29,2018',
    //       percentComplete: 0.45,
    //       resources: 'Steve, Clark, Smith'
    //     },
    //     {
    //       id: '5',
    //       parentID: '1',
    //       predecessorID: '4',
    //       description: 'TESTING',
    //       start: 'Jan 19,2018',
    //       end: 'June 01,2018',
    //       percentComplete: 0.25,
    //       resources: 'David, Wilson, Clark, Smith'
    //     },
    //     {
    //       id: '6',
    //       description: 'kick off',
    //       start: 'Jan 02,2018',
    //       end: 'Jan 02,2018',
    //       content: ''
    //     },
    //     {
    //       id: '7',
    //       description: 'MARKETING',
    //       start: 'Jan 03,2018',
    //       end: 'Jan 22,2018',
    //       percentComplete: 0.42,
    //       resources: 'Garcia, Baker, Parker, Hill'
    //     },
    //     {
    //       id: '8',
    //       parentID: '7',
    //       predecessorID: '6',
    //       description: 'DETERMINE CREATIVE CONCEPT',
    //       start: 'Jan 03,2018',
    //       end: 'Jan 11,2018',
    //       percentComplete: 0.56,
    //       resources: 'Garcia, Baker'
    //     },
    //     {
    //       id: '9',
    //       parentID: '7',
    //       predecessorID: '6',
    //       description: 'PREPARING MESSAGES',
    //       start: 'Jan 03,2018',
    //       end: 'Jan 09,2018',
    //       percentComplete: 0.74,
    //       resources: 'Parker, Hill'
    //     },
    //     {
    //       id: '10',
    //       parentID: '7',
    //       predecessorID: '8,9',
    //       description: 'LAUNCH MARKETING PROGRAM',
    //       start: 'Jan 12,2018',
    //       end: 'Jan 22,2018',
    //       percentComplete: 0.08,
    //       resources: 'Garcia, Baker, Parker, Hill'
    //     },
    //     {
    //       id: '11',
    //       predecessorID: '13,10',
    //       description: 'PRE RELEASE',
    //       start: 'Jan 30,2018',
    //       end: 'Jan 30,2018'
    //     },
    //     {
    //       id: '12',
    //       description: 'BUDGET',
    //       start: 'Jan 01,2018',
    //       end: 'Jan 03,2018',
    //       percentComplete: 0.87,
    //       resources: 'Scott, Green'
    //     },
    //     {
    //       id: '13',
    //       predecessorID: '12',
    //       description: 'CONFORMING',
    //       start: 'Jan 17,2018',
    //       end: 'Jan 21,2018',
    //       percentComplete: 0.1,
    //       resources: 'Scott, Green'
    //     },
    //     {
    //       id: '14',
    //       predecessorID: '5,11',
    //       description: 'FINAL RELEASE',
    //       start: 'June 03,2018',
    //       end: 'June 03,2018'
    //     },
    //   ];

    return (
        <Row className="justify-content-md-center">
            <Col md={10}>
                <Card>
                    <Card.Header>Диаграмма ганнта (Gannt GrapeCity)</Card.Header>
                    <Card.Body>
                        {/* <DataView id="grid" className="grid" 
                        data={data} cols={cols} layout={layout} autoFocus /> */}
                        <Row className="justify-content-md-center">
                            <Col md={6}>
                                <Card>
                                    <Card.Img variant="top" src={ImgGanntGrapeCity} />
                                    <Card.Body>
                                        <Card.Title>Gannt GrapeCity</Card.Title>
                                        <Card.Text>
                                            Визуализируйте даты начала и окончания проекта для сохранения результатов, 
                                            используя стратегию группировки представлений Ганнта.
                                        </Card.Text>
                                        <Row className="justify-content-md-center">
                                            <Col md={6}>
                                                <a href="https://www.grapecity.com/dataviewsjs/demos/sample/DataViews/GanttView/GanttView/react" 
                                                    target="_blank" rel="noreferrer"
                                                    style={{justifyContent: "center", display: "flex", textDecoration: "inherit"}}>
                                                    <Button variant="outline-primary">
                                                        <BsStickies style={{color: "red"}} />{' '}
                                                        Подробнее...
                                                    </Button>
                                                </a>
                                            </Col>
                                            <Col md={6}>
                                                <a href="https://www.grapecity.com/dataviewsjs/pricing" 
                                                    target="_blank" rel="noreferrer"
                                                    style={{justifyContent: "center", display: "flex", textDecoration: "inherit"}}>
                                                    <Button variant="outline-primary">
                                                        <BsCurrencyDollar style={{color: "green"}} />{' '}                                                    
                                                        Купить
                                                    </Button>
                                                </a>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>  
                            </Col>
                        </Row>              
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}
