import React from "react";
import "./App.css";

let renderCount = 0;

// This component must render:
// the number prop plus 2 (number + 2 = 4)

// GOAL:
// - optimize rerender count (2 is the expected number of rerenders if you run this in development mode)

// DONT:
// - change the renderCount variable
// - change the number prop

export function TestNumber({ number }) {
  const [theNumber, setTheNumber] = React.useState(number);

  React.useEffect(() => {
    setTheNumber(number + 2);
  }, [number]);

  renderCount++; // dont change this

  return (
    <div className="Test">
      <div>
      <div>Number: {theNumber}</div>
      <div>rendered {renderCount} times</div>
    </div>
    </div>
  );
}

export default React.memo(TestNumber);
