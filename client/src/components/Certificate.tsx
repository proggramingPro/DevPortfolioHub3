import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";
const certificatesData = [
  {
    title: "Python Certificate",
    description: "Certified Python skill test.",
    image: "/python-1.png",
  },
  {
    title: "MongoDb BootCamp Certificate",
    description: "Completed MongoDb Bootcamp on Lets Upgarade.",
    image: "/mongo.png",
  },
  {
    title: "JioCinema React Clone",
    description: "Completed JioCinema React Clone BootCamp.",
    image: "/jio.png",
  }
];

interface Certificate {
  title: string;
  description: string;
  image: string;
}

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const handleClosePopup = () => {
    setSelectedCertificate(null);
  };
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
                  className="w-full h-48 object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedCertificate(certificate)}
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

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={handleClosePopup}>
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{selectedCertificate.title}</h3>
              <p className="text-gray-600">{selectedCertificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
