/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/

import React from "react";

/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

const FormEditUser = () => {
  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle"> Edit an User</h2>

      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form>
              <div className="field">
                <label className="label"> Name </label>
                <div className="control">
                  <input tyoe="text" className="input" placeholder="Name" />
                </div>
              </div>

              <div className="field">
                <label className="label"> Email </label>
                <div className="control">
                  <input tyoe="text" className="input" placeholder="email" />
                </div>
              </div>

              <div className="field">
                <label className="label"> Password </label>
                <div className="control">
                  <input
                    tyoe="password"
                    className="input"
                    placeholder="*****"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label"> Password Confirmation </label>
                <div className="control">
                  <input
                    tyoe="password"
                    className="input"
                    placeholder="*****"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label"> Role </label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select name="" id="">
                      <option value="admin">Admin</option>
                      <option value="user">User</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-success is-fullwidth">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default FormEditUser;
