import React from "react";

export default function Skills() {
  const frontendSkills = [
    "html.png",
    "Tailwinddd.jpeg",
    "Js.jpeg",
    "React.jpeg",
    "angular.jpeg",
  ];

  const backendSkills = [
    "Node.jpeg",
    "expresss2.png",
    "mongosh.png",
    "sqll.jpeg",
    "postgral.jpeg",
  ];

  const coreSkills = [
    "DSA.jpeg",
    "Linux.jpeg",
    "python.jpeg",  // ✅ Make sure this exists in the /public folder
    "AI.jpeg",
    "git.jpeg",
  ];

  return (
    <div className="min-h-screen w-full bg-black overflow-hidden px-4 py-10 space-y-20">
      {/* Front-End Section */}
      <div>
        <p className="font-serif text-white text-4xl mt-[90px] font-bold text-center mb-10">
          Front-End Development Skills
        </p>

        <div className="rounded-xl p-6 flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto ">
          {frontendSkills.map((img, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 bg-black shadow-lg flex items-center justify-center
                w-full sm:w-[150px] md:w-[180px] lg:w-[200px] h-[180px]
                ${index % 2 === 0 ? "border-4 border-blue-500 float-x" : "border-4 border-purple-500 float-y"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={`/${img}`}
                alt={`Frontend Skill ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Back-End Section */}
      <div>
        <p className="font-serif text-white -mt-5 text-4xl font-bold text-center mb-10">
          Back-End Development Skills
        </p>

        <div className="rounded-xl p-6 flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
          {backendSkills.map((img, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 bg-black shadow-lg flex items-center justify-center
                w-full sm:w-[150px] md:w-[180px] lg:w-[200px] h-[180px]
                ${index % 2 === 0 ? "border-4 border-blue-500 float-x" : "border-4 border-purple-500 float-y"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={`/${img}`}
                alt={`Backend Skill ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Core Computer Science Section */}
      <div>
        <p className="font-serif text-white -mt-5 text-4xl font-bold text-center mb-10">
          Core-Computer Science
        </p>

        <div className="rounded-xl p-6 flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
          {coreSkills.map((img, index) => (
            <div
              key={index}
              className={`rounded-2xl p-4 bg-black shadow-lg flex items-center justify-center
                w-full sm:w-[150px] md:w-[180px] lg:w-[200px] h-[180px]
                ${index % 2 === 0 ? "border-4 border-blue-500 float-x" : "border-4 border-purple-500 float-y"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={`/${img}`}
                alt={`Core Skill ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
