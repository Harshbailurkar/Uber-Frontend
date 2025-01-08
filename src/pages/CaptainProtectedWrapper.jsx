import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCaptain } from "../redux/Slices/captainSlice";
import { getCaptain } from "../API/captainAPI";
function CaptainProtectedWrapper() {
  const token = localStorage.getItem("ctoken");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!token) {
      return navigate("/captain-login");
    }
    const fetchCaptain = async () => {
      await getCaptain(token)
        .then((data) => {
          localStorage.setItem("captainId", data.data._id);
          dispatch(
            setCaptain({
              email: data.data.email,
              fullName: {
                firstName: data.data.fullName.firstName,
                lastName: data.data.fullName.lastName,
              },
              vehical: {
                color: data.data.vehical.color,
                plate: data.data.vehical.plate,
                capacity: data.data.vehical.capacity,
                vehicleType: data.data.vehical.vehicleType,
              },
              status: data.data.status,
            })
          );
        })
        .catch((error) => {
          localStorage.removeItem("ctoken");
          navigate("/captain-login");
        });
    };
    fetchCaptain();
  }, [token, navigate]);
  return <Outlet />;
}

export default CaptainProtectedWrapper;
