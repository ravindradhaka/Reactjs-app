import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 1
  };
  render(){
     return(
       <React.Fragment>
         <span> { this.formatCount() } </span>
         <button> click </button>
       </React.Fragment>
     );
  }

  formatCount(){
     const { count } = this.state;
     // console.log(count)
     return count === 0 ? "hii" : count;
  }
}
export default Counter
