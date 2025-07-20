
// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { Toaster, toast } from "react-hot-toast";

// function Contact() {
//   const form = useRef();
//   const [loading, setLoading] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .sendForm("sdibyani123@gmail.com", "template_9yv38dx", form.current, "Fbac3G3961mq0HYJ5")
//       .then(() => {
//         toast.success("Message sent successfully!");
//         form.current.reset();
//         setLoading(false);
//       })
//       .catch(() => {
//         toast.error("Failed to send message.");
//         setLoading(false);
//       });
//   };

//   return (
//     <section id="contact" className="py-12 px-4 border-b border-neutral-900 pb-20">
//       <Toaster position="top-center" />
//       <div className="max-w-xl mx-auto">
//         <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

//         <form ref={form} onSubmit={sendEmail} className="space-y-4 bg-white p-6 rounded shadow">
//           <div>
//             <label className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               name="user_name"
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="user_email"
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700">Message</label>
//             <textarea
//               name="message"
//               rows="5"
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             ></textarea>
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//           >
//             {loading ? "Sending..." : "Send Message"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS config
    emailjs.send("sdibyani123@gmail.com", "template_9yv38dx", formData, "Fbac3G3961mq0HYJ5")
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screenborder-b border-neutral-900 pb-20 px-4  pt-15">
      <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg max-w-md w-full transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

