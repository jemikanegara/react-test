import React from "react";

let renderCount = 0;

export function Test({ number, arrayOfStrings }) {
  const [numberState, setNumberState] = React.useState(number);
  const [arrayState, setArrayState] = React.useState(arrayOfStrings);

  React.useEffect(() => {
    setNumberState(number + 2);
  }, [number]);

  React.useEffect(() => {
    setArrayState([...arrayOfStrings, "e", "d", "f"]);
  }, [arrayOfStrings]);

  renderCount++;

  return (
    <div className="App">
      {numberState}{" "}
      {arrayState.map((item) => (
        <div key={item}>{item}</div>
      ))}
      rendered {renderCount} times
    </div>
  );
}

export default Test;
