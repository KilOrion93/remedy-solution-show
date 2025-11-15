// Fix: Added missing import for React to define the React namespace.
import React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: number;
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  avatarUrl: string;
}

export interface ProcessStep {
    id: number;
    title: string;
    description: string;
}