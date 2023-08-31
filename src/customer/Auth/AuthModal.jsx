import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import RegisterForm from "./RegisterForm";
import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import {useEffect} from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const AuthModal=({ handleClose, open }) =>{
  const location = useLocation();
  // const { auth } = useSelector((store) => store);
  // useEffect(() => {
  //   if (auth.user) handleClose();
  // }, [auth.user]);
  return (
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      size="large"
    >
      <Box className="rounded-md" sx={style}>
        {location.pathname === "/login" ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </Box>
    </Modal>
    
    </div>
    
  );
}
export default AuthModal;
