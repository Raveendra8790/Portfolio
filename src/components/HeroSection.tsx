import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Typewriter from "./Typewriter";

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1dQZ7aPPj_AJ7VZ4t7Xgpq4FAGpIFqaDo/view?usp=sharing"; // replace with your actual file ID
  link.setAttribute("download", "Asadi_Raveendra_CV.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-20 bg-gradient-to-br from-white to-gray-100"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h2 className="text-lg text-portfolio-teal font-medium">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-2">
                Asadi Raveendra
              </h1>
              <h3 className="text-2xl md:text-3xl text-portfolio-purple font-semibold">
                <h2 className="text-2xl md:text-3xl text-gray-800">
                  And I'm a{" "}
                  <Typewriter
                    words={[
                      "Software Developer",
                      "Front-end Developer",
                      "Back-end Developer",
                      "Full-Stack Developer",
                    ]}
                    wait={2000}
                  />
                </h2>
              </h3>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              I’m a passionate Software Developer specializing in Java ,
              Sprinboot and React js, focused on building Middleware Backend
              Applications and responsive, user-friendly web applications. I
              love transforming complex ideas into clean, scalable, and
              efficient solutions for real-world challenges.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={handleDownloadCV}
                className="bg-portfolio-purple hover:bg-portfolio-purple/90"
              >
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                className="border-portfolio-teal text-portfolio-teal hover:bg-portfolio-teal/10"
              >
                <a href="#projects" className="flex items-center">
                  View Projects
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-portfolio-purple/20 to-portfolio-teal/20 p-1">
              <div className="absolute inset-0 bg-white rounded-lg overflow-hidden">
                {/* You can replace this with an actual image */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  {/* <span className="text-gray-500 text-lg">Your Profile Image</span> */}
                  <img
                    src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg"
                    className="p-2 rounded-xl"
                    alt="heroimage"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-portfolio-teal/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-portfolio-purple/10 rounded-full"></div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        >
          <span className="text-gray-500 mb-2">Scroll Down</span>
          <ArrowDown
            className="animate-bounce text-portfolio-purple"
            size={20}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
