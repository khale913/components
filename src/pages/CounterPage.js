import React, { useReducer } from "react";

import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  // increment count
  if (action.type === "increment-count") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  // decrement count
  if (action.type === "decrement-count") {
    return {
      ...state,
      count: state.count - 1,
    };
  }

  if (action.type === "change-value-to-add") {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  }

  // default state return
  return state;
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: "increment-count",
    });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: "decrement-count",
    });
  };

  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: "change-value-to-add",
      payload: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      {/* testing comment */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
