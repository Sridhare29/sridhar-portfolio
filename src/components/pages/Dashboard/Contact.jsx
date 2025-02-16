import { FaGithub, FaTwitter, FaLinkedin, FaCoffee } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="text-black" />,
      label: "GitHub",
      url: "https://github.com/Sridhare29",
    },
    {
      icon: <FaLinkedin className="text-blue-700" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sridhar-e-b57738202/",
    },
    {
      icon: <BsTwitterX className="text-gray-800" />,
      label: "X",
      url: "https://x.com/Sridhar2920",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
          Let's Connect!
        </h1>

        <p className="text-gray-600 text-center text-lg mb-12">
        Whether you have a question or just want to connect, feel free to reach out. I'm always open to meaningful conversations!
        </p>

        {/* Email Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-8"
        >
          <div className="flex items-center justify-center gap-3 text-xl">
            <HiMail className="text-purple-600" />
            <a
              href="mailto:sridhare296@gmail.com"
              className="text-gray-700 hover:text-purple-600 font-mono transition-colors"
            >
              sridhare296@gmail.com
            </a>
          </div>
        </motion.div>

        {/* Social Links */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              target="_blank" 
               rel="noopener noreferrer"
              href={link.url}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
                <span className="text-2xl text-gray-700">{link.icon}</span>
              </div>
              <span className="mt-2 text-sm text-gray-600">{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white shadow-lg transition-shadow p-6 rounded-xl"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCoffee className="text-2xl text-yellow-400" />
              <h3 className="text-xl font-semibold">Fun Fact</h3>
            </div>
            <p className="text-center text-gray-500">
            Fueled by coffee ☕ and creativity, I turn bold ideas into digital magic 🌟—web, apps, and beyond! Let’s build the future, one line of code at a time. 💻✨
              </p>
          </motion.div>

        {/* Back to Home */}
        <motion.div whileHover={{ x: -5 }} className="mt-8 text-center">
          <a
            href="/sridhar-portfolio"
            className="text-purple-600 hover:text-purple-800 transition-colors"
          >
            ← Back to Home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
