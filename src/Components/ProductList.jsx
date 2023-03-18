/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import React from "react";

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

const ProductList = () => {
  return <div>
     <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle"> List of Products </h2>

      <table className="table is-striped is-fullwidth">
        <thead>
            <tr>
                <th>NO</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Created By</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>;
};
/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default ProductList;
