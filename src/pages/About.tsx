
import React from 'react';
import Navbar from '../components/Navbar';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle
} from "@/components/ui/card";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Sign Scribe</h1>
            <p className="text-lg text-foreground/70">
              Breaking barriers in sign language communication
            </p>
          </div>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed">
                    At Sign Scribe, our mission is to bridge the communication gap between the deaf and hearing communities 
                    through innovative technology. We believe that language should never be a barrier to human connection, 
                    and we're dedicated to making sign language accessible to everyone.
                  </p>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Technology</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI-Powered Recognition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Our advanced AI algorithms can recognize and interpret sign language gestures with 
                      remarkable accuracy, enabling real-time translation between sign language and text.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Comprehensive Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We've developed an intuitive learning platform that helps users of all ages learn 
                      sign language through interactive lessons, practice sessions, and real-time feedback.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed mb-6">
                    Our diverse team brings together experts in artificial intelligence, linguistics, 
                    accessibility, and education. Many of our team members have personal connections 
                    to the deaf community, which fuels our passion for this work.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    We work closely with deaf consultants and organizations to ensure that our technology 
                    accurately represents sign language and meets the needs of the communities we serve.
                  </p>
                </CardContent>
              </Card>
            </section>
            
            <section>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Involved</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Join Our Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Connect with other learners, share your progress, and get support from 
                      our community of sign language enthusiasts.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/90 text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Become a Contributor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      Help us improve our sign language datasets by contributing videos, 
                      feedback, and suggestions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/80 text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Partner With Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We're always looking for organizations to partner with to expand 
                      our impact and reach more communities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      {/* Footer would be here if needed */}
    </div>
  );
};

export default About;
