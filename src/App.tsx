import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App ">
      <div className="flex pb-10">
        <div className="w-2/3 h-[90vh]"> Hello</div>
        <div className="w-1/3 h-[90vh]"> World</div>
      </div>
    </div>
  );
}

export default App;
