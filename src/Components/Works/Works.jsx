import React, { useContext } from "react";
import "./Works.css";
import Fiverr from "../../img/fiverr.png";
import Facebook from "../../img/Facebook.png";
import Upwork from "../../img/Upwork.png";
import Shopify from "../../img/Shopify.png";
import Amazon from "../../img/amazon.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  const transiton = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="s-left">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          This is the simple and dummy text for testing. That's it!!
          <br />
          This is the simple and dummy text for testing. That's it!!
          <br />
          This is the simple and dummy text for testing. That's it!!
          <br />
          This is the simple and dummy text for testing. That's it!!
        </span>

        <button className="button s-button">Hire me</button>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={transiton}
          className="w-mainCircle"
          style={{ background: darkMode ? "gray" : "white" }}
        >
          <div
            className="sec-circle"
            style={{ background: darkMode ? "white" : "off-white" }}
          >
            <img src={Fiverr} atl="" />
          </div>
          <div
            className="sec-circle"
            style={{ background: darkMode ? "white" : "off-white" }}
          >
            <img src={Facebook} atl="" />
          </div>
          <div
            className="sec-circle"
            style={{ background: darkMode ? "white" : "off-white" }}
          >
            <img src={Upwork} atl="" />
          </div>
          <div
            className="sec-circle"
            style={{ background: darkMode ? "white" : "off-white" }}
          >
            <img src={Shopify} alt-text="this is shopify" />
          </div>
          <div
            className="sec-circle"
            style={{ background: darkMode ? "white" : "off-white" }}
          >
            <img src={Amazon} atl="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};
export default Works;
