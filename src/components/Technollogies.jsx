
// import React from 'react'
// import {RiReactjsLine} from "react-icons/ri"
// import {TbBrandNextjs} from "react-icons/tb"
// import {SiMongodb} from "react-icons/si"
// import {DiRedis} from "react-icons/di"
// import {FaNodeJs} from "react-icons/fa"
// import {motion} from "motion/react";

// const iconVariants = (duration)=> ({
//   initial:{y:-10},
//   animate:{
//     y:[10,-10],
//     transition:{
//       duration:duration,
//       ease:"linear",
//       repeat:Infinity,
//       repeatType:"reverse",
//     },
//   },
// });


// function Technollogies() {
//   return (
//     <div className='border-b border-neutral-800 pb-24'>
//         <motion.h1
//            whileInView={{opacity:1, y:0}}
//            initial={{opacity:0,y:-100}}
//            transition={{duration:1.5}}
//         className='my-20 text-center text-4xl'>Technologies</motion.h1>
//         <motion.div
//           whileInView={{opacity:1, x:0}}
//           initial={{opacity:0, x:-100}}
//           transition={{duration:1.5}}
//         className='flex flex-wrap items-center gap-4'>
//             <motion.div
//                variants={iconVariants(2.5)}
//                initial="initial"
//                animate="animate"
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <RiReactjsLine className='text-7xl text-cyan-400'></RiReactjsLine>
//             </motion.div>
//             <motion.div
//                  variants={iconVariants(3)}
//                initial="initial"
//                animate="animate"
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <TbBrandNextjs className='text-7xl '></TbBrandNextjs>
//             </motion.div>
//             <motion.div
//                 variants={iconVariants(2.5)}
//                initial="initial"
//                animate="animate"
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <SiMongodb className='text-7xl text-green-500'></SiMongodb>
//             </motion.div>
//             <motion.div
//                 variants={iconVariants(2)}
//                initial="initial"
//                animate="animate"
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <DiRedis className='text-7xl text-red-700'></DiRedis>
//             </motion.div>
//             <motion.div 
//                variants={iconVariants(6)}
//                initial="initial"
//                animate="animate"
//             className='rounded-2xl border-4 border-neutral-800 p-4'>
//              <FaNodeJs className='text-7xl text-green-500'></FaNodeJs>
//             </motion.div>
            

//         </motion.div>
//     </div>
//   )
// }

// export default Technollogies



import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { motion } from "motion/react"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technollogies() {
  return (
    <div className="border-b border-neutral-800 pb-20 px-4 md:px-10 lg:px-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-12 text-center text-4xl font-semibold"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 sm:p-8"
        >
          <RiReactjsLine className="text-6xl sm:text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 sm:p-8"
        >
          <TbBrandNextjs className="text-6xl sm:text-7xl text-white" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 sm:p-8"
        >
          <SiMongodb className="text-6xl sm:text-7xl text-green-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 sm:p-8"
        >
          <DiRedis className="text-6xl sm:text-7xl text-red-700" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-6 sm:p-8"
        >
          <FaNodeJs className="text-6xl sm:text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Technollogies;
