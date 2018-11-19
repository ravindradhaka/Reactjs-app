import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 1,
    tags: ["row1","row2","row3"]
  };
  render(){
     return(
       <React.Fragment>
         <span> { this.formatCount() } </span>
         <button> click </button>
         <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
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
