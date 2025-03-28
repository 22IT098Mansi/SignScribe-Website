
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import Button from '../components/Button';
import { ArrowRight, Languages, Lightbulb, GraduationCap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        
        {/* How it Works Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">How Sign Scribe Works</h2>
              <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                Our platform makes real-time sign language translation accessible to everyone
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -z-10 transform -translate-y-1/2"></div>
              
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-background rounded-xl p-6 shadow-md border border-border relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Languages size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real-Time Translation</h3>
                  <p className="text-foreground/70">
                    Our AI technology translates sign language to text in real-time, breaking communication barriers instantly and providing seamless interaction between signers and non-signers.
                  </p>
                  <div className="mt-4">
                    <a href="/translate" className="text-primary hover:text-primary/80 inline-flex items-center text-sm font-medium">
                      <span>Try translator</span>
                      <ArrowRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
                <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary text-primary items-center justify-center font-bold z-20">
                  1
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent">10k+</p>
                <p className="mt-2 text-foreground/70">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent">98%</p>
                <p className="mt-2 text-foreground/70">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-accent">24/7</p>
                <p className="mt-2 text-foreground/70">Support</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">What Our Users Say</h2>
              <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                Hear from people who have transformed how they communicate
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                        M
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Maria T.</p>
                      <p className="text-sm text-muted-foreground">Teacher</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic">
                    "Sign Scribe has revolutionized my classroom. Now all my students can communicate effectively, regardless of hearing ability."
                  </p>
                </CardContent>
              </Card>
              
              {/* Testimonial 2 */}
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                        J
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">James D.</p>
                      <p className="text-sm text-muted-foreground">Software Developer</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic">
                    "The accuracy of the translation is impressive. It's helped me communicate with my deaf colleagues much more effectively."
                  </p>
                </CardContent>
              </Card>
              
              {/* Testimonial 3 */}
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary">
                        S
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">Sarah K.</p>
                      <p className="text-sm text-muted-foreground">Student</p>
                    </div>
                  </div>
                  <p className="text-foreground/80 italic">
                    "Learning sign language seemed daunting, but Sign Scribe made it fun and interactive. I'm already having conversations with my deaf friends!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-accent text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to break language barriers?</h2>
            <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto">
              Join thousands of users already transforming how they communicate with sign language.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                to="/signup" 
                className="bg-white text-accent hover:bg-white/90"
                size="lg"
              >
                Get Started Free
              </Button>
              <Button 
                to="/translate" 
                className="bg-transparent border border-white hover:bg-white/10"
                size="lg"
              >
                Try Translator
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 text-xl font-bold mb-4">
                <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-lg">
                  S
                </span>
                <span>Sign Scribe</span>
              </div>
              <p className="text-foreground/70 mb-4">
                Breaking barriers in sign language communication.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="/learn" className="text-foreground/70 hover:text-accent">Learn</a></li>
                <li><a href="/translate" className="text-foreground/70 hover:text-accent">Translate</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">Pricing</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-foreground/70 hover:text-accent">About</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">Blog</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">Careers</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-foreground/70 hover:text-accent">Privacy</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">Terms</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">Cookie Policy</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/70 text-sm">
              © 2023 Sign Scribe. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-foreground/70 hover:text-accent" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-accent" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
