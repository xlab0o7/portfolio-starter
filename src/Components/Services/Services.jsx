import React, { useContext } from "react";
import "./Services.css";
import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import resume from "../resume/resume.pdf";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
  const transiton = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      <div className="s-left">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome </span>
        <span>services</span>
        <span>This is the simple and dummy text for testing. That's it!!</span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
      </div>
      <div className="s-right">
        <div className="blur" style={{ backgroud: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "10rem",
            height: "20rem",
            width: "50rem",
            left: "10rem",
          }}
        ></div>

        <motion.div
          initial={{ top: "-5rem", right: "-16rem" }}
          whileInView={{ top: "-5rem", right: "-22rem" }}
          transiton={transiton}
          className="Card1"
          style={{ top: "-5rem", right: "-22rem" }}
        >
          <Card
            emoji={heartemoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
          />
        </motion.div>

        <motion.div
          initial={{ top: "6rem", right: "-7rem" }}
          whileInView={{ top: "6rem", right: "-3rem" }}
          transiton={transiton}
          className="Card2"
          style={{ top: "6rem", right: "-3rem" }}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"HTML, CSS, JavaScript, React"}
          />
        </motion.div>

        <motion.div
          initial={{ top: "13rem", right: "-24rem" }}
          whileInView={{ top: "13rem", right: "-19rem" }}
          transiton={transiton}
          className="Card3"
          style={{ top: "13rem", right: "-19rem" }}
        >
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"this is for testing 1,2,3 "}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
