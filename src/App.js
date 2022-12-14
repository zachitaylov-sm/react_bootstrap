import React from 'react';
//npm i react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
//
import AppRoutes from './AppRoutes';
// import Home from "./pages/Home";
// import Forms from "./pages/Forms";
// import FormsAsRow from "./pages/FormsAsRow";
// import FormsValidation from "./pages/FormsValidation";
// import BootstrapComponents from "./pages/BootstrapComponents";
// import PostgreSQL from "./pages/PostgreSQL";

export default function App() {

  return (
    <Layout>
      {/* <BrowserRouter base={'/'}> */}
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
            //const { element, ...routeParams } = route;
            //return (
            //  <Route key={index} 
            //    path={!routeParams.path ? '/' : routeParams.path} 
            //    index={!routeParams.index ? false : routeParams.index} 
            //    element={element} />
            //    );
          })}
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/forms' element={<Forms />} />
              <Route path='/formsAsRow' element={<FormsAsRow />} />
              <Route path='/formsValidation' element={<FormsValidation />} />
              <Route path='/bootstrapComponents' element={<BootstrapComponents />} />
              <Route path='/postgreSQL' element={<PostgreSQL />} />
          </Routes>
      </BrowserRouter> */}
    </Layout>    
  );
}

//import logo from './logo.svg';
//import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
