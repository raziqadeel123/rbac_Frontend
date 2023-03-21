/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Pages/Dashboard";
import Users from "./Pages/UserPages/Users";
import Products from "./Pages/ProductPages/Products";
import AddUser from "./Pages/UserPages/AddUser";
import EditUser from "./Pages/UserPages/EditUser";
import AddProduct from "./Pages/ProductPages/AddProduct";
import EditProduct from "./Pages/ProductPages/EditProduct";
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
          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/add" element={<AddUser />}></Route>
          <Route path="/users/edit/:id" element={<EditUser />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/add" element={<AddProduct />}></Route>
          <Route path="/products/edit/:id" element={<EditProduct />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default App;
