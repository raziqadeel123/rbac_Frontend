/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/Users";
import Products from "./Pages/Products";

/*-------------------------------------------------------------*/
/*Main*/
/*-------------------------------------------------------------*/

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/products" element={<Products/>}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default App;
