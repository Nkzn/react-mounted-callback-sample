import React, { useRef, useEffect } from 'react';
import { findDOMNode } from 'react-dom';

export default () => {

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const divElement = findDOMNode(divRef.current);
      const event = new CustomEvent('initializedWithHooksComponent', { detail: divElement });
      window.dispatchEvent(event);  
    }
  });

  return (
    <div ref={divRef}>
      This is hooks component.
    </div>
  )
}