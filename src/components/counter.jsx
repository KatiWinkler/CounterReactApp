import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   count: 0,
  //   value: this.props.counter.value,
  //   imgUrl: "https://picsum.photos/200" //GENERATES A RANDOM IMAGE
  // };

  // handleIncrement = product => {
  //   console.log(product);
  //   this.setState({ count: this.state.count + 1 });
  // };

  // doHandleIncrement = () => {
  //   this.handleIncrement({ id: 1 });
  // };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };


 render() { 
   return (
     <div>
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
       <button
         onClick={() => this.props.onIncrement(this.props.counter)}
         className="btn btn-secondary btn-sm"
       >
         Increment
       </button>
       <button 
       onClick={() => this.props.onDelete(this.props.counter.id)} 
       className="btn btn-danger btn-sm m-2">
         Delete
      </button>
     </div>
   );
}
};

export default Counter;
