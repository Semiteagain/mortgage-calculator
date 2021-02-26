


// Payment = P x (r / n) x (1 + r / n)^n(t)] / (1 + r / n)^n(t) - 1
// p mean payment amount;
// r mean intreast rate;
// n convert years to month
// (r * p  * (Math.pow(1 + r), n)) / ((Math.pow(1 + r), n) - 1)




















//   constructor() {
  //     super();
  //     this.state = {
  //       result: 0,
  //       value1: 0,
  //       value2: 0
  //     };
  //   }
  
  //   handleInput = e => {
  //     const { name, value } = e.target;
  
  //     this.setState(state => ({
  //       [name]: value
  //     }));
  
  //     this.setPercentage();
  //   };
  
  //   setPercentage = () => {
  //     this.setState(state => {
  //       const result = (state.value1 * 100) / state.value2;
  
  //       if (!isNaN(result) && result !== Infinity) {
  //         return {
  //           result
  //         };
  //       } else {
  //         return {
  //           result: "Invalid value"
  //         };
  //       }
  //     });
  //   };
  
  //   render() {
  //     return (
  //       <div className="App">
  //         <header>
  //           <h1>Percentage calculator</h1>
  //         </header>
  //         <div className="percentage-calculator">
  //           {"The"}
  //           <input
  //             onChange={this.handleInput}
  //             name="value1"
  //             type="text"
  //             placeholder="%"
  //             value={this.state.value1}
  //           />
  //           {"% of"}
  //           <input
  //             onChange={this.handleInput}
  //             name="value2"
  //             type="text"
  //             placeholder="x"
  //             value={this.state.value2}
  //           />
  //         </div>
  //         <h3>Result</h3>
  //         <h2 className="result-display">{this.state.result}</h2>
  //       </div>
  //     );
  //   }
  // }
