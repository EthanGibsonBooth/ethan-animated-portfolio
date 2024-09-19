import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";



const Navbar = () => {

  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100009281416492">
          <img src="./facebook.png" alt="my image" />
          </a>
          <a href="https://www.linkedin.com/in/ethan-gibson-booth/">
            <img src="./linkedIn.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

