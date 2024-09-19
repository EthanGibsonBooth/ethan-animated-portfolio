import { useRef } from "react";
import "./about.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

 

  return (
  
    
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}

    >
  
      <motion.div className="textContainer" variants={variants}>
        <p>
        I am highly adaptable and driven, eager to 
          <br /> bring passion for problem-solving
        </p>
        <hr />
      </motion.div>
      
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.png" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Team.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Information Technology</h2>
          <p>
            I hold a Bachelor of Information Technology with a major in Software Engineering 
            from La Trobe University, with industry experience as a cybersecurity business analyst 
            through Practera and a 30-hour Software Developer course via LinkedIn Learning.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Customer Service</h2>
          <p>
            I Have worked at McDonald’s for 5 years where I have delivered excellent customer 
            service, resolved complaints, ensured positive dining experiences and been instilled 
            with a customer centric approach.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Cyber Analyst</h2>
          <p>
          Collaborated with a team of 5 to create a 39-page cybersecurity solution.
          Conducted market research to increase engagement.
          Presented findings to the CEO, maintaining stakeholder communication.
          Developed and implemented agile solutions.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Developer</h2>
          <p>
          I am the lead developer for a Financial Planning business where I designed 
          and developed the company website. I have worked on multiple individual 
          projects including an algorithm visualiser and a portfolio website. I have 
          experience in Python, HTML, CSS, React, Java and C++
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
    
  );
};

export default Services;
