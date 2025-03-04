import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Management Tool",
    description: "A collaborative project management application with real-time updates",
    image: "https://images.unsplash.com/photo-1532630571098-79a3d222b00d",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with payment integration",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    tech: ["Next.js", "Stripe", "MongoDB"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with data visualization",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    tech: ["Vue.js", "D3.js", "Firebase"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
