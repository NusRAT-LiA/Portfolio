import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm an aspiring software engineer and web3 enthusiast. My major is Software Engineering. I'm skilled in multiple programming
        languages including Solidity, Javascript, Java, Python, C, C++. I've worked on multiple projects and currently 
        focused on building a MARS-MISSION GAME and a DISTRIBUTED-SHIPMENT-CHAIN-IN-PORTS APPLICATION.
        I've been working with multiple non-profittable organizations and always willing to contribute to social causes.
        Fun fact is I'm also an artist, a debator, an instructor and also a writer !
      </motion.p>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      <div className="flex items-center gap-4 mt-4">
        <a href="http://www.iit.du.ac.bd/" target="_blank" rel="noopener noreferrer">
          <img src="data:image/png;base64,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" alt="Educational Institute Logo" className="h-12" />
        </a>
        <p className="text-secondary ">Institute of Information Technology </p>
      
        <a href="https://www.du.ac.bd/" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oRUiYBCLRUHpOondhKnopZ2bGZC61fysuDfp9wvNFMck4SyhN8FgZs52tfBTALz0Y4I&usqp=CAU" className="h-12" />
        </a>
        <p className="text-secondary">University of Dhaka</p>
      </div>
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
