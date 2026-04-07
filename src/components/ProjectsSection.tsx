import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Hotel Supplier Integration Middleware Platform",
      category: "backend",
      image:
        "https://media.istockphoto.com/id/1230414837/photo/web-page-about-search-hotels.jpg?s=612x612&w=0&k=20&c=IGXoFIzfYB1JHRXmIHF2rzqnTH_UDM4i8CHE0BLMIvc=",
      description:
        "Built a production-grade middleware platform integrating multiple global OTA suppliers (eHotel, Nuitee, HyperGuest) into a unified booking system handling real-time availability, rate plans, and reservations.",
      technologies: [
        "Java",
        "Spring Boot",
        "Microservices",
        "PostgreSQL",
        "RabbitMQ",
        "REST APIs",
      ],
      liveLink: "https://nuitee.roomdb.io/nuitee-api/swagger-ui/index.html#/",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Multi-Supplier Booking APIs (eHotel / HyperGuest)",
      category: "backend",
      image:
        "https://media.istockphoto.com/id/815218486/photo/booking-hotel-travel-traveler-search-business-reservation.jpg?s=612x612&w=0&k=20&c=I9lJdqhviPn8HVxSsHxtfoIpSCVV4bYnT3QO6jidmVk=",
      description:
        "Developed and maintained multiple supplier-specific APIs with data transformation pipelines, handling inconsistent schemas and enabling seamless integration into internal RoomDB systems.",
      technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "API Integration",
      ],
      liveLink:
        "https://prod.ehotel.adapter.roomdb.io/ehotel-api/swagger-ui/index.html#/",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Construction CRM & Solar Design Platform",
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      description:
        "Full-stack SaaS platform for solar project management with role-based dashboards, real-time collaboration, and modular React architecture.",
      technologies: ["React", "Node.js", "Supabase", "TailwindCSS"],
      liveLink: "https://prod-app.gen-xyz.io/",
      githubLink: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    // { id: 'web', label: 'Web Development' },
    // { id: 'mobile', label: 'Mobile Apps' },
    // { id: 'design', label: 'UI/UX Design' },
    // { id: 'ai', label: 'AI Projects' }
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-heading">My Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here's a selection of projects I've worked on. Each one presented
            unique challenges and opportunities for learning and growth.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              className={
                filter === category.id
                  ? "bg-portfolio-purple hover:bg-portfolio-purple/90"
                  : "hover:bg-portfolio-purple/10 hover:text-portfolio-purple"
              }
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="project-card"
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between mt-4">
                    <Button
                      variant="outline"
                      className="flex items-center gap-1 text-portfolio-purple border-portfolio-purple hover:bg-portfolio-purple/10"
                      asChild
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    </Button>
                    <Button
                      className="flex items-center gap-1 bg-portfolio-teal hover:bg-portfolio-teal/90"
                      asChild
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye size={16} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
