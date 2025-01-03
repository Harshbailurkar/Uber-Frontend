import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { getUser } from "../API/userAPI";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/Slices/userSlice.js";
function UserProtectedWrapper() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
    const fetchUser = async () => {
      await getUser(token)
        .then((data) => {
          dispatch(
            setUser({
              email: data.data.email,
              fullName: {
                firstName: data.data.fullName.firstName,
                lastName: data.data.fullName.lastName,
              },
            })
          );
        })
        .catch((error) => {
          localStorage.removeItem("token");
          navigate("/login");
        });
    };
    fetchUser();
  }, [token, navigate]);

  return <Outlet />;
}

export default UserProtectedWrapper;
