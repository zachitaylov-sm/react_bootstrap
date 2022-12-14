import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ModalDialog from './ModalDialog';
import Card from 'react-bootstrap/Card';

export default function FormsAsRow() {

  return (    
    <Row className="justify-content-md-center">
      <Col md="2"></Col>
      <Col md="8">
        <Card>
            <Card.Header>Горизонтальная форма</Card.Header>
            <Card.Body>
              <Form>
                  <Form.Group as={Row} className="mb-3" controlId="formAsRowVars">
                    <Form.Label column sm={2}>DropDownList</Form.Label>
                    <Col sm={10}>
                      <Form.Select aria-label="Вариант">
                        <option>0-й вариант</option>
                        <option value="1">1-й вариант</option>
                        <option value="2">2-й вариант</option>
                        <option value="3">3-й вариант</option>
                      </Form.Select>                            
                      <Form.Text className="text-muted">
                        Поле для выбора варианта
                      </Form.Text>
                    </Col>
                  </Form.Group>            
                  <fieldset>
                    <Form.Group as={Row} className="mb-3" controlId="formAsRowRadioBox">
                      <Form.Label as="legend" column sm={2}>
                        RadioBox
                      </Form.Label>
                      <Col sm={10}>
                        <Form.Check
                          type="radio"
                          label="1-й раздел"
                          name="formAsRowRadios"
                          id="formAsRowRadios1"
                        />
                        <Form.Check
                          type="radio"
                          label="2-й раздел"
                          name="formAsRowRadios"
                          id="formAsRow2"
                        />
                        <Form.Check 
                          disabled
                          type="radio"
                          label="3-й раздел"
                          name="formAsRowRadios"
                          id="formAsRow3"
                        />
                      </Col>
                    </Form.Group>
                  </fieldset>
                  <Form.Group as={Row} className="mb-3" controlId="formAsRowGroupFloatingLabel">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <FloatingLabel
                            controlId="formAsRowFloatingLabel"
                            label="FloatingLabel"
                            className="mb-3" >
                        <Form.Control placeholder="Введите текст" />
                      </FloatingLabel>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="formAsRowModalDialog">
                    <Col sm={{ span: 10, offset: 2 }}>
                      {/* {ModalDialog("Сохранить", "Модальное окно", "Форма (горизонтальная). Действие выполнено !")} */}
                      <ModalDialog buttonText="Сохранить" headerText="Модальное окно"
                      bodyText="Форма (горизонтальная). Действие выполнено !" />
                    </Col>
                  </Form.Group>            
              </Form>
            </Card.Body>
        </Card>
      </Col>
      <Col md="2"></Col>
    </Row>
  );
}
