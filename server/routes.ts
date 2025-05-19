import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for newsletter subscription
  app.post('/api/newsletter', async (req, res) => {
    try {
      const { email, name, resourceInterests, skillLevel, agreedToTerms } = req.body;
      
      // Validate input
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Valid email is required' });
      }
      
      if (!agreedToTerms) {
        return res.status(400).json({ message: 'You must agree to receive our newsletter' });
      }
      
      // Log subscription info (in a real application, this would be saved to a database)
      console.log('New newsletter subscription:', {
        email,
        name: name || 'Not provided',
        resourceInterests: resourceInterests || [],
        skillLevel: skillLevel || 'Not specified',
        subscribedAt: new Date().toISOString()
      });
      
      // Return success response
      return res.status(200).json({ 
        message: 'Successfully subscribed to newsletter',
        subscribed: true 
      });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      return res.status(500).json({ message: 'Server error during subscription' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
