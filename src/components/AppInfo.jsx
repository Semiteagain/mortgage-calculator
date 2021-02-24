import React from 'react'

function Appinfo(props) {
    

    return (
        <>
                  <div className="row my-3">
       <div className="col-4 text-center mb-2">
        <h6 className="text-uppercase info-title">budget</h6>
        <span className="budget-icon"><i className="fas fa-money-bill-alt"></i></span>
        <h4 className="text-uppercase mt-2 budget" id="budget"><span># </span><span id="budget-amount">0</span></h4>
       </div>
       <div className="col-4 text-center">
        <h6 className="text-uppercase info-title">expenses</h6>
        <span className="expense-icon"><i class="far fa-credit-card"></i></span>
        <h4 className="text-uppercase mt-2 expense" id="expense"><span># </span><span id="expense-amount">0</span></h4>
       </div>
       <div className="col-4 text-center">
        <h6 className="text-uppercase info-title">balance</h6>
        <span className="balance-icon"> <span># </span></span>
        <h4 className="text-uppercase mt-2 balance" id="balance"> <span># </span><span id="balance-amount">0</span></h4>
       </div>
      </div>
        </>
    )
}

export default Appinfo;
