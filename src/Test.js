import React from "react";

export default function Test({ numbers, arrayOfObject }) {
  const [numbersState, setNumbersState] = React.useState(numbers);
  const [arrayState, setArrayState] = React.useState(arrayOfObject);

  React.useEffect(() => {
    setNumbersState([...numbers, 6, 7, 8]);
  }, [numbers]);

  React.useEffect(() => {
    setArrayState([...arrayOfObject, "e", "d", "f"]);
  }, [arrayOfObject]);

  return (
    <div className="App">
      {numbersState}{" "}
      {arrayState.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}
