
import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Video, Image, RotateCcw, Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Translate = () => {
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [detectedSign, setDetectedSign] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);
  const [captureMode, setCaptureMode] = useState<'video' | 'image'>('video');
  const [stream, setStream] = useState<MediaStream | null>(null);

  const startCamera = async () => {
    try {
      const constraints = {
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        }
      };
      
      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
        setIsCameraOn(true);
        
        // Simulate detection after 3 seconds for demo purposes
        setTimeout(() => {
          setDetectedSign('Hello');
          toast({
            title: "Sign Detected",
            description: "The sign for 'Hello' has been recognized.",
          });
        }, 3000);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera Error",
        description: "Could not access your camera. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsCameraOn(false);
      setDetectedSign(null);
    }
  };

  const resetTranslation = () => {
    setDetectedSign(null);
    toast({
      description: "Translation has been reset.",
    });
  };

  const copyToClipboard = () => {
    if (detectedSign) {
      navigator.clipboard.writeText(detectedSign);
      setIsCopied(true);
      toast({
        description: "Copied to clipboard!",
      });
      
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        
        // Here you would normally send the image data to your model
        // For demo purposes, just simulate detection
        setTimeout(() => {
          setDetectedSign('Thank you');
          toast({
            title: "Sign Detected",
            description: "The sign for 'Thank you' has been recognized.",
          });
        }, 1000);
      }
    }
  };

  useEffect(() => {
    // Clean up function to stop camera when component unmounts
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Sign Language Translator</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Use your camera to translate sign language in real-time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Camera View</span>
                  <Tabs 
                    value={captureMode} 
                    onValueChange={(value) => setCaptureMode(value as 'video' | 'image')}
                    className="w-auto"
                  >
                    <TabsList className="grid w-[180px] grid-cols-2">
                      <TabsTrigger value="video" className="flex items-center gap-1">
                        <Video className="w-4 h-4" /> 
                        <span>Video</span>
                      </TabsTrigger>
                      <TabsTrigger value="image" className="flex items-center gap-1">
                        <Image className="w-4 h-4" /> 
                        <span>Image</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </CardTitle>
                <CardDescription>
                  {isCameraOn ? 'Camera is active. Position your hand in the frame.' : 'Turn on your camera to begin translation.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative rounded-lg overflow-hidden bg-muted aspect-video flex items-center justify-center">
                  {!isCameraOn ? (
                    <Button onClick={startCamera} className="absolute z-10 flex items-center gap-2">
                      <Camera className="mr-1" size={18} />
                      Start Camera
                    </Button>
                  ) : (
                    <Button 
                      onClick={stopCamera} 
                      variant="destructive"
                      className="absolute top-4 right-4 z-10"
                    >
                      Stop Camera
                    </Button>
                  )}
                  
                  <video 
                    ref={videoRef} 
                    autoPlay 
                    playsInline 
                    muted 
                    className={`w-full h-full object-cover ${!isCameraOn ? 'opacity-50' : ''}`}
                  />
                  
                  {captureMode === 'image' && isCameraOn && (
                    <Button 
                      onClick={captureImage} 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
                    >
                      Capture Image
                    </Button>
                  )}
                </div>
                
                {/* Hidden canvas for image capturing */}
                <canvas ref={canvasRef} className="hidden" />
                
                <div className="flex justify-center mt-4 space-x-2">
                  {captureMode === 'image' && (
                    <Button 
                      onClick={captureImage} 
                      disabled={!isCameraOn}
                      className="w-full"
                    >
                      <Camera className="mr-2" size={18} />
                      Capture Image
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Detected Sign</span>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      disabled={!detectedSign}
                      onClick={resetTranslation}
                    >
                      <RotateCcw className="w-4 h-4 mr-1" />
                      Reset
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      disabled={!detectedSign}
                      onClick={copyToClipboard}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 mr-1" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </CardTitle>
                <CardDescription>
                  The translation of the detected sign will appear here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg min-h-[200px] flex flex-col items-center justify-center p-6">
                  {detectedSign ? (
                    <>
                      <h3 className="text-3xl font-bold text-center mb-2">{detectedSign}</h3>
                      <p className="text-muted-foreground text-center">
                        Sign detected with high confidence.
                      </p>
                    </>
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <p className="mb-2">No sign detected yet.</p>
                      <p className="text-sm">Start the camera and make a sign gesture to begin.</p>
                    </div>
                  )}
                </div>
                
                {detectedSign && (
                  <div className="mt-6 space-y-4">
                    <h4 className="font-medium">Recent Detections</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-background rounded-md border">
                        <span>{detectedSign}</span>
                        <span className="text-sm text-muted-foreground">Just now</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>How to Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-foreground/80">1. Start your camera using the button above.</p>
                <p className="text-foreground/80">2. Position your hand in the frame and make a sign.</p>
                <p className="text-foreground/80">3. Hold the sign steady for best recognition.</p>
                <p className="text-foreground/80">4. The translated sign will appear in the detected sign panel.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Translate;
