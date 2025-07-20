// import React from "react";
// import { PROJECTS } from "../constants";
// import {motion} from "motion/react";

// function Projects() {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <motion.h1 
//          whileInView={{opacity:1, y:0}}
//          initial={{opacity:0, y:-100}}
//          transition={{duration:0.5}}
//       className="my-20 text-center text-4xl">Projects</motion.h1>
//       <div>
//         {PROJECTS.map((project, index) => (
//           <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
//             <motion.div 
//                whileInView={{opacity:1, x:0}}
//          initial={{opacity:0, x:-100}}
//          transition={{duration:1}}
//             className="w-full lg:w-1/4">
//               <img
//                 src={project.image}
//                 width={150}
//                 height={150}
//                 alt={project.title}
//                 className="mb-6 rounded"
//               />
//             </motion.div>
//             <motion.div 
//                whileInView={{opacity:1, x:0}}
//          initial={{opacity:0, x:100}}
//          transition={{duration:1}}
//             className="w-full max-w-xl lg:w-3/4">
//             <h6 className="mb-2 font-semobold">{project.title}</h6>
//             <p className="mb-4 text-neutral-400 ">{project.description}</p>
//            {project.technologies.map((tech,index)=>(
//             <span
//              key={index}
//             className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
//             >
//                 {tech}
//             </span>
//            ))}
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;



import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "motion/react";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-20 px-4 md:px-10 lg:px-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-16 flex flex-wrap items-center justify-center gap-6 lg:gap-12"
          >
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-lg w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto object-cover"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-1/2"
            >
              <h6 className="mb-3 text-xl font-semibold text-white">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

