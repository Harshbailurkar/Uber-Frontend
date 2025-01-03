import React from "react";
import { IoLocation } from "react-icons/io5";
function LocationSearchPanel({ vehiclePanel, setVehiclePanel }) {
  //sample array of location
  const locations = [
    "151-A vyankatesh galli ajara, 416505",
    "123-C Near somanath nagar , viman nagar pune, 421102",
    "121-G Viraj PG , viman nagar pune, 421102",
    "321-H Viraj Heights , viman nagar pune, 421102",
  ];
  return (
    <div>
      {/* this is sample data */}
      {locations.map((data, index) => {
        return (
          <div
            className="flex active:border-2 p-3 rounded-xl items-center space-x-2 mb-2 justify-start"
            onClick={() => setVehiclePanel(!vehiclePanel)}
            key={index}
          >
            <h2 className="bg-[#eee] p-3 rounded-full">
              <IoLocation />
            </h2>
            <h4 className="font-medium">{data}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default LocationSearchPanel;
