import "./App.css";
import react from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p1>copyright ©{year}</p1>
    </div>
  );
};
export default Footer;
