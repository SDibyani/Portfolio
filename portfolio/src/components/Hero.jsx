
// import React from 'react'
// import { motion } from "motion/react"
// import me from "../assets/projects/me.jpg";

// const container=(delay)=> ({
//   hidden : { x: -100,opacity:0},
//   visible:{
//     x:0,
//     opacity:1,
//     transition:{duration:0.5, delay:delay},
//   },
// });

// function Hero() {
//   return (
//     <div className='border-b border-neutral-900 pb-4 lg:mb-35'> 
//        <div className='flex flex-wrap'>
//         <div className='w-full lg:w-1/2'>
//         <div className='flex flex-col items-center lg:items-start'>
//          <motion.h1
//           variants={container(0)}
//           initial="hidden"
//           animate="visible"
         
//          className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
//           S Dibyani</motion.h1>
//          <motion.span
//             variants={container(0.5)}
//           initial="hidden"
//           animate="visible"
         
//          className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
//           Full Stack Developer
//          </motion.span>
//          <motion.p
//            variants={container(1)}
//           initial="hidden"
//           animate="visible"
//           className='my-2 max-w-xl py-6 font-light tracking-tighter'>
//             I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
//          </motion.p>
//         </div>

//         </div>
//         <div className='w-full lg:w-1/2 lg:p-8'>
//             <div className='flex justify-center'>
//                 <motion.img
//                  initial={{x:100,opacity:0}}
//                  animate={{x:0,opacity:1}}
//                  transition={{duration:1,delay:1.2}}
                
//                 src={me} alt="profile pic" />
//             </div>
//         </div>
//        </div>

//     </div>
//   )
// }

// export default Hero


import React from 'react'
import { motion } from "framer-motion" // make sure you use 'framer-motion'
import me from '../assets/projects/me.jpg' // import the image properly
import { FaDownload } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-10 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <div className="flex flex-col items-start ml-6 sm:ml-10 md:ml-16 lg:ml-20">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight"
            >
              S Dibyani
            </motion.h1>
            
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-2xl sm:text-3xl mb-4"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg md:text-xl font-light tracking-tight max-w-xl"
            >
              I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
            </motion.p>

            <motion.a
  variants={container(1.2)}
  initial="hidden"
  animate="visible"
  href="/resume.pdf"
  download="S_Dibyani_Resume.pdf"
  className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
>
  <FaDownload className="text-lg group-hover:animate-bounce" />
  Download Resume
</motion.a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={me}
            alt="Profile Pic"
            className="rounded-2xl w-60 sm:w-72 md:w-80 lg:w-96 object-cover shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;
