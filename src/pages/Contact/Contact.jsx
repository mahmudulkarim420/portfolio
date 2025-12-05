import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);

    emailjs
      .sendForm(
        'service_8zh26gd',
        'template_531ln27',
        form.current,
        '-xszSwFIzbuBxEJwt'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => setSuccess(false), 2000);
        },
        (error) => {
          console.log(error.text);
          alert('Oops! Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="max-w-6xl mx-auto mt-14 px-4 md:px-8 py-1 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Get in Touch
            </h2>

            <p className="text-gray-600 text-lg">
              Have a question or want to work together? Drop me a message!
            </p>
          </motion.div>

          <div className="space-y-6 pt-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-[#1A1835] hover:bg-[#2A2545] transition transform hover:scale-105"
            >
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-gray-300 hover:text-blue-400 transition cursor-pointer">
                  mahmudulkarim545@gmail.com
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-[#1A1835] hover:bg-[#2A2545] transition transform hover:scale-105"
            >
              <Phone className="w-6 h-6 text-blue-400" />
              <div>
                <p className="font-semibold text-white">Number</p>
                <p className="text-gray-300 hover:text-blue-400 transition cursor-pointer">
                  +880 1805111544
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-4 p-4 rounded-xl bg-[#1A1835] hover:bg-[#2A2545] transition transform hover:scale-105"
            >
              <MapPin className="w-6 h-6 text-blue-400" />
              <div>
                <p className="font-semibold text-white">Location</p>
                <p className="text-gray-300">Dhaka, Bangladesh</p>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 p-6 rounded-xl bg-gradient-to-r from-blue-800 to-purple-800 shadow-xl relative"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 border border-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 border border-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 border border-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-sm"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 border border-gray-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none h-32 text-sm"
          />

          <motion.button
            type="submit"
            className="w-full flex items-center justify-center px-5 py-3 rounded-lg text-white font-semibold transition duration-300 shadow-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message <Send className="w-5 h-5 ml-2" />
          </motion.button>

          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2"
              >
                <span>✅ Message sent successfully!</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
