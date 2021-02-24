import React from "react";
import Purchase from "./components/Purchase";
import "bootstrap/dist/css/bootstrap.min.css";
import Appinfo from "./components/AppInfo";
import './index.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-11 mx-auto pt-3">
          {/* title */}
          <h3 class="text-uppercase text-center mb-5">Mortgage Calculator</h3>
          <div className="row">
            <div className="col-md-5 my-3">
            <Purchase />
            </div>
            <div className="col-md-7">
            {/* <!-- app info --> */}
                <Appinfo />
        
            </div>
          </div>



          <div className="row">
     <div className="col-md-5 my-3">
      {/* <!-- expense feedback --> */}
      <div className="expense-feedback alert alert-danger text-capitalize">expense feedback</div>
      {/* <!-- expense form --> */}
      <form id="expense-form" className=" expense-form">
       <h5 className="text-capitalize">please enter your expense</h5>
       <div className="form-group">
        <input type="text" className="form-control expense-input" id="expense-input" />
       </div>
       <h5 className="text-capitalize">please enter expense amount</h5>
       <div className="form-group">
        <input type="number" class="form-control expense-input" id="amount-input" />
       </div>
       {/* <!-- submit button --> */}
       <button type="submit" class="btn text-capitalize expense-submit" id="expense-submit">add expense</button>
      </form>
     </div>
     <div className="col-md-7 my-3">
      {/* <!-- expense list --> */}
      <div className="expense-list" id="expense-list">

       <div className="expense-list__info d-flex justify-content-between text-capitalize">
        <h5 className="list-item">expense title</h5>
        <h5 className="list-item">expense value</h5>
        {/* <h5 className="list-item"></h5> */}
       </div>
             
     </div>
     </div>
     </div>
           </div>
        
        </div>
      </div>




 
  );
}

export default App;
