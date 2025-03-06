import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send the form data to your backend
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-8">
            Have a question or want to work together? Feel free to reach out!
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="your@email.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message here..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        // Reset form after submission
        setFormData({ name: "", email: "", question: "" });
        
        // Reset the submitted state after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        console.error('Submission error:', data.message);
        alert('Error submitting your question. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting your question. Please try again.');
    }
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/50" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold text-center mb-8">Ask Me A Question</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Have a question about my services or want to discuss a potential collaboration? 
          Feel free to reach out below.
        </p>
        
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-lg bg-primary/10 text-center"
            >
              <h3 className="text-xl font-medium mb-2">Thank you for your question!</h3>
              <p>I'll get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="question" className="text-sm font-medium">Your Question</label>
                <Textarea 
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder="What would you like to ask?"
                  rows={5}
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full sm:w-auto"
              >
                Submit Question
              </Button>
            </motion.form>
          )}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-medium text-center mb-8">Frequently Asked Questions</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg bg-card/80 backdrop-blur-sm"
              >
                <h4 className="text-lg font-medium mb-2">{item.question}</h4>
                <p className="text-muted-foreground">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in back-end technologies like Node.js, Python, and database systems such as MongoDB and SQL databases."
  },
  {
    question: "Do you work on freelance projects?",
    answer: "Yes, I'm open to freelance opportunities. Feel free to reach out with project details for a discussion."
  },
  {
    question: "What's your approach to system architecture?",
    answer: "I focus on scalable, maintainable architectures that prioritize performance and security while meeting business requirements."
  }
];
