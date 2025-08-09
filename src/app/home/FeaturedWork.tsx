import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function FeaturedWork() {
  const projects = [
    {
      title: "NEURAL INTERFACE",
      subtitle: "AI Dashboard Platform",
      description:
        "Designing the future of human-AI interaction through minimal, intuitive interfaces.",
      year: "2024",
      tags: ["UI/UX", "AI", "DASHBOARD"],
    },
    {
      title: "QUANTUM COMMERCE",
      subtitle: "E-commerce Platform",
      description:
        "Redefining digital commerce with seamless, frictionless user experiences.",
      year: "2024",
      tags: ["E-COMMERCE", "3D", "WEBGL"],
    },
    {
      title: "DIGITAL IDENTITY",
      subtitle: "Brand System",
      description:
        "Creating cohesive digital identities that transcend traditional boundaries.",
      year: "2023",
      tags: ["BRANDING", "IDENTITY", "SYSTEM"],
    },
  ];

  return (
    <motion.section
      className="container mx-auto px-8 py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="mb-20"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent mb-8" />
        <h2 className="text-4xl font-extralight tracking-wider">
          SELECTED WORK
        </h2>
      </motion.div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="group cursor-pointer"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black border border-white/5 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        borderColor: "rgba(255,255,255,0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExternalLink className="w-6 h-6 text-white/50" />
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div>
                  <p className="text-xs font-light tracking-widest text-gray-500 mb-2">
                    {project.year}
                  </p>
                  <h3 className="text-2xl font-light tracking-wider mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-300 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-light tracking-widest border border-white/10 text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 
