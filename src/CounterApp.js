import PropTypes from "prop-types"
import { useState } from "react"


const CounterApp = ({ value = 5 }) => {
    const [counter, setCounter] = useState(value)

    const handleAdd = () => {
        setCounter((prevCounter => {
            return prevCounter + 1
        }))
        return counter
    }
    const handleReset = () => {
      setCounter(value)
      return counter;
    };
    const handleSubtract = () => {
      setCounter((prevCounter) => {
        return prevCounter - 1;
      });
      return counter;
    };

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </>
    )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp