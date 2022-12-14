import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function FormsValidation() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Row className="justify-content-md-center">
      <Col md="2"></Col>
      <Col md="8">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Введите имя"
                defaultValue="Сергей"
              />
              <Form.Control.Feedback>Правильно заполнено!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Фамилия"
                defaultValue="Зачитайлов"
              />
              <Form.Control.Feedback>Правильно заполнено!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Имя пользователя</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Введите имя пользователя"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Необходимо указать имя пользователя.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Город</Form.Label>
              <Form.Control type="text" placeholder="Введите город" required />
              <Form.Control.Feedback type="invalid">
                Необходимо указать город.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Область</Form.Label>
              <Form.Control type="text" placeholder="Введите область" required />
              <Form.Control.Feedback type="invalid">
                Необходимо указать область.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Индекс</Form.Label>
              <Form.Control type="text" placeholder="Введите индекс" required />
              <Form.Control.Feedback type="invalid">
                Необходимо указать индекс.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Принимаю правила и соглашения"
              feedback="Вы должны согласиться перед отправкой."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Отправить</Button>
        </Form>
      </Col>
      <Col md="2"></Col>
    </Row>
  );
}
