import React from "react";

export default function Education() {
  return (
    <div className="min-h-screen w-full bg-black py-10 space-y-20 px-4">
      {/* Section 1: HSC */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-[100px]">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:w-1/2 w-full flex justify-center p-4">
            <img
              src="/walchandschool.avif"
              alt="Walchand College"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-md"
            />
          </div>
          {/* Right Content */}
          <div className="md:w-1/2 w-full p-6 text-center md:text-left">
            <h1 className="text-3xl font-bold text-black mb-2">
              Walchand College of Arts and Science, Solapur
            </h1>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Higher-Secondary School
            </h2>
            <a
              href="https://search.brave.com/images?q=walchand+college+of+arts+and+science+solapur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm block mb-4"
            >
              Visit Institute
            </a>
            <p className="text-gray-700 text-md leading-relaxed">
              I completed my HSC from Walchand College of Arts and Science, Solapur. During my time there, I developed a strong foundation in technology. I learned basic computer skills, explored the fundamentals of programming, and became familiar with digital tools, which sparked my interest in pursuing a career in the tech field.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2: B.Tech */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:w-1/2 w-full flex justify-center p-4">
            <img
              src="/WIT.jpg"
              alt="WIT College"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-md"
            />
          </div>
          {/* Right Content */}
          <div className="md:w-1/2 w-full p-6 text-center md:text-left">
            <h1 className="text-3xl font-bold text-black mb-2">
              Walchand Institute Of Technology
            </h1>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Bachelor of Technology (Information Technology)
            </h2>
            <a
              href="https://witsolapur.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm block mb-4"
            >
              Visit Institute
            </a>
            <p className="text-gray-700 text-md leading-relaxed">
              I completed my B.Tech from Walchand Institute of Technology, Solapur, where I gained valuable knowledge and hands-on experience in core computer science subjects. I explored data structures, algorithms, databases, and web development through projects and practicals that sharpened my technical and problem-solving skills.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Honours in AI */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:w-1/2 w-full flex justify-center p-4">
            <img
              src="/WIT2.jpg"
              alt="WIT AI Honours"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-md"
            />
          </div>
          {/* Right Content */}
          <div className="md:w-1/2 w-full p-6 text-center md:text-left">
            <h1 className="text-3xl font-bold text-black mb-2">
              Walchand Institute Of Technology
            </h1>
            <h2 className="text-2xl font-semibold text-black mb-3">
              Artificial Intelligence (Honours)
            </h2>
            <a
              href="https://your-another-college-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm block mb-4"
            >
              Visit Institute
            </a>
            <p className="text-gray-700 text-md leading-relaxed">
              I also completed my Honours from Walchand Institute of Technology, where I specialized in Artificial Intelligence. I learned AI concepts such as machine learning, neural networks, and data-driven decision-making. Real-world projects enhanced my understanding and fueled my passion for intelligent systems and automation.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Additional Section (You can customize this) */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Image */}
          <div className="md:w-1/2 w-full flex justify-center p-4">
            <img
              src="/cloud.png"
              alt="Extra Education"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-md"
            />
          </div>
          {/* Right Content */}
          <div className="md:w-1/2 w-full p-6 text-center md:text-left">
            <h1 className="text-3xl font-bold text-black mb-2">
              Fortune Cloud 
            </h1>
            <h2 className="text-2xl font-semibold text-black mb-3">
              IT-Training
            </h2>
            <a
              href="https://www.fortunecloudindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm block mb-4"
            >
              Visit Institute
            </a>
            <p className="text-gray-700 text-md leading-relaxed">
              I completed my IT training at Fortune Cloud, where I gained practical knowledge in real-world technologies and development practices. The training significantly enhanced my skills in cloud computing and software development. Special thanks to the Fortune Cloud team for their constant support, guidance, and valuable mentorship throughout the journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
