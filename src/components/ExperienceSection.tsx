import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection: React.FC = () => {
  const experienceData = [
    {
      id: 1,
      position: "Software Engineer – Java Full Stack Developer",
      company: "Electem Business Solutions (Client: Cultuzz)",
      location: "Bangalore",
      duration: "May 2024 - Present",
      description:
        "Working on a production-grade middleware platform integrating multiple global OTA suppliers for a B2B booking system, handling real-time availability and reservation workflows.",
      responsibilities: [
        "Built and maintained REST APIs for availability, rate plans, booking, and cancellation flows",
        "Integrated multiple OTA suppliers (eHotel, Nuitee, HyperGuest, Seekda) into a unified system",
        "Designed data transformation logic to normalize inconsistent supplier data",
        "Implemented JWT-based authentication and role-based access control using Spring Security",
        "Resolved production issues and handled real-time API debugging with external suppliers",
      ],
    },
    {
      id: 2,
      position: "Frontend / Full Stack Developer",
      company: "GENXYZ Construction Platform",
      location: "Bangalore",
      duration: "Jul 2025 - Present",
      description:
        "Building a SaaS platform for solar design and project collaboration with full-stack ownership across frontend and backend features.",
      responsibilities: [
        "Developed modular React components for dashboards and project workflows",
        "Implemented role-based authentication and secure session handling",
        "Worked on real-time project tracking and collaboration features",
        "Integrated backend APIs using Node.js and Supabase",
        "Optimized UI performance and component reusability",
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Work Experience</h2>
            <p className="text-gray-600 mt-4">
              My professional journey has allowed me to work on diverse projects
              and gain valuable industry experience.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {experienceData.map((job) => (
              <motion.div
                key={job.id}
                variants={item}
                className="timeline-item"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0 bg-portfolio-teal/10 p-3 rounded-full">
                        <Briefcase className="h-6 w-6 text-portfolio-teal" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-portfolio-dark">
                          {job.position}
                        </h3>
                        <h4 className="text-lg font-medium text-portfolio-teal">
                          {job.company}
                        </h4>
                        <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{job.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span>{job.location}</span>
                          </div>
                        </div>
                        <p className="text-gray-600">{job.description}</p>
                        <div className="mt-3">
                          <h5 className="font-medium text-portfolio-purple mb-2">
                            Key Responsibilities:
                          </h5>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            {job.responsibilities.map(
                              (responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                              ),
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
