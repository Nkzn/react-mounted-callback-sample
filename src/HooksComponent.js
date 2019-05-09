import React, { useRef, useEffect } from 'react';

export default () => {

  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const event = new CustomEvent('initializedWithHooksComponent', { detail: divRef.current });
      window.dispatchEvent(event);  
    }
  });

  return (
    <div className="hooks-div" ref={divRef}>
      This is hooks component.
    </div>
  )
}