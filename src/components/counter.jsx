import React, { Component } from "react";

class Counter extends Component {
  
  formatCount = () => {
    const { value } = this.props;
    return value === 0 ? "Zero" : value;
  };

  render() {
    const { onIncrement, onDelete, id, value } = this.props;

    return (
      <div>
        <span className="badge m-2 badge-primary">{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(this.props)}
          className="btn btn-secondary btn-sm">
          Increment
        </button>
        <button
          onClick={() => onDelete(id)}
          className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
