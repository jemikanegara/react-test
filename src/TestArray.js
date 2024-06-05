import React from "react";
import "./App.css";

let renderCount = 0;

// This component must render:
// the arrayOfStrings prop with 3 additional items: "additional 1, ", "additional 2, ", "additional 3"
// so the rendered array will be: ["first, ", "second, ", "third, ", "additional 1, ", "additional 2, ", "additional 3"]

// GOAL:
// - stop the infinite rerender bug

// DONT:
// - change the renderCount variable
// - change the arrayOfStrings prop

export function TestArray({ arrayOfStrings }) {
  const [children, setChildren] = React.useState(arrayOfStrings);

  React.useEffect(() => {
    setChildren([...arrayOfStrings, "additional 1, ", "additional 2, ", "additional 3"]);
  }, [arrayOfStrings]);

  return (
    <div className="Test">
      <TestArrayViewMemo>
        {children}
      </TestArrayViewMemo>
    </div>
  );
}

function TestArrayView({ children }) {
  renderCount++; // dont change this

  return (
    <div>
      <div>Array: {children}
      </div>
      <div>rendered {renderCount} times</div>
    </div>
  )
}

const TestArrayViewMemo = React.memo(TestArrayView);

export default React.memo(TestArray);
