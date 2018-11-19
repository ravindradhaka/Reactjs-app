import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["row1","row2","row3"]
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({ count : this.state.count + 1 })
  };

  render(){
    console.log(this.props);
     return(
       <React.Fragment>
         <span className = "badge m-2 badge-warning" > { this.formatCount() } </span>
         <button onClick = {this.handleIncrement } className = "btn btn-secondary btn-sm"> Increment </button>
         <button onClick = {() => this.props.onDelete(this.props.id)} className = "btn btn-danger btn-sm"> delete </button>
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
