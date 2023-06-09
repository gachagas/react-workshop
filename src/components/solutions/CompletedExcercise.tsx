import "./App.css";
import ExcerciseButton from "./components/solutions/ExcerciseButton";

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
        <ExcerciseButton
          data={NAMES_A}
          loggers={(x) => console.log("You Have selected " + x)}
          colors={COLORS_A}
        />
        <div>......................................</div>
        <ExcerciseButton
          data={NAMES_B}
          loggers={(x) => console.log("You Have selected " + x)}
          colors={COLORS_B}
        />
        <div>......................................</div>
        <ExcerciseButton
          data={NAMES_C}
          loggers={(x) => console.log("You Have selected " + x)}
          colors={COLORS_C}
        />
      </div>
    </>
  );
}

export default App;
