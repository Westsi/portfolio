import Terminal, {updateLines} from "./terminal";
import Art2 from "./art2";

function App() {
  return (
    <div className="App">
      <Terminal />
      <button onClick = {updateLines("1")}>Click me!</button>
    </div>
  );
}

export default App;
