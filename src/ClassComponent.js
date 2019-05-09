import React from 'react';

export default class ClassComponent extends React.Component {
  componentDidMount() {
    if (this.ref) {
      const event = new CustomEvent('initializedWithClassComponent', { detail: this.ref });
      window.dispatchEvent(event);
    }
  }

  render() {
    return (
      <div className="class-div" ref={ref => this.ref = ref}>
        This is class component.
      </div>
    )
  }
}