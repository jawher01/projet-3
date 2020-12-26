import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../js/actions/user";
import { useHistory } from "react-router-dom";
import Navbar from "../NavBar"




const Dashbord = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <Navbar/>
      <button
        onClick={() => {
          dispatch(logout());
          history.push("/");
        }}
      >
        Logout
      </button>
    dashbord
    </div>
  );
};

export default Dashbord;
