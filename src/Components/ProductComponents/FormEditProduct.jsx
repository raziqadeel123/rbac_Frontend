
/*-------------------------------------------------------------*/
/*IMPORTS*/
/*-------------------------------------------------------------*/
import React from 'react'
/*-------------------------------------------------------------*/
/*DECLARATION AND INITIALIZATION*/
/*-------------------------------------------------------------*/

const FormEditProduct = () => {
    return (
        <div>
        <h1 className="title"> Products</h1>
        <h2 className="subtitle">Edit Product</h2>
        <div className="card is-shadowless">
          <div className="card-content">
            <div className="content">
              <form>
                <p className="has-text-centered"></p>
                <div className="field">
                  <label className="label">Product Name</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Product Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Price</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      placeholder="Product Name"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-success">
                      Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

/*-------------------------------------------------------------*/
/*EXPORTS*/
/*-------------------------------------------------------------*/


export default FormEditProduct