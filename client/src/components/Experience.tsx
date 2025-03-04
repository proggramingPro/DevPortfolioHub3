import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    period: "2020 - Present",
    description: "Led development of enterprise applications using React and Node.js"
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2018 - 2020",
    description: "Built and maintained client websites and applications"
  },
  {
    title: "Frontend Developer",
    company: "Startup Inc",
    period: "2016 - 2018",
    description: "Developed responsive web applications using modern JavaScript frameworks"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Work Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
