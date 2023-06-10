import { useState } from "react";

interface ListProps {
  dataX: string[];
}

export const ItemList = ({ dataX }: ListProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = <div>There is nothing here</div>;

  const itemlist = dataX.map((datum, index) => (
    <button
      onClick={() => {
        setSelectedIndex(index);
        console.log(datum);
      }}
      className={selectedIndex === index ? "bg-blue-400" : "bg-red-600"}
    >
      {datum}
    </button>
  ));

  return (
    <>
      {dataX.length === 0 && message}
      {itemlist}
    </>
  );
};
