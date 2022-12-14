//https://mui.com/material-ui/getting-started/installation
//npm install @mui/material @emotion/react @emotion/styled
//npm install @mui/icons-material
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import MUITabs from './MUITabs'

export default function MUICore() {

  return (
    <Row className="justify-content-md-center">      
      <Col md="12">
        <Card>
          <Card.Header>MUI Core</Card.Header>
          <Card.Body>
            <MUITabs />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
