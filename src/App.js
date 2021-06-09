import React, { useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;
  console.log(name, price);

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: state.price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: state.price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "サンプル",
  price: 1000
};
export default App;
