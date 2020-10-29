import React, { useState } from 'react';
import '../../App.css';
import TopExample from '../top/TopExample';

// *******************************************************
// CORE APP
// *******************************************************

function Nested() {
  const [count, setCount] = useState(0);
  const [displayTopExample, setDisplayTopExample] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleToggleClick = () => {
    if (displayTopExample) {
      setDisplayTopExample(false);
    } else {
      setDisplayTopExample(true);
    }
  };

  return (
    <div>
      <h1>Hooks Practice</h1>
      <button onClick={handleClick}>Increment Own Counter</button>
      <button onClick={handleDecrement}>Decrement Own Counter</button>
      <p>App Counter: {count}</p>
      <FirstNestedComponent handleClick={handleClick} />
      <button className="top-toggle" onClick={handleToggleClick}>
        Toggle Top Example
      </button>
      <DisplayTopExample displayTopExample={displayTopExample} />
    </div>
  );
}

// *************************************************************

function FirstNestedComponent(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 2);
  };

  const onClick = () => {
    props.handleClick();
  };

  return (
    <div>
      <h2>First Nested Component</h2>
      <p>First Nested Counter: {count}</p>
      <button onClick={handleClick}>Increment Own Counter</button>
      <button onClick={onClick}>Increment App Count</button>
      <SecondNestedComponent
        click={props.handleClick}
        handleClick={handleClick}
      />
    </div>
  );
}

// ***************************************************************

function SecondNestedComponent(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 3);
  };

  const click = () => {
    console.log('Second Component Clicked');
    props.click();
  };

  const otherClick = () => {
    console.log('Second Component first counter clicked');
    props.handleClick();
  };

  return (
    <div>
      <h2>Second Nested Component</h2>
      <p>Second Nested Counter: {count}</p>
      <button onClick={handleClick}>Increment Own Counter</button>
      <button onClick={otherClick}>Increment First Nested Counter</button>
      <button onClick={click}>Increment App Counter</button>
      <ThirdNestedComponent />
    </div>
  );
}

// ****************************************************************
function ThirdNestedComponent(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Third Nested Component</h2>
      <p>Third Nested Counter: {count}</p>
      <button onClick={() => setCount(count + 4)}>Increment Own Counter</button>
    </div>
  );
}

// ****************************************************************
function DisplayTopExample(props) {
  const displayTopExample = props.displayTopExample;
  if (displayTopExample) {
    return <TopExample />;
  }
  return null;
}

export default Nested;
