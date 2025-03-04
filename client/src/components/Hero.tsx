import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Full Stack Developer
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            I build exceptional digital experiences that combine beautiful design with powerful functionality.
          </p>
          <div className="mt-8 flex gap-4">
            <Button size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
