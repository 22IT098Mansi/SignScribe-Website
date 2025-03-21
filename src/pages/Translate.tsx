
import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Camera, MessageSquare, HandMetal, RefreshCw, Copy, RotateCw, PauseCircle, PlayCircle } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const Translate = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isCameraReady, setCameraReady] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [detectedSign, setDetectedSign] = useState<string | null>(null);
  const [textToTranslate, setTextToTranslate] = useState('');
  const [translatedSigns, setTranslatedSigns] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('camera');
  const [cameraError, setCameraError] = useState('');
  
  useEffect(() => {
    if (activeTab === 'camera') {
      initializeCamera();
    } else {
      stopCamera();
    }
    
    return () => {
      stopCamera();
    };
  }, [activeTab]);

  const initializeCamera = async () => {
    try {
      setCameraError('');
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 } 
        },
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
      setCameraError('Could not access camera. Please check permissions and try again.');
      toast({
        title: "Camera Access Error",
        description: "Could not access your camera. Please check your permissions.",
        variant: "destructive"
      });
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setCameraReady(false);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      // In a real app, this would stop sending frames to the model
      
      // For demo purposes, simulate a detection after stopping
      const possibleSigns = ["Hello", "Thank You", "Yes", "No", "Please", "Help", "Friend", "Sorry"];
      const randomSign = possibleSigns[Math.floor(Math.random() * possibleSigns.length)];
      
      setTimeout(() => {
        setDetectedSign(randomSign);
        toast({
          title: "Sign Detected",
          description: `Detected sign: ${randomSign}`,
        });
      }, 1000);
      
    } else {
      // Start recording
      setIsRecording(true);
      setDetectedSign(null);
    }
  };

  const handleTextTranslation = () => {
    if (!textToTranslate.trim()) {
      toast({
        title: "Empty Input",
        description: "Please enter some text to translate to sign language.",
        variant: "destructive"
      });
      return;
    }
    
    // For demo purposes, just split the text into words
    const words = textToTranslate.trim().split(/\s+/).filter(word => word.length > 0);
    
    if (words.length > 0) {
      setTranslatedSigns(words);
      toast({
        title: "Translation Complete",
        description: `Translated ${words.length} words to sign language.`,
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(detectedSign || '');
    toast({
      title: "Copied to Clipboard",
      description: `"${detectedSign}" has been copied to your clipboard.`,
    });
  };

  const resetTranslation = () => {
    setDetectedSign(null);
    setIsRecording(false);
    toast({
      title: "Reset Complete",
      description: "The translation has been reset.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sign Language Translator</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real-time translation between sign language and text using our advanced AI technology.
            </p>
          </div>
          
          <Tabs defaultValue="camera" onValueChange={setActiveTab} className="mb-8">
            <TabsList className="grid grid-cols-2 mb-8 w-full max-w-md mx-auto">
              <TabsTrigger value="camera" className="flex items-center gap-2">
                <Camera size={16} />
                <span>Sign to Text</span>
              </TabsTrigger>
              <TabsTrigger value="text" className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>Text to Sign</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Sign to Text Translation */}
            <TabsContent value="camera">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Camera Feed</CardTitle>
                      <CardDescription>
                        Position your hands in frame and sign clearly
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-muted rounded-md overflow-hidden mb-4 relative">
                        {cameraError ? (
                          <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                            <div>
                              <p className="text-red-500 mb-3">{cameraError}</p>
                              <Button onClick={initializeCamera} size="sm">
                                Retry Camera Access
                              </Button>
                            </div>
                          </div>
                        ) : isCameraReady ? (
                          <video 
                            ref={videoRef} 
                            autoPlay 
                            playsInline 
                            muted
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-pulse">Initializing camera...</div>
                          </div>
                        )}
                        
                        {isRecording && (
                          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full animate-pulse">
                            Recording
                          </div>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-3 justify-center">
                        <Button 
                          variant={isRecording ? "destructive" : "default"}
                          className="flex items-center gap-2"
                          onClick={toggleRecording}
                          disabled={!isCameraReady}
                        >
                          {isRecording ? (
                            <>
                              <PauseCircle size={16} />
                              Stop Detection
                            </>
                          ) : (
                            <>
                              <PlayCircle size={16} />
                              Start Detection
                            </>
                          )}
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2"
                          onClick={resetTranslation}
                        >
                          <RefreshCw size={16} />
                          Reset
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2"
                          onClick={() => {
                            stopCamera();
                            setTimeout(initializeCamera, 500);
                          }}
                        >
                          <RotateCw size={16} />
                          Restart Camera
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>Detected Sign</CardTitle>
                      <CardDescription>
                        {detectedSign 
                          ? "Here's what we detected" 
                          : isRecording 
                            ? "Detecting signs..." 
                            : "Start detection to see results"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="min-h-[200px] flex flex-col items-center justify-center">
                        {detectedSign ? (
                          <div className="text-center">
                            <div className="text-4xl font-bold mb-4 text-primary">{detectedSign}</div>
                            <div className="flex justify-center gap-2 mt-6">
                              <Button 
                                variant="outline" 
                                className="flex items-center gap-2"
                                onClick={copyToClipboard}
                              >
                                <Copy size={16} />
                                Copy
                              </Button>
                            </div>
                          </div>
                        ) : isRecording ? (
                          <div className="text-center opacity-75">
                            <HandMetal size={48} className="mx-auto mb-4 animate-pulse" />
                            <p>Watching for signs...</p>
                          </div>
                        ) : (
                          <div className="text-center text-muted-foreground">
                            <HandMetal size={48} className="mx-auto mb-4 opacity-50" />
                            <p>No signs detected yet</p>
                            <p className="text-sm mt-2">Press Start Detection to begin</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="mt-6 text-center max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground">
                  Note: This is a demonstration. For the most accurate results, ensure good lighting, 
                  clear hand visibility, and position yourself centered in the frame.
                </p>
              </div>
            </TabsContent>
            
            {/* Text to Sign Translation */}
            <TabsContent value="text">
              <Card>
                <CardHeader>
                  <CardTitle>Text to Sign Translation</CardTitle>
                  <CardDescription>
                    Enter text to convert into sign language
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Enter Text
                      </label>
                      <Textarea 
                        placeholder="Type your message here..."
                        className="min-h-[150px]"
                        value={textToTranslate}
                        onChange={(e) => setTextToTranslate(e.target.value)}
                      />
                      <div className="mt-4">
                        <Button 
                          onClick={handleTextTranslation}
                          className="w-full"
                        >
                          Translate to Sign Language
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Sign Language Representation
                      </label>
                      <div className="border rounded-md min-h-[200px] p-4 bg-muted/50">
                        {translatedSigns.length > 0 ? (
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {translatedSigns.map((word, index) => (
                              <div key={index} className="text-center">
                                <div className="aspect-square flex items-center justify-center bg-primary/10 rounded-md mb-2">
                                  <span className="text-xl font-bold">{word.charAt(0).toUpperCase()}</span>
                                </div>
                                <p className="text-sm truncate">{word}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center text-muted-foreground">
                            <p>Enter text and click translate to see sign language</p>
                          </div>
                        )}
                      </div>
                      
                      {translatedSigns.length > 0 && (
                        <div className="mt-4 flex justify-end">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setTranslatedSigns([])}
                          >
                            Clear Results
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 text-center max-w-2xl mx-auto">
                <p className="text-sm text-muted-foreground">
                  Text to sign language translation shows how each word would be signed.
                  For complex sentences, grammar may differ from spoken language.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Translate;
