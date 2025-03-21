
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface SignData {
  id: string;
  letter: string;
  videoUrl: string;
  description: string;
  category: 'alphabet' | 'numbers' | 'common';
}

const PracticeSign = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [sign, setSign] = useState<SignData | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [progress, setProgress] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isCameraReady, setCameraReady] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  
  // Refs for video recording
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  
  useEffect(() => {
    // Get sign data from location state
    if (location.state?.sign) {
      setSign(location.state.sign);
    } else {
      // If no sign data, go back to learn page
      navigate('/learn');
      toast({
        title: "Error",
        description: "No sign selected for practice. Redirected to learn page.",
        variant: "destructive"
      });
    }
    
    // Initialize camera
    const setupCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: "user" },
          audio: false 
        });
        
        setStream(mediaStream);
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          videoRef.current.onloadedmetadata = () => {
            setCameraReady(true);
          };
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        toast({
          title: "Camera Access Denied",
          description: "Please allow camera access to practice sign language.",
          variant: "destructive"
        });
      }
    };
    
    setupCamera();
    
    // Cleanup function
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [location, navigate, toast]);

  const convertGoogleDriveUrl = (url: string): string => {
    const fileId = url?.split('/d/')[1]?.split('/view')[0];
    if (!fileId) return '';
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  const startRecording = () => {
    setShowInstructions(false);
    
    if (stream && !isRecording) {
      recordedChunksRef.current = [];
      const options = { mimeType: 'video/webm' };
      
      try {
        mediaRecorderRef.current = new MediaRecorder(stream, options);
        
        mediaRecorderRef.current.ondataavailable = (event) => {
          if (event.data.size > 0) {
            recordedChunksRef.current.push(event.data);
          }
        };
        
        mediaRecorderRef.current.onstop = () => {
          // In a real app, this is where you would send the video to an AI model
          // for analysis. For now, we'll simulate this with a timeout
          setProgress(30);
          setTimeout(() => setProgress(65), 700);
          setTimeout(() => {
            setProgress(100);
            
            // For demo, randomly give feedback
            const feedbacks = [
              "Great job! Your sign was correct.",
              "Good attempt. Try to keep your fingers more straight.",
              "Almost there! Practice the wrist movement a bit more."
            ];
            
            const randomFeedback = feedbacks[Math.floor(Math.random() * feedbacks.length)];
            setFeedback(randomFeedback);
          }, 1500);
        };
        
        mediaRecorderRef.current.start();
        setIsRecording(true);
        
        // Auto-stop after 3 seconds
        setTimeout(() => {
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
          }
        }, 3000);
      } catch (err) {
        console.error("Error starting recording:", err);
        toast({
          title: "Recording Error",
          description: "Could not start recording. Please try again.",
          variant: "destructive"
        });
      }
    }
  };

  const handleTryAgain = () => {
    setFeedback(null);
    setProgress(0);
    setShowInstructions(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <a 
              onClick={() => navigate('/learn')} 
              className="inline-flex items-center text-sm text-accent hover:underline cursor-pointer"
            >
              &larr; Back to Learn
            </a>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
              Practice: {sign?.letter || "Sign"}
            </h1>
            <p className="text-lg text-foreground/70">
              Follow the example and record yourself making the sign.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Reference Video */}
            <Card>
              <CardHeader>
                <CardTitle>Reference Sign</CardTitle>
                <CardDescription>Watch and learn</CardDescription>
              </CardHeader>
              <CardContent>
                {sign && (
                  <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                    <iframe 
                      src={convertGoogleDriveUrl(sign.videoUrl)} 
                      className="w-full h-full" 
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Description:</h3>
                  <p>{sign?.description || "Learn how to sign this correctly."}</p>
                </div>
              </CardContent>
            </Card>
            
            {/* Practice Area */}
            <Card>
              <CardHeader>
                <CardTitle>Your Practice</CardTitle>
                <CardDescription>
                  {isRecording 
                    ? "Recording in progress..." 
                    : feedback 
                      ? "Review your performance" 
                      : "Get ready to record"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4 relative">
                  {isCameraReady ? (
                    <video 
                      ref={videoRef} 
                      autoPlay 
                      playsInline 
                      muted
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-pulse">Loading camera...</div>
                    </div>
                  )}
                  
                  {isRecording && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full animate-pulse">
                      Recording
                    </div>
                  )}
                  
                  {showInstructions && isCameraReady && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-center px-6 py-4 rounded-lg bg-background">
                        <p className="mb-4">Position yourself in frame and press Start when ready.</p>
                        <Button 
                          onClick={startRecording} 
                          variant="default" 
                          size="lg"
                          disabled={isRecording}
                        >
                          Start Practice
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
                {feedback && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Analyzing your sign...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                    
                    <div className={`p-4 rounded-md ${
                      feedback.includes("Great") 
                        ? "bg-green-500/10 text-green-700 dark:text-green-300" 
                        : "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
                    }`}>
                      <h3 className="font-semibold mb-1">Feedback:</h3>
                      <p>{feedback}</p>
                    </div>
                    
                    <div className="flex justify-between pt-2">
                      <Button 
                        onClick={handleTryAgain} 
                        variant="outline"
                      >
                        Try Again
                      </Button>
                      <Button 
                        onClick={() => navigate('/learn')} 
                        variant="default"
                      >
                        Back to Learn
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PracticeSign;
