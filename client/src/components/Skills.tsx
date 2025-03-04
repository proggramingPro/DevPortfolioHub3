import { motion } from "framer-motion";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiDocker } from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiDocker, name: "Docker" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 p-6 rounded-lg bg-card"
            >
              <skill.icon className="w-12 h-12 text-primary" />
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
