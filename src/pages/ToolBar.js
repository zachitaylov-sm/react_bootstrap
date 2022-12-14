import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
//npm install react-icons --save
//https://react-icons.github.io/react-icons/icons?name=bs
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillPersonXFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";

export default function BootstrapComponents() {
    
    return (
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <ButtonToolbar 
              // className="justify-content-between"
              aria-label="Toolbar with button groups">
                <ButtonGroup className="me-2" aria-label="First group">
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" 
                    overlay={
                    <Popover id="popover-basic">
                        <Popover.Header as="h3">Добавить (Popover)</Popover.Header>
                        <Popover.Body>Добавить <strong>нового</strong> сотрудника.</Popover.Body>
                    </Popover>
                    }>
                    <Button variant="outline-primary"
                    onClick={() => alert("Сотрудник добавлен. Действие выполнено!")}
                    >   
                      {/* <BsFillPersonPlusFill color="black" /> */}
                      <BsFillPersonPlusFill style={{color: "#000"}} />
                    </Button>
                  </OverlayTrigger>
                </ButtonGroup>
                <ButtonGroup className="me-2" aria-label="Second group">
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" 
                    overlay={
                    <Popover id="popover-basic">
                    <Popover.Header as="h3">Изменить (Popover)</Popover.Header>
                    <Popover.Body>
                        Изменить данные <strong>выбранного</strong> сотрудника.
                    </Popover.Body>
                    </Popover>
                    }>
                    <Button variant="outline-primary"
                    onClick={() => alert("Данные сотрудника изменены. Действие выполнено!")}
                    >
                      <BsFillPersonLinesFill style={{color: "green"}} />
                    </Button>
                  </OverlayTrigger>
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" 
                    overlay={
                    <Popover id="popover-basic">
                    <Popover.Header as="h3">Удалить (Popover)</Popover.Header>
                    <Popover.Body>
                        Удалить <strong>выбранного</strong> сотрудника.
                    </Popover.Body>
                    </Popover>
                    }>
                    <Button variant="outline-primary"
                    onClick={() => alert("Сотрудник удален. Действие выполнено!")}
                    >
                      <BsFillPersonXFill style={{color: "red"}} />
                    </Button>
                  </OverlayTrigger>
                </ButtonGroup>
                <ButtonGroup aria-label="Third group">
                  <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" 
                    overlay={
                    <Popover id="popover-basic">
                    <Popover.Header as="h3">Найти (Popover)</Popover.Header>
                    <Popover.Body>
                        Найти сотрудника.
                    </Popover.Body>
                    </Popover>
                    }>
                    <Button variant="outline-primary"
                    onClick={() => alert("Сотрудник найден. Действие выполнено!")}
                    >
                      <BsSearch style={{color: "blue"}} />
                    </Button>
                  </OverlayTrigger>                                  
                </ButtonGroup>
              </ButtonToolbar>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
}
