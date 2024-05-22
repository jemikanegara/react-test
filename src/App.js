import React from 'react';
import Test from './Test.js';

export default function App() {
  const [number, setNumber] = React.useState(2);
  const [arrayOfStrings, setArrayOfStrings] = React.useState([]);

  React.useEffect(() => {
    setInterval(() => {
      setNumber(2);
      setArrayOfStrings([])
    }, 1000);
  }, [])

  return (
    <div className="App">
      <Test number={number} arrayOfStrings={arrayOfStrings} />
    </div>
  );
}
