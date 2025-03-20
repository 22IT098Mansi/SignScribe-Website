
import React from 'react';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-accent/20 blur-3xl opacity-30"></div>
        <div className="absolute -bottom-[30%] -left-[20%] w-[60%] h-[60%] rounded-full bg-accent/20 blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-8">
            <div className="animate-fadeIn">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full mb-3">
                Breaking barriers in sign language communication
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Connect through sign language with{' '}
                <span className="text-accent">Signa Connect</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
                Our AI-powered platform bridges communication gaps between the deaf and hearing communities, making sign language accessible to everyone.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <Button to="/signup" size="lg">
                Get Started
              </Button>
              <Button to="/demo" variant="outline" size="lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="pt-10 animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <div className="relative mx-auto max-w-3xl rounded-2xl overflow-hidden shadow-xl">
                <div className="aspect-video bg-gray-100 animate-pulse">
                  {/* This would be an image or video showcase of the product */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-accent/50" fill="none" viewBox="0 0 24 24">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
