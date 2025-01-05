import React from "react";

function CaptainDetails() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start gap-4 mt-2">
        <img
          className="h-14 w-14 rounded-full object-cover "
          src="https://avatars.githubusercontent.com/u/113308692?v=4"
          alt=""
        />
        <h4 className="text-lg font-medium">Harsh Bailurkar</h4>
      </div>
      <div>
        <h4 className="text-xl font-semibold">₹759.80</h4>
        <p className="text-sm text-gray-600">Earned</p>
      </div>
    </div>
  );
}

export default CaptainDetails;
