
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Languages, MegaphoneIcon, GraduationCap } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Languages size={24} />,
      title: "Real-Time Sign Language Translation",
      description: "Our AI-powered technology recognizes and translates sign language in real-time, breaking down communication barriers instantly.",
      primary: true
    },
    {
      icon: <MegaphoneIcon size={24} />,
      title: "Clear & Accurate Communication",
      description: "Experience seamless communication with high accuracy translation between signed and spoken language.",
      primary: false
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Learn & Practice Sign Language",
      description: "Enhance your signing skills with our comprehensive learning modules and practice tools with real-time feedback.",
      primary: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">Breaking Barriers in Communication</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Our innovative technology makes sign language translation accessible to everyone
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-2 bg-card hover:shadow-md transition-shadow ${feature.primary ? 'border-primary/20 bg-primary/5' : ''}`}
            >
              <CardContent className="pt-6">
                <div className={`w-12 h-12 rounded-full ${feature.primary ? 'bg-primary/20 text-primary' : 'bg-accent/10 text-accent'} flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 mb-4">
                  {feature.description}
                </p>
                <a 
                  href={index === 0 ? "/translate" : index === 1 ? "/about" : "/learn"} 
                  className={`${feature.primary ? 'text-primary' : 'text-accent'} hover:text-accent/80 inline-flex items-center text-sm font-medium`}
                >
                  <span>Learn more</span>
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
