import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neural Network Image Classifier",
    description: "Deep learning model for real-time image classification using transfer learning with EfficientNet",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    tech: ["PyTorch", "OpenCV", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "NLP Sentiment Analysis",
    description: "BERT-based sentiment analysis system for social media monitoring with 95% accuracy",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387",
    tech: ["Transformers", "TensorFlow", "Flask"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Time Series Forecasting",
    description: "Advanced forecasting model using LSTM networks for predicting market trends",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7",
    tech: ["Keras", "Pandas", "Plotly"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">ML Projects</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A selection of my machine learning projects, demonstrating expertise in 
          computer vision, natural language processing, and predictive analytics.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
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
                  <div className="flex gap-4 mt-auto">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
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