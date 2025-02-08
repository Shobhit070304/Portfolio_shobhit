import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import Image from "../assets/characternew.png";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden flex-1 lg:flex items-center bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          >
            <img src={Image} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent ">About me.</h2>
            <h3 className="h3 mb-4">
              Web Developer with a Passion for Cutting-Edge Web Solutions and
              Innovative Problem Solving.
            </h3>
            <p className="mb-6">
              👋 Hi, I’m Shobhit! I’m a 4rd-year CS student passionate about web
              development and tackling new challenges. I enjoy turning ideas
              into reality with clean, efficient code and am always eager to
              learn and grow. With a strong foundation in web technologies, I
              focus on building practical solutions that make an impact. Excited
              to collaborate on innovative projects—let’s connect and create
              something great! 🚀
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
