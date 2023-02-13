import React from "react";
import { motion } from "framer-motion";
import css from "./Explore.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
import { BsFillSuitHeartFill } from "react-icons/bs";

// import { Link } from "react-router-dom";
const Explore = (props) => {

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      style={{ background: props.theme === "light" ? "#f5f0f0" : "#0d0d0d" }}
      // viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.paper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Projects</span>
            <p style={{ marginTop: "10px" }}>I love thinking what no one else ever thought.</p>
          </div>
          {/* <span className="secondaryText"><Link to="#exploremore">Explore More Works</Link></span> */}
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <motion.img variants={fadeIn("right", "tween", .5, .6)} src="./pra.png" alt="project" />
          <motion.img variants={fadeIn("left", "tween", .9, .6)} src="./pr2.gif" alt="project" />
          <motion.img variants={fadeIn("right", "tween", .7, .6)} src="./pr7.png" alt="project" />
          <motion.img variants={fadeIn("left", "tween", .5, .6)} src="./pt4.gif" alt="project" />
          <motion.img variants={fadeIn("right", "tween", .7, .6)} src="./pr5.png" alt="project" />
          <motion.img variants={fadeIn("left", "tween", .5, .6)} src="./pr1.gif" alt="project" />
          <motion.img variants={fadeIn("right", "tween", .7, .6)} src="./pr3.png" alt="project" />
          <motion.img variants={fadeIn("left", "tween", .9, .6)} src="./pr10.gif" alt="project" />
          <motion.img variants={fadeIn("right", "tween", .5, .6)} src="./prb.png" alt="project" />
          <motion.img variants={fadeIn("left", "tween", .9, .6)} src="./pr6.gif" alt="project" />
          <motion.img variants={fadeIn("right", "tween", .7, .6)} src="./pr5.png" alt="project" />
          <motion.img variants={fadeIn("left", "tween", .9, .6)} src="./pr9.gif" alt="project" />
        </div>
        <div className={`flexCenter ${css.final}`} >
          Developed with  <BsFillSuitHeartFill style={{margin:"0 8px", color:"red"}}/>  by studioHammad.
        </div>
        {/* <button id="more"
          className={`flexCenter${css.more}`}
          style={{ background: "orange", width: "150px", height: "2.5rem", outline: "none", border: "none", marginTop: "2vh", fontSize: "16px", fontWeight: "500", color: props.theme === "light" ? "#000" : "#fff", cursor: "pointer" }}
          onClick={() => {
            document.querySelector(".showCase2").style.display = "initial";
            document.querySelector("#more").style.display = "none"

          }}
        >Explore More</button> */}

      </div>
    </motion.section>
  );
};

export default Explore;