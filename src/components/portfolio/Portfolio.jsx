import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Financial Planning Website",
    img: "./GTEDWebsite.png",
    desc: "A website created for a Financial Planning business, built with HTML, Bootstrap, CSS, and JavaScript, offers a responsive design for seamless use across devices. It features a user-friendly interface, ensuring easy navigation and efficient financial planning.",
    link: "https://ethangibsonbooth.github.io/GTEDSolutions.github.io/",
  },
  {
    id: 2,
    title: "Sorting Algorithm Visualiser",
    img: "./SortingAlgorithmVisualiser.png",
    desc: "This sorting algorithm visualizer, built with React, CSS, Java, and HTML, dynamically illustrates Merge Sort, Quick Sort, Heap Sort, and Bubble Sort, offering an interactive and educational experience for understanding sorting processes.",
    link: "https://ethangibsonbooth.github.io/Sorting-Visualiser/",
  },
  {
    id: 3,
    title: "Pathfinding Visualiser",
    img: "./PathfindingVisualiser.png",
    desc: "This pathfinding visualizer, built with React, JavaScript, HTML, and CSS, demonstrates A*, Dijkstra's, Greedy Best-First, Bidirectional Greedy, BFS, DFS, and Random Walk algorithms, plus generates random, recursive, vertical, and horizontal division mazes.",
    link: "https://ethangibsonbooth.github.io/EthanPathfindingVisualiser/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link}><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
