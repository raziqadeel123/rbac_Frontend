/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import React from "react";

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

const UserList = () => {
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle"> List of Users </h2>

      <table className="table is-striped is-fullwidth">
        <thead>
            <tr>
                <th>NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
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
  );
};

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default UserList;
