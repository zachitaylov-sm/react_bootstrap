import Card from 'react-bootstrap/Card';
import ImgGanntDHTMLX from '../imgs/GanntDHTMLX.jpg';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsStickies } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";

export default function ChartGanntDHTMLX() {

    return (
        <Row className="justify-content-md-center">
          <Col md={10}>
            <Card>
              <Card.Header>Диаграмма ганнта (DHTMLX)</Card.Header>
              <Card.Body>
                <Row className="justify-content-md-center">
                  <Col md={6}>
                    <Card>
                      <Card.Img variant="top" src={ImgGanntDHTMLX} />
                        <Card.Body>
                          <Card.Title>Gannt DHTMLX</Card.Title>
                            <Card.Text>
                              DHTMLX Gantt - это полнофункциональная диаграмма Ганта для 
                              кроссбраузерных и кроссплатформенных приложений. 
                              Наиболее полная библиотека, удовлетворяющая всем потребностям 
                              приложения для управления проектами.
                            </Card.Text>
                            <Row className="justify-content-md-center">
                                <Col md={6}>
                                    <a href="https://dhtmlx.com/react/demos/gantt/#/base/default" 
                                        target="_blank" rel="noreferrer"
                                        style={{justifyContent: "center", display: "flex", textDecoration: "inherit"}}>
                                        <Button variant="outline-primary">
                                          <BsStickies style={{color: "red"}} />{' '}
                                          Подробнее...
                                        </Button>
                                    </a>
                                </Col>
                                <Col md={6}>
                                    <a href="https://dhtmlx.com/docs/products/licenses.shtml" 
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
