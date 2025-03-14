import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const certificatesData = [
  {
    title: "Python Certificate",
    description: "Certified Python skill test.",
    image: "https://www.hackerrank.com/certificates/iframe/7b2cfe650092",
  },
  {
    title: "MongoDb BootCamp Certificate",
    description: "Completed MongoDb Bootcamp on Lets Upgarade.",
    image: "https://www.mediafire.com/view/4r9p5xvum95fp6b/LUEMDBSEP1241306.png/file",
  },
  {
    title: "JioCinema React Clone",
    description: "Completed JioCinema React Clone BootCamp.",
    image: "https://www.mediafire.com/view/00uht3ylrdsdqmt/LUEDSAJAN1251920.png/file",
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Certificates</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Showcase of my earned certificates.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((certificate, i) => (
            <motion.div
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{certificate.title}</CardTitle>
                  <CardDescription>{certificate.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
