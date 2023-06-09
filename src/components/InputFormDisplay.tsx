import { useState } from "react";

const InputFormDisplay = () => {
  const [formValue, setFormValue] = useState<string>("");

  return (
    <>
      <input
        type="text"
        value={formValue}
        onChange={(event) => setFormValue(event.target.value)}
      ></input>
      <div>{formValue}</div>
    </>
  );
};

export default InputFormDisplay;
