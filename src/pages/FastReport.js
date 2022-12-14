import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ImgFastReport1 from '../imgs/FastReport1.png';
import ImgFastReport2 from '../imgs/FastReport2.png';
import ImgFastReport3 from '../imgs/FastReport3.png';
import ImgFastReport4 from '../imgs/FastReport4.png';
import ImgFastReport5 from '../imgs/FastReport5.png';
import ImgFastReport6 from '../imgs/FastReport6.png';
import ImgFastReport7 from '../imgs/FastReport7.png';
import ImgFastReport8 from '../imgs/FastReport8.png';
import ImgFastReport9 from '../imgs/FastReport9.png';
import ImgFastReport10 from '../imgs/FastReport10.png';
import ImgFastReport11 from '../imgs/FastReport11.png';
import { BsPrinter } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";

export default function FastReport() {
  
    return (
        <Row className="justify-content-md-center">
          <Col md={10}>
            <Card>
              <Card.Header>Отчеты (FastReport)</Card.Header>
              <Card.Body>
                <Row className="justify-content-md-center">
                  <Col md={8}>
                    <Carousel variant="dark">
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport1}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport2}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport3}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport4}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport5}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport6}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport7}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport8}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport9}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport10}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={ImgFastReport11}
                                alt="FastReport"
                                height={400}
                            />
                            <Carousel.Caption>
                                <h5>FastReport</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col md={8}>
                    <Card>
                      <Card.Body>
                        <Row className="justify-content-md-center">
                          <Col md={6}>
                            <a href="https://www.fast-report.com:2015/razor/WebReportDesigner/index.html?lang=ru&uuid=frSIlBJxtGj0uLAQL7d4OI-Q636315860836428470" 
                                target="_blank" rel="noreferrer"
                                style={{justifyContent: "center", display: "flex", textDecoration: "inherit"}}>
                                <Button variant="outline-primary">
                                    <BsPrinter style={{color: "red"}} />{' '}
                                    FastReport online designer
                                </Button>
                            </a>
                          </Col>
                          <Col md={6}>
                            <a href="https://xn--90aia9aifhdb2cxbdg.xn--p1ai/ru/buy/price_table/"
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