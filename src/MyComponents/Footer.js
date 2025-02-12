import React from "react";

export const Footer = () => {
  let FooterStyle = {
    position: "absolute",
    width: "100%",
    marginTop: "15px",
    height: "60px"
  };
  return (
    <footer className="bg-dark text-light py-3 " style={FooterStyle}>
      <p className="text-center">Copyright &copy; MyTodoslsit.com</p>
    </footer>
  );
};
