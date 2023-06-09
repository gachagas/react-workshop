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
        <div>
          <button
            onClick={() => {
              setSelectedIndex(index);
              console.log(index);
              loggers(datum);
            }}
            className={`text-slate-100 w-[180px] ${selectedIndex === index ? "bg-slate-700" : "bg-slate-900"}`}
          >
            {datum} {children}
          </button>
        </div>
      ))}
    </>
  );
};

export default CompletedButton;
