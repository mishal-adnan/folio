import { Route, BrowserRouter } from 'react-router-dom'
import routes from './components/pages/index'
import React from 'react';
function App() {

  return (
      // <BrowserRouter>
      //     {
      //       routes.map((route, idx) => (
      //         <Route exact path={route.path} component={route.component} key={idx}></Route>
      //       ))
      //     }
      // </BrowserRouter>
      
<BrowserRouter basename={window.location.pathname || ''}>
  <Route exact path="/" component={Index} />
</BrowserRouter>
  );
}

export default App;
