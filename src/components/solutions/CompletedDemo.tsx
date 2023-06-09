import "./App.css";
import CompletedButton from "./components/solutions/DemoButton";

const GEMSTONES = ["Aquamarine", "Ruby", "Emerald", "Sapphire", "a"];

function App() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <CompletedButton
          data={GEMSTONES}
          loggers={(x) => console.log("You console selected " + x)}
        />
        <div>......................................</div>
      </div>
    </>
  );
}

export default App;
