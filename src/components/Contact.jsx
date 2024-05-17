import React, { useRef, useState } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Nusrat Jahan Lia",
          from_email: form.email,
          to_email: "nusratliya19@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 w-full flex xl:flex-row flex-col-reverse gap-5 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.45] bg-black-100 p-6 rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex items-center gap-2 mt-4 mb-4">
          <a href="https://www.linkedin.com/in/nusrat-jahan-lia-608655229/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} color="#fff" />
          </a>
          <a href="https://github.com/NusRAT-LiA" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} color="#fff" />
          </a>
        </div>

        {/* Uncomment this block if you want to include the form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-4'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-2'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-2 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        
        <div className="flex items-center gap-2 py-4">
          <a href="mailto:nusratliya19@gmail.com">
            <MdEmail size={20} color="#fff" />
          </a>
          <p className="text-sm text-white">nusratliya19@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 py-4">
          <a href="mailto:bsse1306@iit.du.ac.bd">
            <MdEmail size={20} color="#fff" />
          </a>
          <p className="text-sm text-white">bsse1306@iit.du.ac.bd</p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-[650px] md:h-[600px] h-[400px] pl-8'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
