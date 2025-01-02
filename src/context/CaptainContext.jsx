import React from "react";

export const CaptainDataContext = React.createContext();
function CaptainContext({ children }) {
  const [captain, setCaptain] = React.useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
    vehical: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
  });
  return (
    <div>
      <CaptainDataContext.Provider value={[captain, setCaptain]}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
}

export default CaptainContext;
