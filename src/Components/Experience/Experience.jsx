import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "white" : "" }}>
          1-
        </div>
        <span>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "white" : "" }}>
          5+
        </div>
        <span>Completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{ color: darkMode ? "white" : "" }}>
          1+
        </div>
        <span>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
