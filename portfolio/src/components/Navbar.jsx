
// import React from 'react'
// import { FaLinkedin,} from "react-icons/fa"
// import {FaGithub} from "react-icons/fa";
// import {FaSquareXTwitter} from "react-icons/fa6";
// import {FaInstagram} from "react-icons/fa";

// function Navbar() {
//   return (
//     <div>
//         <nav className=' mb-20 flex items-center justify-between py-6'>
//          <div className='flex flex-shrink-0 items-center'>
//          <img src="https://img.freepik.com/premium-vector/alphabet-letters-logo-sd-s-d-monogram_1012565-629.jpg" alt=""
//          className='mx-2 w-10' />
//          </div>
//          <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
//            <FaLinkedin></FaLinkedin>
//            <FaGithub></FaGithub>
//            <FaInstagram></FaInstagram>
//             <FaSquareXTwitter></FaSquareXTwitter>
//          </div>
//         </nav>
//     </div>
//   )
// }

// export default Navbar


import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function Navbar() {
  return (
    <div>
      <nav className='mb-20 flex items-center justify-between py-6 px-4'>
        {/* Logo */}

        <div className='text-2xl font-bold tracking-wider text-purple-500 hover:text-purple-700 transition duration-300'>
          S Dibyani
        </div>
        

        {/* Social Icons */}
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

          <a
            href="https://www.linkedin.com/in/s-dibyani-555355284"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-200"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/SDibyani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition duration-200"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/s_dibyani123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-200"
          >
            <FaInstagram />
          </a>

          <a
            href="https://twitter.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition duration-200"
          >
            <FaSquareXTwitter />
          </a>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
