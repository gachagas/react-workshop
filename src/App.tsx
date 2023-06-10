import "./App.css";
import ExcerciseButton from "./components/solutions/ExcerciseButton";
import { ItemList } from "./components/ItemList";

const NAMES_A = ["Orange", "Blue", "Rose"];
const NAMES_B = ["Yellow", "Gray", "Pink"];
const NAMES_C = ["Red", "Purple", "Green"];

const COLORS_A = ["bg-orange-500", "bg-blue-300", "bg-rose-300"];
const COLORS_B = ["bg-yellow-300", "bg-slate-300", "bg-pink-400"];
const COLORS_C = ["bg-red-500", "bg-violet-400", "bg-green-300"];

function App() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <ItemList
          dataX={NAMES_A}
          dataY={COLORS_A}
        ></ItemList>
        <div>.................</div>
        <ItemList
          dataX={NAMES_B}
          dataY={COLORS_B}
        ></ItemList>
        <div>.................</div>

        <ItemList
          dataX={NAMES_C}
          dataY={COLORS_C}
        ></ItemList>
      </div>
    </>
  );
}

export default App;
