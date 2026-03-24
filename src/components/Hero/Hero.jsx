
import { motion } from "framer-motion"

import RightArrow from "../../assets/right-arrow.svg?react"
import GitHubIcon from "../../assets/github-icon.svg?react"
import ThreadsIcon from "../../assets/threads-icon.svg?react"
import LinkedinIcon from "../../assets/linkedin-icon.svg?react"

// import userProfile from "../../assets/user-profile.jpg"
import geraldPicture from "../../assets/gerald-picture.jpg"
import "./Hero.css"

function Hero() {
    return (
        <motion.section className="hero" id="home"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            <div className="hero-left-side">
                <span className="availability">Available to start</span>
                <h1 className="hero-title">Hi, I'm <p className="developer-name">Gerald Morales</p></h1>

                <h5 className="profession">
                    Web developer
                </h5>
                <p className="about">
                    I build exceptional digital experiences that live at the intersection of design and code. Specializing in React, animations, and creating products people love to use.
                </p>

                <div className="btn-actions-container">

                    <a href="#projects">
                        <button className="btn-view-projects">View Projects <RightArrow className="right-arrow-svg" /></button>

                    </a>

                    <a href="#contact" className="a-get-in-touch">
                        <button className="get-in-touch">Get in Touch</button>

                    </a>

                </div>

                <div className="follow-me-buttons-container">

                    <a href="https://github.com/geraldmrls" target="_blank">
                        <motion.button className="btn-github-contact"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}>
                            <GitHubIcon className="github-icon github-icon-contact" />
                        </motion.button>
                    </a>

                    <a href="https://www.linkedin.com/in/gerald-morales-807283218/" target="_blank">
                        <motion.button className="btn-linkedin-contact"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}>
                            <LinkedinIcon className="linkedin-icon linkedin-icon-contact" />
                        </motion.button>
                    </a>

                    <a href="https://www.threads.com/@geraldmrls" target="_blank">
                        <motion.button className="btn-threads-contact"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}>
                            <ThreadsIcon className="threads-icon-contact" />
                        </motion.button>
                    </a>

                </div>
            </div>

            <motion.div className="right-side"
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}>

                <img className="user-profile" src={geraldPicture} />
                <span className="years-experience">

                </span>
            </motion.div>
        </motion.section>
    )
}

export default Hero