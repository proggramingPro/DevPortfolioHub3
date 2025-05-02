import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image"; // Make sure to import Image

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
    <section className="min-h-[calc(100vh-4rem)] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Your existing text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div
              variants={item}
              className="mb-4 text-sm font-medium text-primary"
            >
              Back-End Engineer
            </motion.div>

            <motion.div
              variants={item}
              className="overflow-hidden"
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Build Systems in
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Back-end</span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 text-xl text-muted-foreground"
            >
              Hi, I'm <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"> Ranjit D. Pawar</span>, a Back-End Engineer passionate about building scalable and efficient systems for modern applications. I specialize in designing robust architectures, optimizing performance, and ensuring seamless data flow between services.
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
                  Discuss Collaboration
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>

          {/* New photo section - added to the right */}
          <motion.div
            variants={item}
            className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Image
              src="/DSA.jpg" // Replace with your image path
              alt="Ranjit D. Pawar"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
