import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const items = [
    { text: "LeetCode", img: "/leetcode.jpeg", link: "https://leetcode.com/u/vvaardhhhhhhhhhh_03/ " },
    { text: "LinkedIn", img: "/Linkdin.jpeg", link: "https://www.linkedin.com/in/vard-gadade-06a680259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { text: "GitHub", img: "/git.jpeg", link: "https://github.com/vardhgadade" },
    { text: "HackerRank", img: "/hackerrank.jpeg", link: "https://www.hackerrank.com/profile/vardhmangadade5" },
    { text: "Mail", img: "/mail.jpeg", link: "mailto:vardhmangadade5@gmail.com" },
  ];

  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <div className="min-h-screen pt-[150px] bg-black text-white flex flex-col items-center gap-4 px-2">
       <h1 className="font-serif text-4xl md:text-5xl font-bold text-white">
                 Contact Vardh when You Need!!
       </h1>

      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`w-[90%] max-w-[480px] h-[40vh] rounded-xl px-4 py-6 cursor-pointer flex flex-col items-center justify-center shadow-lg transition-all duration-300 ${
            i % 2 === 0
              ? "self-start bg-gray-800 mr-[100px]"
              : "self-end bg-[#120443] ml-[100px]"
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            setClickedIndex(i);
            setTimeout(() => setClickedIndex(null), 700);
          }}
        >
          <motion.img
            src={item.img}
            alt={item.text}
            className="w-24 h-24 rounded-full object-cover mb-3"
            animate={
              clickedIndex === i
                ? { rotate: [0, 10, -10, 10, -10, 0] }
                : { rotate: 0 }
            }
            transition={{ duration: 0.5 }}
          />
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-lg underline"
          >
            {item.text}
          </a>
        </motion.div>
      ))}
    </div>
  );
}
