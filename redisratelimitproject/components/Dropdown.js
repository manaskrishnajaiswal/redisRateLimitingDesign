import { useState } from "react";

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  console.log("value: ", selectedOption.requests);
  const handleOptionChange = (event) => {
    const selectedValue = JSON.parse(event.target.value);
    setSelectedOption(selectedValue);
  };

  return (
    <div className="flex items-center">
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <label htmlFor="dropdown" className="mr-2">
            <span className="font-bold">Select an option:</span>
          </label>
          <select
            id="dropdown"
            className="p-2 border border-gray-300 rounded"
            value={JSON.stringify(selectedOption)}
            onChange={handleOptionChange}
          >
            <option value={JSON.stringify({ requests: 5, seconds: 10 })}>
              5 requests / 10 seconds
            </option>
            <option value={JSON.stringify({ requests: 10, seconds: 10 })}>
              10 requests / 10 seconds
            </option>
            <option value={JSON.stringify({ requests: 15, seconds: 10 })}>
              15 requests / 10 seconds
            </option>
            <option value={JSON.stringify({ requests: 20, seconds: 10 })}>
              20 requests / 10 seconds
            </option>
          </select>
        </div>
        <div className="items-center">
          <p className="ml-2">
            <span className="font-bold">Selected option:</span>{" "}
            {selectedOption.requests} requests in {selectedOption.seconds}{" "}
            seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
