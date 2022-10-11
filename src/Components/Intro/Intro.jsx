import { React, useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import Crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const intro = () => {
  const transiton = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Zain Ul Abedin</span>
          <span>
            Front-End Developer with no Experience in web designing and
            development
          </span>
        </div>
        <button className="button i-button">Hire me!</button>
        <div className="i-icons">
          <a href="https://github.com/xlab0o7">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/zain-ul-abedin-78951aa8/">
            <img src={LinkedIn} alt="" />
          </a>
          <a href="www.instagram.com">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-26%" }}
          transiton={transiton}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ left: "75%", top: "-4%" }}
          whileInView={{ left: "68%" }}
          transition={transiton}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div
          initial={{ left: "5rem", bottom: "5rem" }}
          whileInView={{ left: "1rem", bottom: "5rem" }}
          transition={transiton}
          style={{ bottom: "5rem", left: "1rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
      </div>
      {/* blur div */}
      <div className="blur" style={{ backgroud: "rgb(238 210 255)" }}></div>
      <div
        className="blur"
        style={{
          background: "#c1f5ff",
          top: "17rem",
          height: "20rem",
          width: "50rem",
          left: "19rem",
        }}
      ></div>
    </div>
  );
};

export default intro;
