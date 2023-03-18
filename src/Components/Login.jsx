/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/
import React from "react";

/*-------------------------------------------------------------*/
/*MAIN*/
/*-------------------------------------------------------------*/

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form className="box">
                <h1 className="title is-2">Sign In</h1>
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

                <div className="field mt-5 ">
                  <button className="button is-success is-fullwidth">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/

export default Login;
