import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  
  render() {
    const {onReset , counters ,onDelete,onIncrement}=this.props;
    return (
      <div>
        <button
          onClick={onReset} // Use onReset passed from App
          className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            value={counter.value}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
