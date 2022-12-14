//import { Row } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../imgs/logo.png';
import SimpleBadge from '../pages/MUIBadge';
import { BsMenuButtonWide } from "react-icons/bs";
//import { BsPieChartFill } from "react-icons/bs";
import { BsPieChart } from "react-icons/bs";
import { BsPrinter } from "react-icons/bs";
import { BsServer } from "react-icons/bs";
//import { BsThreeDotsVertical } from "react-icons/bs";
//import { BsThreeDots } from "react-icons/bs";
import { BsViewStacked } from "react-icons/bs";
import { BsLayoutSplit } from "react-icons/bs";
//import { BsVr } from "react-icons/bs";
import { BsPatchCheck } from "react-icons/bs";
import { BsGraphUp } from "react-icons/bs";

// import { BsCardText } from "react-icons/bs";
// import { NavItem } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
//
//import '../css/NavMenu.css';

export default function NavMenu() {
  return (
    <>
      {/* {[false, 'sm', 'md', 'lg', 'xl', 'xxl'].map((expand) => ( */}
      {[false].map((expand) => (
        <Navbar key={expand} 
        bg="primary" 
        variant="dark" 
        expand={expand} 
        className="mb-3"
        >
          <Container fluid>
            <Row>
              <Col md={4}>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />            
              </Col>
              <Col md={7}>
                <Navbar.Brand href="/home">
                  <img
                        src={logo}
                        height='30'
                        width='30'
                        className='d-inline-block'
                        alt='Logo'
                    />{' '}React&Bootstrap
                </Navbar.Brand>
              </Col>
              <Col md={1}>
                <Navbar.Brand>
                  <SimpleBadge />
                </Navbar.Brand>
              </Col>
            </Row>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{backgroundColor: "#354868", color: "#fff"}}
            >
              <Offcanvas.Header closeButton 
              style={{backgroundColor: "#354868", color: "#fff"}}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas (left)
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="Формы"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                    <NavDropdown.Item href="/forms">
                      <BsViewStacked style={{color: "blue"}} />{' '}
                      Вертикальные
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/formsAsRow">
                      <BsLayoutSplit style={{color: "blue"}} />{' '}
                      Горизонтальные
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/formsValidation">
                      <BsPatchCheck style={{color: "green"}} />{' '}
                      Валидация форм
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/bootstrapComponents">
                    <BsMenuButtonWide style={{color: "yellow"}} />{' '}
                    Компоненты Bootstrap
                  </Nav.Link>
                  <hr/>
                  <Nav.Link href="/dataBase">
                    <BsServer style={{color: "blue"}} />{' '}
                    База данных PostgreSQL
                  </Nav.Link>
                  <Nav.Link href="/dataBase?db=MsSQL">
                    <BsServer style={{color: "red"}} />{' '}
                    База данных MsSQL
                  </Nav.Link>
                  <hr/>
                  <Nav.Link href="/muiCore">
                    <BsMenuButtonWide style={{color: "yellow"}} />{' '}
                    MUI Core (Material UI v5.10.14)
                  </Nav.Link>
                  <hr/>
                  <Nav.Link href="/charts">
                    <BsGraphUp style={{color: "red"}} />{' '}
                    Диаграммы (React Google Charts)
                  </Nav.Link>
                  <Nav.Link href="/ganntGrapeCity">
                    <BsPieChart style={{color: "green"}} />{' '}
                    Диаграмма ганнта (Gannt GrapeCity)
                  </Nav.Link>
                  <Nav.Link href="/ganntDHTMLX">
                    <BsPieChart style={{color: "green"}} />{' '}
                    Диаграмма ганнта (DHTMLX)
                  </Nav.Link>
                  <hr/>
                  <Nav.Link href="/fastReport">
                   <BsPrinter style={{color: "blue"}} />{' '}
                    Отчеты (FastReport)
                  </Nav.Link>      
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
