import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="text-4xl font-bold inline border-b-4 border-gray-500"
          >
            About
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="text-xl mt-20"
        >
          I'm Kevin Vega, a software engineer based in New York City. I enjoy
          building things that live on the internet, whether that be websites,
          applications, or anything in between. My goal is to always build
          products that provide pixel-perfect, performant experiences.
        </motion.p>

        <br />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="text-xl"
        >
          I'm Kevin Vega, a software engineer based in New York City. I enjoy
          building things that live on the internet, whether that be websites,
          applications, or anything in between. My goal is to always build
          products that provide pixel-perfect, performant experiences.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
