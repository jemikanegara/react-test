import React from 'react';
import TestArray from './TestArray.js';
import TestNumber from './TestNumber.js';

// dont change this component
export default function App() {
  const [number, setNumber] = React.useState(2);
  const [arrayOfStrings, setArrayOfStrings] = React.useState([]);

  React.useEffect(() => {
    setInterval(() => {
      fetch('/data.json').then(res => res.json()).then(data => {
        setNumber(data.number);
        setArrayOfStrings(data.arrayOfStrings);
      })
    }, 1000);
  }, [])

  return (
    <div className="App">
      <TestNumber number={number} />
      <TestArray arrayOfStrings={arrayOfStrings} />
    </div>
  );
}
