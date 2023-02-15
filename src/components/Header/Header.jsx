import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight, BiBrightness, BiMoon } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import { Link } from "react-router-dom";
// import { style } from "@mui/system";

const Header = (props) => {
  const menuRef = useRef();
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (

    
    <motion.div
    variants={headerVariants}
    initial="hidden"
    whileInView="show"
    className={`paddings ${css.wrapper}`}
    viewport={{ once: true, amount: 0.25 }}
    style={{ boxShadow: headerShadow, background: props.theme==='light' ? "#fff" : "#000" }}
    >
    <a className="anchor" id="head"></a>
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}><Link to="/">Hammad.</Link></div>

          <ul
            className={`flexCenter ${css.menu}`}
            ref={menuRef}
            style={getMenuStyles(menuOpened)}
            id="menu"
            
          >
            <li><Link to="/">Home</Link></li>
            <li><a href="#experties">Services</a></li>
            <li><a href="#work">Experience</a></li>
            <li><Link to="/cv">CV</Link></li>
            <li><a href="#portfolio">Projects</a></li>
          </ul>







        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />


        </div>

        {/* Light and Dark Theme Toggle */}
        <div className={`flexCenter ${css.themeToggle}`} style={{ marginLeft: "15px",padding:"2px" ,border: props.theme==="light" ? "4px solid #000" : "4px solid #fff", borderRadius: "50%"}}>
          <BiBrightness className="day" size={26} style={{ color: props.theme === 'light' ? "#000" : "#fff", cursor: "pointer", display: "none"}} onClick={props.toggleTheme} />
          <BiMoon className="night" size={26} style={{color: props.theme === 'light' ? "#000" : "#fff", cursor: "pointer" }} onClick={props.toggleTheme} />
        </div>




      </div>
    </motion.div>
  );
};

export default Header;