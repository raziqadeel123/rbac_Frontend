
/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import React from 'react';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import Dashboard from './Pages/Dashboard';


/*-------------------------------------------------------------*/
/*Main*/
/*-------------------------------------------------------------*/

function App() {
  return (
    <div>
  <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
  </BrowserRouter>
    </div>
  );
}


/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default App;
