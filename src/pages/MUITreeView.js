//npm install @mui/lab 
//@mui/material
import React from 'react'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import Alert from 'react-bootstrap/Alert';
//import Card from 'react-bootstrap/Card';

// interface RenderTree {
//   id: string;
//   name: string;
//   children?: readonly RenderTree[];
// }

//const data: RenderTree = {
const data = {
  id: 'root',
  name: 'Холдинг "Рога и копыта"',
  children: [
    {
      id: '1.',
      name: 'Предприятие 1',
      children: [
        {
          id: '1.1.',
          name: 'Дирекция'
        }
      ]      
    },
    {
      id: '2.',
      name: 'Предприятие 2',
      children: [
        {
            id: '2.0.',
            name: 'Дочернее предприятие',
            children: [
                {
                  id: '2.0.1',
                  name: 'Дирекция'
                },
                {
                  id: '2.0.2',
                  name: 'Бухгалтерия'
                }
              ]
        },
        {
          id: '2.1.',
          name: 'Дирекция'
        },
        {
          id: '2.2.',
          name: 'Бухгалтерия'
        },
        {
            id: '2.3.',
            name: 'Конструкторский департамент',
            children: [
                {
                    id: '2.3.1',
                    name: 'Конструкторский отдел'
                },
                {
                    id: '2.3.2',
                    name: 'Аналитический отдел'
                }
                ]
        }
      ]
    }
  ]
};

export default function RichObjectTreeView() {
//  const renderTree = (nodes: RenderTree) => (
    const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <>    
        <Alert variant="info">Структура предприятия</Alert>                
        {/* <Card>
            <Card.Body> */}
                <TreeView
                aria-label="rich object"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpanded={['root']}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{ height: 250, flexGrow: 1, maxWidth: 550, overflowY: 'auto' }}
                >
                {renderTree(data)}
                </TreeView>
            {/* </Card.Body>
        </Card> */}
    </>
  );
}
