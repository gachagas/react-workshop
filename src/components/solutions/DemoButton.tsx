import { ReactNode, useState } from "react";

interface CompletedButtonProps {
  data: string[];
  label?: string;
  loggers: (item: string) => void;
  children?: ReactNode;
}

const CompletedButton = ({ data, loggers, children }: CompletedButtonProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <>
      {data.map((datum, index) => (
        <div key={index}>
          <button
            onClick={() => {
              setSelectedIndex(index);
              console.log(index);
              loggers(datum);
            }}
            className={`text-white-800 bg-slate-700 w-[180px] ${
              selectedIndex === index ? "opacity-60" : "opacity-100"
            }`}
          >
            {datum} {children}
          </button>
        </div>
      ))}
      {selectedIndex > -1 && <div>You selected {data[selectedIndex]}</div>}
    </>
  );
};

export default CompletedButton;
