import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageTabs from './PageTabs';
import ToolBar from './ToolBar';
import Alert from 'react-bootstrap/Alert';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import ImgProjects from '../imgs/Projects.jpg';
import ImgTasks from '../imgs/Tasks.jpg';
import ImgExecutionControl from '../imgs/ExecutionControl.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Figure from 'react-bootstrap/Figure';
import Image from 'react-bootstrap/Image';
import ImgSinichka from '../imgs/sinichka-foto.jpg';
import ImgSea from '../imgs/sea.jpg';
import ImgFlowers from '../imgs/flowers.jpg';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
//import { BsViewList } from "react-icons/bs";
//import Nav from 'react-bootstrap/Nav';

export default function BootstrapComponents() {

  return (
    <Row className="justify-content-md-center">
      {/* <Col md="1"></Col> */}
      <Col md="12">
        {/* <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
          <Card>
            <Card.Header>Bootstrap компоненты (Cards)</Card.Header>
            <Card.Body>
              {/* <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button> */}
              {/* {PageTabs(["Alerts"])} */}
              {/* Pagination */}
              <PageTabs tabs={[                
                { tab: "Accordion", element: <BootstrapComponentAccordion/> }, 
                { tab: "Carousel", element: <BootstrapComponentCarousel/> }, 
                { tab: "ListGroup", element: <BootstrapComponentListGroup/> },
                { tab: "Tables", element: <BootstrapComponentTables/> },
                { tab: "Alerts", element: <BootstrapComponentAlerts/> },
                { tab: "Другие...", element: <BootstrapComponentOthers/> }
                ]} />
            </Card.Body>
          </Card>        
      </Col>
      {/* <Col md="1"></Col>       */}
    </Row>
  );
}

function BootstrapComponentAccordion() {
  
  return (
    <Accordion defaultActiveKey={['1']} alwaysOpen>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5><Badge pill bg="primary">1</Badge>{' '} Декларативный</h5>
        </Accordion.Header>
        <Accordion.Body>        
          Создавать интерактивные пользовательские интерфейсы на React — приятно и просто. 
          Вам достаточно описать, как части интерфейса приложения выглядят в разных состояниях. 
          React будет своевременно их обновлять, когда данные изменяются.
          Декларативные представления сделают код более предсказуемым и упростят отладку.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5><Badge pill bg="primary">2</Badge>{' '} Основан на компонентах</h5>
        </Accordion.Header>
        <Accordion.Body>
          Создавайте инкапсулированные компоненты с собственным состоянием, 
          а затем объединяйте их в сложные пользовательские интерфейсы. 
          Поскольку логика компонента написана на JavaScript, 
          а не содержится в шаблонах, можно с лёгкостью передавать 
          самые разные данные по всему приложению и держать состояние вне DOM.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <h5><Badge pill bg="primary">3</Badge>{' '} Научитесь однажды — пишите где угодно</h5>
        </Accordion.Header>
        <Accordion.Body>
          Нам не нужно ничего знать про остальную часть вашего технологического стека, 
          поэтому вы можете разрабатывать новую функциональность на React, 
          не изменяя существующий код. 
          React также может работать на сервере, используя Node.js и 
          на мобильных платформах, используя React Native.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <h5><Badge pill bg="primary">4</Badge>{' '} React & Bootstrap для начинающих</h5>
        </Accordion.Header>
        <Accordion.Body>
          <iframe width="789" height="444" 
            src="https://www.youtube.com/embed/VyeZSerAoh4" 
            title="Уроки React JS + Bootstrap на практике - Адаптивное меню, роутинг"             
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            >            
          </iframe>
        </Accordion.Body>
      </Accordion.Item>      
    </Accordion>    
  );
}

function BootstrapComponentCarousel() {
  
  return (
    <Row>
      <Col md={2}></Col>
      <Col md={8}>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgProjects}
              alt="Проекты"
              height={400}
              //height={448}
              //width={332}
            />
            <Carousel.Caption>
              <h3>Проекты</h3>
              <p>Проект – это совокупность действий, ограниченных во времени и направленных на 
              решение проблемы или достижение конкретной цели.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgTasks}
              alt="Задачи"
              height={400}
              //height={448}
              //width={332}
            />
            <Carousel.Caption>
              <h3>Задачи</h3>
              <p>Задача - составная часть проекта. По заверщению задачи ожидается определенный результат.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ImgExecutionControl}
              alt="Исполнение и контроль"
              height={400}
              //height={448}
              //width={332}
            />
            <Carousel.Caption>
              <h3>Исполнение и контроль</h3>
              <p>Успешность исполнения каждой отдельной задачи определяет успешность исполнения проекта!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
}

function BootstrapComponentListGroup() {
  const alertClicked = () => {
    alert('Вы нажали на Actionable элемент ListGroupItem');
  };

  return (
    <>      
      <Row>    
        <Col md="6">          
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Проекты</div>
                Требуют внимания
              </div>
              <Badge bg="primary" pill>
                2
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Задачи</div>
                Требуют внимания
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Уведомления</div>
                Требуют внимания
              </div>
              <Badge bg="primary" pill>
                1
              </Badge>
            </ListGroup.Item>
          </ListGroup>          
        </Col>
        <Col md="6">
        <ListGroup defaultActiveKey="/forms">
            <ListGroup.Item action href="/forms">
              Active item (форма вертикальная)
            </ListGroup.Item>
            <ListGroup.Item action href="/formsAsRow">
              Active item (форма горизонтальная)
            </ListGroup.Item>
            <ListGroup.Item action href="/formsValidation">
              Active item (валидация форм)
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
              Disabled item (компоненты Bootstrap)
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
              Actionable item
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
}

function BootstrapComponentTables() {
  
  return (
    <>
      <ToolBar />
      <Row className="justify-content-md-center">
        <Col md={12}>
          <Card>
            <Card.Header>Сотрудники</Card.Header>
            <Card.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Логин</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Сергей</td>
                    <td>Зачитайлов</td>
                    <td>zsm</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Андрей</td>
                    <td>Зачитайлов</td>
                    <td>zas</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

function BootstrapComponentAlerts() {
  
  return (
    <>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Это <strong>{variant}</strong> предупреждение-оцените его!
        </Alert>
      ))}
    </>    
  );
}

function BootstrapComponentOthers() {
  const [show, setShow] = useState(false);

  return (
    <>
    <Row>
      <Col md="12">
        <ToastContainer className="p-3" position="top-end">
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Компонент Toast</strong>
              <small>3000 ms delay</small>
            </Toast.Header>
            <Toast.Body>
            <strong>Синицы</strong>, или настоящие <strong>синицы</strong> (лат. Parus), 
              — род птиц семейства синицевых.
            </Toast.Body>
          </Toast>
        </ToastContainer>      
      </Col>
    </Row>
    <Row className="justify-content-md-center">      
      <Col md="12">
        <Card>
          <Card.Header>ProgressBar</Card.Header>
          <Card.Body>
            <ProgressBar now={80} label={`${80}%`} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="justify-content-md-center">      
      <Col md="3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ImgSinichka} />
          <Card.Body>
            <Card.Title>Синички</Card.Title>
            <Card.Text>
              Фото природы.
            </Card.Text>
            <OverlayTrigger
              key="tooltip-top"
              placement="top"
              overlay={
                <Tooltip id={`tooltip-${"top"}`}>
                  Tooltip on <strong>top</strong>.
                </Tooltip>
              }
            >
              <Button onClick={() => setShow(true)}>Дополнительно...</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>
      </Col>
      <Col md="5">
        <Card>
          <Card.Header>Figure</Card.Header>
          <Card.Body>
            <Figure>
              <Figure.Image
                width={450}
                // height={}
                alt="sea"
                src={ImgSea}
              />
              <Figure.Caption>
                Морской пейзаж.
              </Figure.Caption>
            </Figure>
          </Card.Body>
        </Card>
      </Col>
      <Col md="4">
        <Card>
          <Card.Header>Image</Card.Header>
          <Card.Body>
            <Image src={ImgFlowers} 
              width={350}
              // height={}
              roundedCircle={true} />
          </Card.Body>
        </Card>
      </Col>      
    </Row>      
    </>
  )
}
