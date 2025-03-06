import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post('/api/questions', async (req, res) => {
    try {
      const { name, email, question } = req.body;
      
      // Validate input
      if (!name || !email || !question) {
        return res.status(400).json({ 
          message: 'Please provide name, email and question' 
        });
      }
      
      // Store the question (you could expand this functionality)
      // For now, just log it
      console.log('New question received:', { name, email, question });
      
      // Return success
      return res.status(200).json({ 
        message: 'Question received successfully' 
      });
    } catch (error) {
      console.error('Error handling question:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your question' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
