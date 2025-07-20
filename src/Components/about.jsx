import React, { useEffect, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FileText,
  Code,
  Award,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

function AboutPage() {
  const { totalProjects, totalCertificates, experience } = useMemo(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects") || "[ 1 ]");
    const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");
    const extraCertificates = 5;

    const startDate = new Date("2024-12-13");
    const today = new Date();
    const monthsDiff =
      (today.getFullYear() - startDate.getFullYear()) * 12 +
      (today.getMonth() - startDate.getMonth());

    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;
    const experience = `${years > 0 ? `${years} yr` : ""} ${months} mo`;

    return {
      totalProjects: storedProjects.length,
      totalCertificates: storedCertificates.length + extraCertificates,
      experience,
    };
  }, []);

  useEffect(() => {
    AOS.init({ once: false });
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => AOS.refresh(), 250);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const statsData = useMemo(
    () => [
      {
        icon: Code,
        color: "from-[#6366f1] to-[#a855f7]",
        value: totalProjects,
        label: "Total Projects",
        description: "Innovative web solutions crafted",
        animation: "fade-right",
        link: "https://github.com/vardhgadade", // Add your GitHub Projects link
      },
      {
        icon: Award,
        color: "from-[#a855f7] to-[#6366f1]",
        value: totalCertificates,
        label: "Certificates",
        description: "Professional skills validated",
        animation: "fade-up",
        link: "https://github.com/vardhgadade", // Replace with certificate link
      },
      {
        icon: Globe,
        color: "from-[#6366f1] to-[#a855f7]",
        value: experience,
        label: "Experience",
        description: "Continuous learning journey",
        animation: "fade-left",
        link: "https://www.linkedin.com/in/vard-gadade-06a680259", // Replace with LinkedIn
      },
    ],
    [totalProjects, totalCertificates, experience]
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Vardhman_Gadade_Resume.pdf"; // 🔗 Ensure this file exists in public/
    link.download = "Vardh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="h-auto pb-[10%] text-white overflow-hidden mt-[55px] px-[5%] sm:px-[5%] lg:px-[10%] bg-black"
      id="About"
    >
      {/* Heading */}
      <div className="text-center mb-10 px-[5%]">
        <h2
          className="text-4xl md:text-5xl mt-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in-up"
          data-aos-duration="600"
        >
          About Vardh!
        </h2>
        <p
          className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
          data-aos="zoom-in-up"
          data-aos-duration="800"
        >
          <Sparkles className="w-5 h-5 text-purple-400" />
          Transforming ideas into digital experiences
          <Sparkles className="w-5 h-5 text-purple-400" />
        </p>
      </div>

      {/* Emoji + Text Section */}
      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-16 items-center justify-between">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="max-w-[300px] sm:max-w-[350px] lg:max-w-[450px] w-full p-4  shadow-md  bg-black">
              <img
                src="/aboutt-removebg-preview.png"
                alt="Emoji"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 text-center lg:text-left w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                Hello, I'm
              </span>
              <span className="block mt-2 text-gray-200">Vardhman Gadade</span>
            </h2>
             <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify pb-4 font-mono">
              I’m a soccer player, developer, and competitive programmer 
              who thrives on challenges—both  on the field and in code.
              Soccer has taught me discipline, teamwork, and focus,
              which I apply in my development projects and coding contests.

              I enjoy building user-friendly web apps and solving algorithmic problems.
            
              My passion for learning keeps me evolving as a developer, while my sports
              
              background fuels my resilience, leadership, and dedication to continuous
              
              improvement in everything I pursue.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </button>

              <a href="#Portofolio" className="w-full sm:w-auto">
                <button className="w-full sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium flex items-center justify-center gap-2">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
          <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden">
              <img
                src="/Photo.png"
                alt="Profile"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {statsData.map(({ icon: Icon, color, value, label, description, animation, link }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-aos={animation}
              data-aos-duration="1300"
              className="relative group hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 h-full flex flex-col justify-between">
                <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10`} />
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-white">{value}</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{label}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-400">{description}</p>
                    <div className="flex items-center gap-2 text-indigo-400 text-xs">
                      <ArrowUpRight className="w-4 h-4 text-white/50" />
                      <span className="hover:underline">View</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
