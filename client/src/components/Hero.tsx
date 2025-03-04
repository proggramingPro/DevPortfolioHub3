import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="overflow-hidden"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 text-xl text-muted-foreground"
          >
            I build exceptional digital experiences that combine beautiful design with powerful functionality.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex gap-4"
          >
            <Button
              size="lg"
              asChild
              className="relative transition-transform hover:scale-105"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="relative transition-transform hover:scale-105"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}