import React from "react";
import { motion } from "framer-motion";
import { School, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection: React.FC = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Application",
      school: "SV University",
      location: "Tirupathi",
      duration: "2020 - 2023",
      description:
        "Gained a strong foundation in software development and database management. Completed academic projects involving Java, SQL, ReactJs and NodeJS, while also improving problem-solving and teamwork skills.",
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
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Education</h2>
            <p className="text-gray-600 mt-4">
              My academic journey has equipped me with a strong foundation in
              computer science and engineering principles.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {educationData.map((itemData) => (
              <motion.div
                key={itemData.id}
                variants={item}
                className="timeline-item"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="flex-shrink-0 bg-portfolio-purple/10 p-3 rounded-full">
                        <School className="h-6 w-6 text-portfolio-purple" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-portfolio-dark">
                          {itemData.degree}
                        </h3>
                        <h4 className="text-lg font-medium text-portfolio-purple">
                          {itemData.school}
                        </h4>
                        <div className="flex items-center text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{itemData.duration}</span>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {itemData.description}
                        </p>
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

export default EducationSection;
