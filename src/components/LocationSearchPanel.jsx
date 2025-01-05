import React from "react";
import { IoLocation } from "react-icons/io5";

function LocationSearchPanel({
  vehiclePanel,
  setVehiclePanel,
  suggestions,
  onSuggestionClick,
  inputType,
}) {
  return (
    <div>
      {Array.isArray(suggestions.data) &&
        suggestions.data.map((data, index) => {
          return (
            <div
              className="flex active:border-2 p-2 rounded-xl items-center space-x-2 mb-1 justify-start"
              onClick={() => onSuggestionClick(data, inputType)}
              key={index}
            >
              <h2 className="bg-[#eee] p-3 rounded-full">
                <IoLocation />
              </h2>
              <h4 className="font-medium">{data.description}</h4>
            </div>
          );
        })}
    </div>
  );
}

export default LocationSearchPanel;
