import React from 'react'
import css from "./Cv.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaHtml5, FaCss3Alt, FaReact, FaPython } from "react-icons/fa"
import { SiTailwindcss, SiJavascript } from "react-icons/si"
import { BiPhoneCall, BiLink, BiMailSend } from "react-icons/bi";


const Cv = (props) => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <div className={css.leftSide} style={{ background: props.theme === "light" ? "#4a4a4a" : "orange", color: props.theme === "light" ? "white" : "#000" }}>

                <img className={css.image} src="main2.jpg" alt="My Image" />
                <div className={css.names}>
                    <h2>Hammad ul haq</h2>
                    <h3>Web Dev.</h3>
                </div>
                <div className={css.education}>
                    <h2>EDUCATION</h2>
                    <h3 className={css.heading}>BSc.</h3>
                    <p className={css.describe}>University of Karachi.(undergrad)</p>
                    <h3 className={css.heading}>Web Dev. Certification.</h3>
                    <p className={css.describe}>Indiana University, Blomington</p>
                    <h3 className={css.heading}>CS-50</h3>
                    <p className={css.describe}>Harvard University, Online</p>
                    <h3 className={css.heading}>Intermediate</h3>
                    <p className={css.describe}>Intermediate Board Karachi</p>
                </div>
                <div className={css.reference}>
                    <h2>REFERENCE</h2>
                    <h3 className={css.heading}>Syed M Erdum Adnan</h3>
                    <p className={css.describe}>Senior Web dev. DIDX, Karachi</p>
                    <h3 className={css.heading}>Wing Cdr Shehzad</h3>
                    <p className={css.describe}>Pakistan Air Force, Base Faisal</p>
                </div>
                <div className={css.extras}>
                    <h2>CONTACTS</h2>
                    <a href="tel:+923181226301"><BiPhoneCall /></a>
                    <a href="mailto:professorcoding123@gmail.com"><BiMailSend /></a>
                    <a href="https://hammad.pages.dev" style={{ textDecoration: "none", color: "inherit" }}><BiLink /></a>
                </div>

            </div>
            <div className={css.rightSide} style={{ background: props.theme === "light" ? "gray" : "#0d0d0d", color: props.theme === "light" ? "#fff" : "#fff" }}>

                <div className={css.names}>
                    <h2>Hammad ul haq</h2>
                    <h3>Web Dev.</h3>
                </div>

                <div className={css.majorwrap}>
                    <div className={css.education}>
                        <h3>Education</h3>
                        <div className={css.det}>
                            <h4 className={css.heading}>Bachelor Computer Science</h4>
                            <p className={css.describe}>Karachi University</p>

                        </div>
                        <div className={css.det}>
                            <h4 className={css.heading}>Web Dev Certificate</h4>
                            <p className={css.describe}>Indiana University</p>
                        </div>
                        <div className={css.det}>
                            <h4 className={css.heading}>Computer Science-50</h4>
                            <p className={css.describe}>Harvard University</p>
                        </div>
                        <div className={css.det}>
                            <h4 className={css.heading}>Intermed (Pre-Eng)</h4>
                            <p className={css.describe}>BIE Karachi</p>
                        </div>
                    </div>
                    <div className={css.about}>
                        <h3 className={css.headings}>About:</h3>
                        <p>I am an enthusiastic under-grad of UOK. And I csn help you in developing a responsive web application with creative designs, proficiency in frontend dev. Besides that I can also design UI of Website's</p>
                    </div>
                    <div className={css.workexp}>
                        <h3 className={css.headings}>Work Experience:</h3>
                        <div className={css.details}>
                            <h4>UpWork</h4>
                            <p>Using my creativity in UI Designs and skills of Web dev. together to build frontend's of Website for client's all over the World!</p>
                        </div>
                        <div className={css.details}>
                            <h4>PAF</h4>
                            <p>Solving complex problems related to Accounting through my proficiencies in Computer Science</p>
                        </div>
                        <div className={css.details}>
                            <h4>IPlanet</h4>
                            <p>Developing the structure of Website's was the key role but as an intern I did multiple task to help-out Senior Developers in building Website's</p>
                        </div>
                    </div>
                    <div className={css.skills}>
                        <h3 className={css.headings}>Skills:</h3>
                        <div className={css.contain}>

                            <div className={css.skilldetail}>
                                <FaHtml5 className={css.icon} />
                                <h4>HTML</h4>
                            </div>
                            <div className={css.skilldetail}>
                                <FaCss3Alt className={css.icon} />
                                <h4>CSS</h4>
                            </div>
                            <div className={css.skilldetail}>
                                <SiTailwindcss className={css.icon} />
                                <h4>Tailwind</h4>
                            </div>
                            <div className={css.skilldetail}>
                                <SiJavascript className={css.icon} />
                                <h4>Javascript</h4>
                            </div>
                            <div className={css.skilldetail}>
                                <FaReact className={css.icon} />
                                <h4>React</h4>
                            </div>
                            <div className={css.skilldetail}>
                                <FaPython className={css.icon} />
                                <h4>Python</h4>
                            </div>

                        </div>
                    </div>
                    <div className={css.share}>
                        <FaFacebook className={css.shareicon} />
                        <FaInstagram className={css.shareicon} />
                        <FaTwitter className={css.shareicon} />
                        <a href="https://www.linkedin.com/in/hammad-ul-haq-021a7925a/"><FaLinkedin className={css.shareicon} /></a>
                    </div>

                </div>
                <button className={css.download} style={{ background: props.theme === "light" ? "#4a4a4a" : "orange", color: props.theme === "light" ? "#fff" : "#000" }}><a href="./resume.png" download>Download CV</a></button>
            </div>
        </section>
    )
}

export default Cv
