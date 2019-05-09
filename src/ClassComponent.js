import React from 'react';
import { findDOMNode } from 'react-dom';

export default class ClassComponent extends React.Component {
  componentDidMount() {
    if (this.ref) {
      const divElement = findDOMNode(this.ref);
      const event = new CustomEvent('initializedWithClassComponent', { detail: divElement });
      window.dispatchEvent(event);
    }
  }

  render() {
    return (
      <div ref={ref => this.ref = ref}>
        This is class component.
      </div>
    )
  }
}