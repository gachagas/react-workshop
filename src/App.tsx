import "./App.css";

import { ItemList } from "./components/ItemList";

const GEMSTONES = ["aqua", "ruby", "opal", "sapphire", "jade"];
const BIRTHDAYS = ["Jan5", "Feb6", "Mar7"];

function App() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <ItemList dataX={GEMSTONES}></ItemList> //gemstones
        <ItemList dataX={BIRTHDAYS}></ItemList> //birthdays
        {/* <ItemList></ItemList>
        <ItemList></ItemList>
        <ItemList></ItemList>
        <ItemList></ItemList>
        <ItemList></ItemList> */}
      </div>
    </>
  );
}

export default App;
