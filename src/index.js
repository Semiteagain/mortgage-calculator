import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render( <App />,document.getElementById('root'));

// Create a mortgage calculator 
// purchase price  = P
// Equity 
// Repayment time =r 
// loan amount 
// Estimatec pr month


// The Inputs
// Start by gathering the information needed to calculate your payments and understand other aspects of the loan. You need the details below. The letter in parentheses tells you where we’ll use these items in calculations (if you choose to calculate this yourself, but you can also use online calculators):

// The loan amount (P) or principal, which is the home purchase price plus any other charges, minus the down payment
// The annual interest rate (r) on the loan, but beware that this is not necessarily the APR, because the mortgage is paid monthly, not annually, and that creates a slight difference between the APR and the interest rate
// The number of years (t) you have to repay, also known as the term
// The number of payments per year (n), which would be 12 for monthly payments
// The type of loan: fixed-rate, interest-only, adjustable, etc.
// The market value of the home
// Your monthly income
// Calculations for Different Loans
// The calculation you use depends on the type of loan you have. Most home loans are standard fixed-rate loans.1﻿﻿ For example, standard 30-year or 15-year mortgages keep the same interest rate and monthly payment for the life of the loan.


// For these fixed loans, use the formula below to calculate the payment.2

// ﻿﻿ Note that the carat (^) indicates that you’re raising a number to the power indicated after the carat.


// Payment = P x (r / n) x (1 + r / n)^n(t)] / (1 + r / n)^n(t) - 1


// Example Payment Calculation
// Assume you borrow $100,000 at 6% for 30 years, to be repaid monthly. What is the monthly payment? The monthly payment is $599.55.

// Plug those numbers into the payment formula:

// {100,000 x (.06 / 12) x [1 + (.06 / 12)^12(30)]} / {[1 + (.06 / 12)^12(30)] - 1}
// (100,000 x .005 x 6.022575) / 5.022575
// 3011.288 / 5.022575 = 599.55