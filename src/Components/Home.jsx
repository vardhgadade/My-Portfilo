import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      isHovering: false,
    };
  }

  componentDidMount() {
    AOS.init({ once: true, offset: 10 });
    this.setState({ isLoaded: true });
  }

  handleMouseEnter = () => this.setState({ isHovering: true });
  handleMouseLeave = () => this.setState({ isHovering: false });

  render() {
    const { isLoaded, isHovering } = this.state;

    const lottieOptions = {
      src: "https://lottie.host/58753882-bb6a-49f5-a2c0-950eda1e135a/NLbpVqGegK.lottie",
      loop: true,
      autoplay: true,
      speed: 1,
      style: { width: "100%", height: "100%" },
      className: `w-full h-full transition-all duration-500 ${
        isHovering
          ? "scale-[180%] sm:scale-[160%] md:scale-[150%] lg:scale-[145%] rotate-2"
          : "scale-[175%] sm:scale-[155%] md:scale-[145%] lg:scale-[140%]"
      }`,
    };

    return (
      <div className="min-h-screen bg-[#030014] overflow-hidden" id="Home">
        {/* First Section - Lottie Right, Text Left */}
        <div
          className={`relative z-10 transition-all duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* LEFT - Text */}
              <div
                className="w-full lg:w-1/2 text-left"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Frontend Developer
                </h1>
                <p className="font-serif text-white text-base sm:text-lg leading-relaxed max-w-xl">
                  Turning ideas into pixel-perfect reality — I’m{" "}
                  <strong>Vardhman Gadade</strong>, a{" "}
                  <strong>Front-End Engineer</strong> who crafts interactive,
                  high-performance user experiences using{" "}
                  <strong>React</strong>, <strong>Angular</strong>,{" "}
                  <strong>JavaScript</strong>, and{" "}
                  <strong>modern UI frameworks</strong>. Whether it's building
                  clean UIs or optimizing for performance, I bring design to
                  life through code that speaks. Trying To Showcase my
                  Creativity In my Web-pages.
                </p>
              </div>

              {/* RIGHT - Lottie */}
              <div
                className="w-full mt-[50px] lg:w-1/2 flex justify-center"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <DotLottieReact {...lottieOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Image Left, Text Right */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#030014]">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* LEFT - Image */}
            <div
              className="w-full lg:w-1/2 flex justify-center"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <img
                src="/back.jpeg"
                alt="Backend Illustration"
                className="w-full max-w-[400px] rounded-lg shadow-xl"
              />
            </div>

            {/* RIGHT - Text */}
            <div
              className="w-full lg:w-1/2 text-left"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Back-End Developer
              </h2>
              <p className="font-serif text-white text-base sm:text-lg leading-relaxed max-w-xl">
                As a backend developer, I love setting the foundation for how
                things work behind the scenes. While the frontend interacts with
                users, the backend is where the real logic lives — and that’s
                where I feel at home. I enjoy designing systems that are
                efficient, secure, and help everything run smoothly, even if
                users never see them directly. It's like setting the mind of an
                application and converting human language into bits — making
                sure it thinks clearly and responds properly.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
