import { motion } from "framer-motion";
import { styles } from "../styles";
import { StarsCanvas, BallCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col justify-center items-center`}>
      <StarsCanvas />
      <div
        className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-start gap-5`}
      >
        <div className="text-container flex flex-col md:flex-row md:flex-1 items-start gap-5 mt-5">
          <div className='hidden md:flex flex-col justify-center items-center'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF] mb-2 md:mb-0' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>
          <div className="flex flex-col ml-4 md:ml-0">
            <h1 className={`${styles.heroHeadText} text-white text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-8xl`}>
              Hi, I'm <span className='text-[#ffcc00]'>Lia</span>
            </h1>
            <p className={`${styles.heroSubText} mt-4 text-white-100 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}>
              A full stack web3 application developer<br className='sm:block hidden' />
              and game developer
            </p>
          </div>
        </div>
        
        <div className="image-container md:flex-1">
          <img src="https://i.ibb.co/pJNdPf5/nusrat-Jahan-Lia.png" alt="nusrat-Jahan-Lia" border="0" className="max-w-full lg:max-w-2xl"/>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
