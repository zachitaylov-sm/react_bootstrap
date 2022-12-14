import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
//import PageItem from 'react-bootstrap/PageItem'
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsFillPersonXFill } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import { BsXCircle } from "react-icons/bs";
import { BsCheck2Circle } from "react-icons/bs";
import InputGroup from 'react-bootstrap/InputGroup';

export default function DataBase() {
  const [queryResult, setQueryResult] = 
    useState({ 
      result: false, 
      idx: 0, 
      cntRows: 5, 
      data: [], 
      count: -1,
      // rowSelect: ['00000000-0000-0000-0000-000000000000']
      rowSelect: []
    });
  let param_db = (new URLSearchParams(window.location.search)).get("db");
  param_db = param_db ? param_db.toLowerCase() : param_db;

  useEffect(() => {
    if (!queryResult.result) {
      getFromDB(queryResult.idx, queryResult.cntRows, queryResult.count, queryResult.rowSelect)  
        .then(getResult => 
          setQueryResult({ 
            result: getResult.result,
            idx: getResult.idx,
            cntRows: getResult.cntRows,
            data: getResult.data,
            count: getResult.count,
            rowSelect: getResult.rowSelect
          }))
    }
  }, [queryResult]) 

  return (
    <Row className="justify-content-md-center">      
      <Col md="12">
        <Card>
          <Card.Header>Данные в таблице БД <strong>{param_db === 'mssql' ? 'MsSQL' : 'PostgreSQL'}</strong></Card.Header>
          <Card.Body>
            {!queryResult.result ? 
              <Loading cols={['Выполняется запрос данных.']} /> : 
              <TableContent queryResult={queryResult} setQueryResult={setQueryResult} />}            
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

// async function getFromDB(idx, cntRows, count) {
//   let result = false;
//   let countRows = 0;
//   let data = [];
//   const responseCount = await fetch('http://serge-dev-vsc:8081/api/DataFromDB/count');
//   if (responseCount.statusText === "OK") {
//     countRows = parseInt(responseCount.text);
//     if (!countRows) countRows = 0;
//     const responseData = await fetch('http://serge-dev-vsc:8081/api/DataFromDB/' + idx + '/' + cntRows);  
//     if (responseData.statusText === "OK") {
//       data = await responseData.json();
//       result = true;    
//     }
//   }
//   //
//   return { result: result, idx: idx, cntRows: cntRows, data: data, count: countRows };
// }

// Get
// fetch("http://serge-dev-vsc:8081/api/DataFromDB/0/5",
// { 
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     }
// })
// .then((response) => {
//   console.log(response.statusText);
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// })
async function getFromDB(idx, cntRows, count, rowSelect) {
  let result = false;
  //
  let db = (new URLSearchParams(window.location.search)).get("db");
  db = db ? db.toLowerCase() : db;
  const url = (db === "mssql" ? 
    'http://serge-dev-vsc:8082/api/DataFromDB' :
    'http://serge-dev-vsc:8081/api/DataFromDB');
  let urlQuery = url;
  //
  let countRows = count;
  //if (countRows === -1) {
  urlQuery = url + '/count';
  const responseCount = await fetch(urlQuery);
  if (responseCount.statusText === "OK") {
    countRows = parseInt(await responseCount.text()) || 0;
    if (!countRows && countRows !== 0) countRows = 0;      
  } else
    console.Error("Ошибка запроса " + urlQuery + ": (" + responseCount.status + ") " + responseCount.statusText);
  //}
  //
  let data = [];
  if (countRows !== -1) {
    urlQuery = url + '/' + idx + '/' + cntRows;
    const responseData = await fetch(urlQuery);  
    if (responseData.statusText === "OK") {
      data = await responseData.json();
      result = true;    
    } else
      console.Error("Ошибка запроса " + urlQuery + ": (" + responseData.status + ") " + responseData.statusText);
  }
  //
  return { 
    result: result, 
    idx: idx, 
    cntRows: cntRows, 
    data: data, 
    count: countRows,
    rowSelect: rowSelect
  };
}

//type: PUT (update row)/POST (add new row)/DELETE (delete row)
//post
// fetch("http://serge-dev-vsc:8081/api/DataFromDB/Add",
// { 
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify({
//        name: "Иван", 
//        surname: "Иванов", 
//        age: 20, 
//        phone: "12345"
//      })
// })
// .then((response) => {
//   console.log(response.statusText);
//   return response.text(); // return response.json(); 
// })
// .then((data) => {
//   console.log(data);
// })
async function changeDataDB(type, rowSelect, personObj, 
  queryResult, setQueryResult, setShowModalDlg) {
  let result = false;
  //
  if ((type === "PUT" || type === "DELETE") && (!rowSelect || rowSelect.length === 0))
    throw new Error("changeDataDB: Ожидалось значение ([{...}])rowSelect");    
  if ((type === "PUT" || type === "POST") && !personObj)
    throw new Error("changeDataDB: Ожидалось значение ({...})personObj");    
  //
  let db = (new URLSearchParams(window.location.search)).get("db");
  db = db ? db.toLowerCase() : db;
  const url = (db === "mssql" ? 
    'http://serge-dev-vsc:8082/api/DataFromDB' :
    'http://serge-dev-vsc:8081/api/DataFromDB');
  let urlQuery = url;
  switch(type) {
    case "POST": {
      urlQuery += "/Add";
      break;
    }    
    case "PUT": {
      urlQuery += "/Update/" + rowSelect[0].Id;
      break;
    }
    case "DELETE": {
      urlQuery += "/Delete/" + rowSelect[0].Id;
      break;
    }
    default:
      throw new Error("changeDataDB: Ожидалось значение (string)type in ('POST', 'PUT', 'DELETE')");
  }
  let bodyRequest = "";
  if (type === "PUT" || type === "POST")
    bodyRequest = JSON.stringify(personObj);
  //
  const responseChange = await fetch(urlQuery, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: bodyRequest
  });
  //
  if (responseChange.statusText === "OK") {
    //const responseChangeResult = await responseChange.text();
    result = true;
    setShowModalDlg({show: false, addMode: false});
    setQueryResult({
      result: false,
      idx: queryResult.idx, 
      cntRows: queryResult.cntRows,
      data: [],
      count: queryResult.count,
      rowSelect: queryResult.rowSelect
      });
  } else
    console.Error("Ошибка запроса " + urlQuery + ": (" + responseChange.status + ") " + responseChange.statusText);
  //
  return result;
}

// function getCols(data) {
//   let result = [];
//   //
//   if (data && data.length > 0) {
//     const dataRow = data[0];
//     for(let colName in dataRow)
//       result.push(colName);
//   }
//   // 
//   return result;
// }

function Loading(props) {

  return (
    // <Spinner animation="border" role="status">
    //   <span className="visually-hidden">Loading...</span>
    // </Spinner>
    // <>
    //   <strong>Loading...</strong>{' '}
    //   <Spinner animation="border" role="status" />
    // </>
    <>
    <Button variant="outline-primary" disabled>
        <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        />{' '}
        Загрузка...
    </Button>    
    <Table striped bordered>
      <TableHead cols={props.cols} />
      {/* <TableEmptyBody cols={props.cols} /> */}
    </Table>
    </>
  );
}

function TableContent(props) {

  return (
    <>
      <DataBaseToolBar queryResult={props.queryResult} setQueryResult={props.setQueryResult} />
      <Table striped bordered>
        {/* <TableHead cols={getCols(props.queryResult.data)} /> */}
        <TableHead cols={["", "#", "Id", "Name", "Surname", "Age", "Phone", "dateTime"]} />
        <TableBody queryResult={props.queryResult} setQueryResult={props.setQueryResult} />
      </Table>
      <TablePagination queryResult={props.queryResult} setQueryResult={props.setQueryResult} />
    </>            
  );
}

function TableHead(props) {
  return (
    <thead>
      <tr>
      {props.cols.map(th =>
        <th key={th}>{th}</th>
        )}
      </tr>
    </thead>   
  );
}

// function TableEmptyBody(props) {
//   return (
//     <tbody>
//       <tr>
//       {props.cols.map(td =>
//         <td key={td}>{' '}</td>
//         )}
//       </tr>
//     </tbody>   
//   );
// }

function TableBody(props) {
  let number = props.queryResult.idx;
  
  return (
      <tbody>
        {props.queryResult.data.map(row =>
        <tr key={row.Id}>
          <td>
            <Form>
              <Form.Check type="checkbox" 
                defaultChecked={props.queryResult.rowSelect.findIndex(
                  item => item.Id === row.Id) === -1 ? false : true}
                onChange={e => {
                  // e.target.checked = !e.target.checked;
                  props.setQueryResult({
                    result: false,
                    idx: props.queryResult.idx, 
                    cntRows: props.queryResult.cntRows,
                    data: [],
                    count: props.queryResult.count,
                    rowSelect: e.target.checked ? [row] : []
                    });
                }}
                name="rowSelect" 
                value={`row-${number}`}
                />
            </Form>
          </td>
          <td>{++number}</td>
          <td>{row.Id}</td>
          <td>{row.Name}</td>
          <td>{row.Surname}</td>
          <td>{row.Age}</td>
          <td>{row.Phone}</td>
          <td>
            {/* {row.dateTime} */}
            {/* { (new Date(`${row.dateTime}`)).toLocaleString().replace(",", "") } */}
            { (new Date(`${row.dateTime}`)).toLocaleDateString() }
          </td>
        </tr>
      )}
    </tbody>
  );
}

function TablePagination(props) {

  return (
    <Pagination>
      {/* к первой странице */}
      <OverlayTrigger
        key="go-first"
        placement="top"
        overlay={
          <Tooltip id={`tooltip-${"go-first"}`}>
            К первой странице
          </Tooltip>
        }
      >
        <Pagination.First onClick={() => 
        props.setQueryResult({
          result: false,
          idx: 0, 
          cntRows: props.queryResult.cntRows, 
          data: [],
          count: props.queryResult.count,
          rowSelect: []
          }) } />
      </OverlayTrigger>
      {/* к предыдущей странице*/}
      <OverlayTrigger
        key="go-prev"
        placement="top"
        overlay={
          <Tooltip id={`tooltip-${"go-prev"}`}>
            К предыдущей странице
          </Tooltip>
        }
      >
        <Pagination.Prev onClick={() => 
        props.setQueryResult({
          result: false,
          idx: props.queryResult.idx - props.queryResult.cntRows < 0 ? 0 :
            props.queryResult.idx - props.queryResult.cntRows, 
          cntRows: props.queryResult.cntRows,
          data: [],
          count: props.queryResult.count,
          rowSelect: []
          }) } />
      </OverlayTrigger>
      <Pagination.Item>
        {props.queryResult.idx + 1}
        {' ... '}
        {props.queryResult.idx + props.queryResult.cntRows < props.queryResult.count ? 
          props.queryResult.idx + props.queryResult.cntRows : props.queryResult.count}
        {' из '}{props.queryResult.count}
      </Pagination.Item>
      {/* к выбранной странице списка */}
      {/* <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      {/* к следующей странице */}
      <OverlayTrigger
        key="go-next"
        placement="top"
        overlay={
          <Tooltip id={`tooltip-${"go-next"}`}>
            К следующей странице
          </Tooltip>
        }
      >
        <Pagination.Next onClick={() => 
        props.setQueryResult({
          result: false,
          idx: props.queryResult.count <= 0 ? 0 :
            props.queryResult.idx + props.queryResult.cntRows < props.queryResult.count ?
            props.queryResult.idx + props.queryResult.cntRows : props.queryResult.idx, 
          cntRows: props.queryResult.cntRows,
          data: [],
          count: props.queryResult.count,
          rowSelect: []
          }) } />
      </OverlayTrigger>
      {/* к последней странице */}
      <OverlayTrigger
        key="go-last"
        placement="top"
        overlay={
          <Tooltip id={`tooltip-${"go-last"}`}>
            К последней странице
          </Tooltip>
        }
      >
        <Pagination.Last onClick={() => 
        props.setQueryResult({
          result: false,
          idx: props.queryResult.count <= 0 ? 0 : 
            Math.ceil(props.queryResult.count / props.queryResult.cntRows) > 1 ?             
            (Math.ceil(props.queryResult.count / props.queryResult.cntRows) - 1) * props.queryResult.cntRows :
            props.queryResult.idx, 
          cntRows: props.queryResult.cntRows,
          data: [],
          count: props.queryResult.count,
          rowSelect: []
          }) } />
      </OverlayTrigger>      
    </Pagination>    
  );
}

function DataBaseToolBar(props) {
  const [showModalDlg, setShowModalDlg] = useState({show: false, addMode: false});  
  const [validatedModalDlg, setValidatedModalDlg] = useState(false);
  // form fields
  let valueName = "";
  let valueSurname = "";
  let valueAge = "";
  let valuePhone = "";

  if (!showModalDlg.addMode && props.queryResult.rowSelect.length > 0) {
    valueName = props.queryResult.rowSelect[0].Name;
    valueSurname = props.queryResult.rowSelect[0].Surname;
    valueAge = props.queryResult.rowSelect[0].Age;
    valuePhone = props.queryResult.rowSelect[0].Phone;
  }

  return (
    <>
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
                    <Popover.Header as="h3">Добавить</Popover.Header>
                    <Popover.Body>Добавить <strong>нового</strong> сотрудника.</Popover.Body>
                  </Popover>
                  }>
                  <Button variant="outline-primary"
                    onClick={() => {
                      setValidatedModalDlg(false);
                      setShowModalDlg({show: true, addMode: true})
                    }}
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
                    <Popover.Header as="h3">Изменить</Popover.Header>
                    <Popover.Body>
                        Изменить данные <strong>выбранного</strong> сотрудника.
                    </Popover.Body>
                  </Popover>
                  }>
                  <Button variant="outline-primary"
                    onClick={() => props.queryResult.rowSelect.length === 0 ? 
                      alert("Необходимо выбрать сотрудника.") :
                      setShowModalDlg({show: true, addMode: false})
                    }
                  >
                    <BsFillPersonLinesFill style={{color: "green"}} />
                  </Button>                                    
                </OverlayTrigger>
                <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" 
                  overlay={
                  <Popover id="popover-basic">
                    <Popover.Header as="h3">Удалить</Popover.Header>
                    <Popover.Body>
                        Удалить <strong>выбранного</strong> сотрудника.
                    </Popover.Body>
                  </Popover>
                  }>
                  <Button variant="outline-primary"
                  onClick={() => 
                  { 
                    if (props.queryResult.rowSelect.length === 0)                     
                      alert("Необходимо выбрать сотрудника.");
                    else {
                      if (window.confirm("Вы действительно хотите удалить сотрудника?")) {
                        // delete
                        changeDataDB("DELETE", 
                          props.queryResult.rowSelect, 
                          undefined, 
                          props.queryResult, 
                          props.setQueryResult, 
                          setShowModalDlg);                        
                      }  
                    }                    
                  }}
                  >
                    <BsFillPersonXFill style={{color: "red"}} />
                  </Button>
                </OverlayTrigger>
              </ButtonGroup>
            </ButtonToolbar>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Modal show={showModalDlg.show} onHide={() => setShowModalDlg({show: false, addMode: false})}>
      <Modal.Header closeButton>
        <Modal.Title>{showModalDlg.addMode ? "Добавить нового сотрудника" : "Изменить данные сотрудника"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="justify-content-md-center">
          <Col md="1"></Col>
          <Col md="10">            
            <Form noValidate validated={validatedModalDlg} 
              // стандартная bootstrap валидация при submit 
              // onSubmit={(event) => {
              //   const form = event.currentTarget;
              //   // при form.checkValidity() === true позволяет выполниться 
              //   // submit (перезагрузка страницы со сбросом сохраненных состояний 
              //   // и потерей параметров url)
              //   if (form.checkValidity() === false) {
              //     event.preventDefault();
              //     event.stopPropagation();
              //   }
              //   //отображает результат валидации
              //   setValidatedModalDlg(true);
              // }}
              onSubmit={(event) => {
                const form = event.currentTarget;
                //
                event.preventDefault();
                event.stopPropagation();
                //
                setValidatedModalDlg(true);
                //
                if (form.checkValidity() === true) {
                  // post/put
                  changeDataDB(showModalDlg.addMode ? "POST" : "PUT", 
                    props.queryResult.rowSelect, 
                    {
                      name: valueName,
                      surname: valueSurname,
                      age: valueAge,
                      phone: valuePhone
                    }, 
                    props.queryResult, 
                    props.setQueryResult, 
                    setShowModalDlg)
                }
              }}              
              >
              {/* input types: 
                  button
                  checkbox
                  color
                  date
                  datetime-local
                  email
                  file
                  hidden
                  image
                  month
                  number
                  password
                  radio
                  range
                  reset
                  search
                  submit
                  tel
                  text
                  time
                  url
                  week
              */}
                <Form.Group className="mb-3" controlId="ChangeName">
                    <Form.Label><strong>Имя</strong></Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control required type="text" 
                        maxLength={255}
                        placeholder="Введите имя" 
                        defaultValue={valueName} 
                        onChange={e => valueName = e.target.value}  
                      />
                      <Form.Control.Feedback type="invalid">
                        Пожалуйста введите имя.
                      </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ChangeSurname">
                    <Form.Label><strong>Фамилия</strong></Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control required type="text" 
                        maxLength={255}
                        placeholder="Введите фамилию" 
                        defaultValue={valueSurname} 
                        onChange={e => valueSurname = e.target.value}
                      />
                      <Form.Control.Feedback type="invalid">
                        Пожалуйста введите фамилию.
                      </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ChangeAge">
                    <Form.Label><strong>Возраст (полных лет)</strong></Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control required type="number" 
                        placeholder="Введите возраст" 
                        defaultValue={valueAge}                           
                        onChange={e => valueAge = parseInt(e.target.value) || 0}
                      />
                      <Form.Control.Feedback type="invalid">
                        Пожалуйста введите возраст (полных лет).
                      </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ChangePhone">
                    <Form.Label><strong>Телефон</strong></Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control required type="tel" 
                        placeholder="Введите телефон" 
                        defaultValue={valuePhone} 
                        onChange={e => valuePhone = e.target.value}
                      />
                      <Form.Control.Feedback type="invalid">
                        Пожалуйста введите телефон.
                      </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <hr />
                <Row>
                  <Col md={3}></Col>
                  <Col md={5}>
                    <Button type="submit" variant="outline-primary" >
                      <BsCheck2Circle style={{color: "green"}} />{' '}
                      Сохранить
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button variant="outline-primary" 
                      onClick={() => setShowModalDlg({show: false, addMode: false})}>
                      <BsXCircle style={{color: "red"}} />{' '}
                      Закрыть
                    </Button>
                  </Col>
                </Row>
            </Form>
          </Col>
          <Col md="1"></Col>
        </Row>                      
      </Modal.Body>
      {/* <Modal.Footer>
        <Button type="submit" variant="outline-primary" 
          onClick={() => setShowChange(false)}>
          <BsCheck2Circle style={{color: "green"}} />{' '}
          Сохранить
        </Button>                      
        <Button variant="outline-primary" onClick={() => setShowChange(false)}>
          <BsXCircle style={{color: "red"}} />{' '}
          Закрыть
        </Button>
      </Modal.Footer> */}
    </Modal>    
    </>                  
  )
}