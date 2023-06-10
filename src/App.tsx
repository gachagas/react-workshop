import "./App.css";

import { ItemList } from "./components/ItemList";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <ItemList></ItemList>

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
