import { useState } from "react";

const GEMSTONES = ["aqua", "ruby", "opal", "sapphire", "jade"];

export const ItemList = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = <div>There is nothing here</div>;

  const itemlist = GEMSTONES.map((datum, index) => (
    <button
      onClick={() => console.log(datum)}
      className="bg-red-800"
    >
      {datum}
    </button>
  ));

  return (
    <>
      {GEMSTONES.length === 0 && message}
      {itemlist}
    </>
  );
};
