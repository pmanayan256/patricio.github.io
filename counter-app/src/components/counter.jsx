import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("Prev Props", prevProps);
    console.log("Prev State", prevState);
    if (prevProps.counter.value !== this.props.counter.valule) {
      /* Ajax call and get new data from the server */
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  /*  state = {
    count: this.props.counter.value,
    tags: ["  Value  "]
  }; */
  /* 
  use below 
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  or this
   handleIncrement = () =>
  */
  /* handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  }; */
  renderTags() {
    console.log("Counter - Rendered");
    return (
      <ul>
        <li>
          <span className="btn btn-primary btn-sm m-2">
            {this.formatCount()}
          </span>
          TEST
          <span
            className="btn btn-secondary btn-sm m-2"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            +
          </span>
          <span
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            -
          </span>
        </li>
      </ul>
    );
  }
  render() {
    return <React.Fragment>{this.renderTags()}</React.Fragment>;
  }

  formatCount() {
    const count = this.props.counter.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
