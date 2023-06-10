import { useState } from "react";

interface ListProps {
  dataX: string[];
  dataY: string[];
}

export const ItemList = ({ dataX, dataY }: ListProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = <div>There is nothing here</div>;

  const youSelectedMessage = <div>You Selected Thingy</div>;

  const itemlist = dataX.map((datum, index) => (
    <button
      onClick={() => {
        setSelectedIndex(index);
        console.log(datum);
      }}
      className={selectedIndex === index ? "bg-blue-700" : dataY[index]}
    >
      {datum}
    </button>
  ));

  return (
    <>
      {dataX.length === 0 && message}
      {itemlist}
      {selectedIndex > -1 ? dataX[selectedIndex] : null}
    </>
  );
};
