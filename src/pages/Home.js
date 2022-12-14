import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {

  return (
    <Row>
      <Col>
        <div>
          <h1>ООО "КорпТех"</h1>
          <p>Добро пожаловать в ваше новое приложение, созданное с использованием 
            следующего стека технологий:
          </p>
          <ul>
            <li><code>React</code> - для кода на стороне клиента</li>
            <li><code>Bootstrap</code> - для верстки и стилизации страниц приложения</li>
          </ul>
          <p>В этом приложении реализованы:</p>
          <ul>
            <li>
              <strong>Навигация на стороне клиента</strong>.
            </li>
            <li>
              <strong>Демонстрация основных возможностей React-Bootstrap</strong>. React-Bootstrap - это полная повторная реализация компонентов Bootstrap с использованием React. React-Bootstrap не зависит ни от bootstrap.js, ни от jQuery. Если у вас установлены React и React-Bootstrap, у вас есть все, что вам нужно. В отличие от jQuery, React использует обновления состояния для обновления виртуального DOM. Таким образом, React-Bootstrap обеспечивает более надежное решение. В этом приложении приведены примеры того, как компоненты React-Bootstrap реализуют необходимую нам функциональность приложения.
            </li>
            <li>
              <strong>Эффективная сборка production версии решения</strong>. В production версии решения, возможности разработки отключены, и <code>dotnet publish</code> эффективно упаковывает (минимизирует) JavaScript файлы проекта.
            </li>
          </ul>
          <p>
            Код на стороне клиента в этом приложении <code>React application</code> базируется на типовом <code>create-react-app</code> шаблоне. Если открыть командную строку в подпапке приложения <code>ClientApp</code>, можно выполнять команды <code>npm</code> такие как: <code>npm test</code> или <code>npm install</code>.
          </p>
        </div>
      </Col>
    </Row>
  );
}
