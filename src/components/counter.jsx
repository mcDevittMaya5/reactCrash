import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    // tags: [],
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  //kinda out of date and looks gross
  // }

  //this behaves differently in javascript it can ref different things
  handleIncrement = () => {
    //using an arrow function
    // console.log("increnemnt clicked", this);
    //obj.method();
    //function();
    //we dont have access to this use bind method
    this.setState({ count: this.state.value + 1 });
    //setState() scheduals a render method t happens in the FuTuRe
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        <li>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "please create a new tag"} */}
        {/* {this.renderTags()}; */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
