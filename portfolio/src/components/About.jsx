// import React from "react";
// import {motion} from "framer-motion";

// function About() {
//   return (
//     <div className="border-b border-neutral-900 pb-4 ">
//       <h1 className="my-20 text-center text-4xl">
//         About
//         <span className="text-neutral-500 pl-2">Me</span>
//       </h1>
//       <div className="flex flex-wrap">
//         <motion.div
//            whileInView={{opacity:1,x:0}}
//            initial={{opacity:0, x:-100}}
//            transition={{duration:0.5}}
//             className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex items-center justify-center">
//             <img
//               src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg"
//               alt="about"
//             />
//           </div>
          
//         </motion.div>
//         <motion.div
//            whileInView={{opacity:1,x:0}}
//            initial={{opacity:0, x:100}}
//            transition={{duration:0.5}}
        
//         className="w-full lg:w-1/2">
//             <div className="flex justify-center lg:justify-start">
//               <p className="my-2 max-wl py-6">
//                 I am a dedicated and versatile full stack developer with a
//                 passion for creating efficient and user-friendly web
//                 applications. I have worked with a variety of technologies,
//                 including React, Next.js, Node.js, MySQL, PostgreSQL, and
//                 MongoDB. My journey in web development began with a deep
//                 curiosity for how things work, and it has evolved into a career
//                 where I continuously strive to learn and adapt to new
//                 challenges. I thrive in collaborative environments and enjoy
//                 solving complex problems to deliver high-quality solutions.
//                 Outside of coding, I enjoy staying active, exploring new
//                 technologies, and contributing to open-source projects.
//               </p>
//             </div>
//           </motion.div>
//       </div>
//     </div>
//   );
// }

// export default About;



import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="border-b border-neutral-900 px-4 md:px-10 lg:px-20 pb-10">
      <h1 className="my-10 text-center text-4xl font-semibold">
        About
        <span className="text-neutral-500 pl-2">Me</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left - Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="https://this.deakin.edu.au/wp-content/uploads/2019/06/coding-on-a-computer.jpg"
            alt="about"
            className="rounded-xl w-full max-w-md object-cover shadow-lg"
          />
        </motion.div>

        {/* Right - Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <p className="text-sm sm:text-base lg:text-lg tracking-tight text-justify leading-relaxed p-2 sm:p-4">
            I am a dedicated and versatile full stack developer with a passion
            for creating efficient and user-friendly web applications. I have
            worked with a variety of technologies, including React, Next.js,
            Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web
            development began with a deep curiosity for how things work, and it
            has evolved into a career where I continuously strive to learn and
            adapt to new challenges. I thrive in collaborative environments and
            enjoy solving complex problems to deliver high-quality solutions.
            Outside of coding, I enjoy staying active, exploring new
            technologies, and contributing to open-source projects.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

