import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ModalDialog from './ModalDialog';
import Card from 'react-bootstrap/Card';

export default function Forms() {

  return (
    <Row className="justify-content-md-center">
      <Col md="2"></Col>
      <Col md="8">
        <Card>
            <Card.Header>Вертикальная (базовая) форма</Card.Header>
            <Card.Body>
              <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Text</Form.Label>
                      <Form.Control type="email" placeholder="Введите e-mail" />
                      <Form.Text className="text-muted">
                        Поясняющий текст для поля
                      </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Text (disabled)</Form.Label>
                      <Form.Control type="password" placeholder="Введите password" disabled/>
                      <Form.Text className="text-muted">
                        Возможность ввода отключена
                      </Form.Text>
                  </Form.Group>            
                  <Form.Group className="mb-3" controlId="formBasicTextarea">
                      <Form.Label>Textarea</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Form.Group controlId="formBasicInputFile" className="mb-3">
                      <Form.Label>File select</Form.Label>
                      <Form.Control type="file" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicRange">
                      <Form.Label>Range</Form.Label>
                      <Form.Range />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="CheckBox" />
                  </Form.Group>
                  {/* <Button variant="primary" type="submit">
                      Сохранить
                  </Button> */}
                  {/* {ModalDialog("Сохранить", "Модальное окно", "Форма (вертикальная). Действие выполнено !")} */}
                  <ModalDialog buttonText={"Сохранить"} headerText={"Модальное окно"}
                  bodyText={"Форма (вертикальная). Действие выполнено !"} />
              </Form>
            </Card.Body>
        </Card>
      </Col>
      <Col md="2"></Col>
    </Row>
  );
}
