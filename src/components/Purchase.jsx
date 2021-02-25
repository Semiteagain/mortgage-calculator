import React from 'react';



function Purchase() {
    return(
        <div>
         <div className="budget-feedback alert alert-danger text-capitalize">
                budget feedback
              </div>
              <form id="budget-form" className=" budget-form">
                <h5 className="text-capitalize">please enter your budget</h5>
                <div className="form-group">
                <input
                  type="number"
                  className="form-control budget-input"
                  id="budget-input"
                />
                </div>

                {/* <!-- submit button --> */}
                <button
                  type="submit"
                  class="btn text-capitalize budget-submit"
                  id="budget-submit"
                >
                  calculate
                </button>
              </form>

        </div>
    )
}



export default Purchase;