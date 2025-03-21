
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { ArrowRight, HandMetal, Wand2 } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[15%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="animate-fadeIn">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
                Breaking barriers in sign language
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Connect through 
                <span className="relative whitespace-nowrap">
                  <span className="block absolute -inset-1 skew-y-3 bg-accent/20" aria-hidden="true"></span>
                  <span className="relative text-accent"> sign language</span>
                </span>
                with ease
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/70 max-w-2xl">
                Our AI-powered platform bridges communication gaps between deaf and hearing communities, making sign language accessible to everyone.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  to="/signup" 
                  size="lg"
                  className="group"
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  to="/translate" 
                  variant="outline" 
                  size="lg"
                >
                  Try Translator
                </Button>
              </div>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="bg-background rounded-full px-4 py-1 text-sm border shadow-sm flex items-center gap-2">
                  <Wand2 size={14} className="text-accent" />
                  <span>AI-Powered</span>
                </div>
                <div className="bg-background rounded-full px-4 py-1 text-sm border shadow-sm flex items-center gap-2">
                  <HandMetal size={14} className="text-primary" />
                  <span>98% Accuracy</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Video/Image */}
          <div className="relative animate-slideUp lg:translate-x-8" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-video bg-gradient-to-r from-primary/20 to-accent/20 relative">
                {/* This would be a video showcase of the product */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white/80" fill="none" viewBox="0 0 24 24">
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path 
                      stroke="currentColor" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </div>
                
                {/* Screenshot Overlay */}
                <img 
                  src="https://images.unsplash.com/photo-1531951634065-9a68ea6a31b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" 
                  alt="Sign language demonstration" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-primary-foreground p-4 rounded-lg shadow-lg rotate-6 max-w-[200px] transform hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">A</div>
                  <div className="text-sm font-medium">Sign detected</div>
                </div>
                <div className="h-1 w-full bg-muted rounded-full mb-2">
                  <div className="h-1 w-3/4 bg-accent rounded-full"></div>
                </div>
                <div className="text-xs text-muted-foreground">Confidence: 98%</div>
              </div>
            </div>
            
            {/* Accent elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-primary/20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
