import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';


function App() {
  return (
   <>
   <div className='container'>
     <div className='row'>
       <div className="col-11 mx-auto pt-3">
       <h3 class="text-uppercase text-left mb-5 mt-5">Mortgage Calculator</h3>



       <div className='row mb-5'>
       <div className="col-md-4 my-3 purchase"> 
       <h5>Purchase price</h5>
       <input type='range' max='300' min='20'/>

       </div>




       <div className="col-md-4 my-3 equity"> <h5>Equity</h5>
       <input type='range' max='300' min='20'/>
         </div>




       <div className="col-md-4 my-3 repayment"><h5>Repayment time</h5>
       <input type='range' max='300' min='20'/>
        </div>
       </div>


       <div className='row'>
         <div className='col-4 my-2'><h5>loan amount</h5></div> 



         <div className='col-4 my-2'> <h5>Estimated per month</h5></div> 
       </div>


        <div className='row'>
        <div className="col-11 mx-auto pt-3">
        <h3 class="text-uppercase text-left mb-5 mt-5">
          <button className='btn btn-primary'>Get a Mortage Loan</button>
        </h3>
        </div>
        </div>





       </div>
     </div>
   </div>
   </>
  );
}

export default App;


{/* <div className="container">
<div className="row">
  <div className="col-11 mx-auto pt-3">
    title
    <h3 class="text-uppercase text-center mb-5">Mortgage Calculator</h3>
    <div className="row">
      <div className="col-md-5 my-3">
      <Purchase />
      </div>
      <div className="col-md-7">
      <!-- app info -->
          <Appinfo />
  
      </div>
    </div>


    <div className="row">
      <Expense />
    </div>

    


  
  </div>
</div>




</div> */}