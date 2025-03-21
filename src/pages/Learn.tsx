
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SignData {
  id: string;
  letter: string;
  videoUrl: string;
  description: string;
  category: 'alphabet' | 'numbers' | 'common';
}

const Learn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [signData, setSignData] = useState<SignData[]>([]);
  const [filteredData, setFilteredData] = useState<SignData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Expanded data set with more letters, numbers, and common words
    const expandedData: SignData[] = [
      // Alphabet signs A-Z
      {
        id: '1',
        letter: 'A',
        videoUrl: 'https://drive.google.com/file/d/1D61fPSFSMEFzIbB9KL2gz1-TT8QeYDLf/preview',
        description: 'The letter A is signed by making a closed fist with your thumb on the side, not wrapped around your fingers.',
        category: 'alphabet'
      },
      {
        id: '2',
        letter: 'B',
        videoUrl: 'https://drive.google.com/file/d/1DHUgUOmxRFm8qeQ3EK94D4b5eqOeD62e/preview',
        description: 'The letter B is signed by holding up your palm, fingers together, pointing up with the thumb tucked across the palm.',
        category: 'alphabet'
      },
      {
        id: '3',
        letter: 'C',
        videoUrl: 'https://drive.google.com/file/d/1G-Rn7UzwNSBGeDIfxReLDZtylaS_8OWj/preview',
        description: 'The letter C is signed by curving your fingers and thumb to form a C shape.',
        category: 'alphabet'
      },
      {
        id: '4',
        letter: 'D',
        videoUrl: 'https://drive.google.com/file/d/1G-Rn7UzwNSBGeDIfxReLDZtylaS_8OWj/preview',
        description: 'The letter D is signed by making a circle with your thumb and index finger, with other fingers pointing up.',
        category: 'alphabet'
      },
      {
        id: '5',
        letter: 'E',
        videoUrl: 'https://drive.google.com/file/d/1G-Rn7UzwNSBGeDIfxReLDZtylaS_8OWj/preview',
        description: 'The letter E is signed by curling your fingers toward your palm, with your thumb resting on your fingernails.',
        category: 'alphabet'
      },
      {
        id: '6',
        letter: 'F',
        videoUrl: 'https://drive.google.com/file/d/1G-Rn7UzwNSBGeDIfxReLDZtylaS_8OWj/preview',
        description: 'The letter F is signed by touching your thumb to your index finger, forming a circle, with the other fingers extended.',
        category: 'alphabet'
      },
      {
        id: '7',
        letter: 'G',
        videoUrl: 'https://drive.google.com/file/d/1G-Rn7UzwNSBGeDIfxReLDZtylaS_8OWj/preview',
        description: 'The letter G is signed by extending your index finger and thumb parallel to each other, pointing forward.',
        category: 'alphabet'
      },
      {
        id: '8',
        letter: 'H',
        videoUrl: 'https://drive.google.com/file/d/1G-Rn7UzwNSBGeDIfxReLDZtylaS_8OWj/preview',
        description: 'The letter H is signed by extending your index and middle fingers side by side, with other fingers closed.',
        category: 'alphabet'
      },
      
      // Numbers 1-10
      {
        id: '27',
        letter: '1',
        videoUrl: 'https://drive.google.com/file/d/1zRZ0zxRwDdVvQeNmJubBLJWYYoRqKpRx/preview',
        description: 'The number 1 is signed by pointing up with your index finger, with all other fingers closed.',
        category: 'numbers'
      },
      {
        id: '28',
        letter: '2',
        videoUrl: 'https://drive.google.com/file/d/1mCsDqMlotUNjJ-_OQ9UVZIlUjIKq_PRn/preview',
        description: 'The number 2 is signed by extending your index and middle fingers up, with other fingers closed.',
        category: 'numbers'
      },
      {
        id: '29',
        letter: '3',
        videoUrl: 'https://drive.google.com/file/d/1mCsDqMlotUNjJ-_OQ9UVZIlUjIKq_PRn/preview',
        description: 'The number 3 is signed by extending your thumb, index, and middle fingers up, with other fingers closed.',
        category: 'numbers'
      },
      {
        id: '30',
        letter: '4',
        videoUrl: 'https://drive.google.com/file/d/1mCsDqMlotUNjJ-_OQ9UVZIlUjIKq_PRn/preview',
        description: 'The number 4 is signed by extending your fingers (except thumb) up, with thumb closed to palm.',
        category: 'numbers'
      },
      {
        id: '31',
        letter: '5',
        videoUrl: 'https://drive.google.com/file/d/1mCsDqMlotUNjJ-_OQ9UVZIlUjIKq_PRn/preview',
        description: 'The number 5 is signed by extending all five fingers up, with fingers spread apart.',
        category: 'numbers'
      },
      {
        id: '32',
        letter: '6',
        videoUrl: 'https://drive.google.com/file/d/1mCsDqMlotUNjJ-_OQ9UVZIlUjIKq_PRn/preview',
        description: 'The number 6 is signed by extending your thumb, pinky, and index finger while keeping middle and ring fingers down.',
        category: 'numbers'
      },
      {
        id: '33',
        letter: '7',
        videoUrl: 'https://drive.google.com/file/d/1mCsDqMlotUNjJ-_OQ9UVZIlUjIKq_PRn/preview',
        description: 'The number 7 is signed by extending your thumb, index, and middle fingers with ring and pinky fingers touching your palm.',
        category: 'numbers'
      },
      {
        id: '34',
        letter: '8',
        videoUrl: 'https://drive.google.com/file/d/1mCsDqMlotUNjJ-_OQ9UVZIlUjIKq_PRn/preview',
        description: 'The number 8 is signed by extending your thumb, index, middle, and ring fingers with pinky finger touching your palm.',
        category: 'numbers'
      },
      {
        id: '35',
        letter: '9',
        videoUrl: 'https://drive.google.com/file/d/1mCsDqMlotUNjJ-_OQ9UVZIlUjIKq_PRn/preview',
        description: 'The number 9 is signed by bending your index finger to touch the tip of your thumb, all other fingers extended.',
        category: 'numbers'
      },
      {
        id: '36',
        letter: '10',
        videoUrl: 'https://drive.google.com/file/d/1mCsDqMlotUNjJ-_OQ9UVZIlUjIKq_PRn/preview',
        description: 'The number 10 is signed by holding up a closed fist with thumb extended, and shaking it slightly.',
        category: 'numbers'
      },
      
      // Common Words
      {
        id: '37',
        letter: 'Hello',
        videoUrl: 'https://drive.google.com/file/d/1Ey7Cp1dtb45kDDuq7tLdJaYCrVVCOvMw/preview',
        description: 'Hello is signed by extending your hand flat from your forehead outward, like a salute.',
        category: 'common'
      },
      {
        id: '38',
        letter: 'Thank You',
        videoUrl: 'https://drive.google.com/file/d/17-UlcU1KYlbGTNUFRQkI0qLklrqo_jyy/preview',
        description: 'Thank You is signed by touching your lips with the fingertips of your open hand, then moving your hand outward toward the person you are thanking.',
        category: 'common'
      },
      {
        id: '39',
        letter: 'Please',
        videoUrl: 'https://drive.google.com/file/d/17-UlcU1KYlbGTNUFRQkI0qLklrqo_jyy/preview',
        description: 'Please is signed by placing your open hand on your chest and moving it in a circular motion.',
        category: 'common'
      },
      {
        id: '40',
        letter: 'Sorry',
        videoUrl: 'https://drive.google.com/file/d/17-UlcU1KYlbGTNUFRQkI0qLklrqo_jyy/preview',
        description: 'Sorry is signed by making a fist and rubbing it in a circular motion over your chest.',
        category: 'common'
      },
      {
        id: '41',
        letter: 'Yes',
        videoUrl: 'https://drive.google.com/file/d/17-UlcU1KYlbGTNUFRQkI0qLklrqo_jyy/preview',
        description: 'Yes is signed by making a fist and nodding it like a head nod.',
        category: 'common'
      },
      {
        id: '42',
        letter: 'No',
        videoUrl: 'https://drive.google.com/file/d/17-UlcU1KYlbGTNUFRQkI0qLklrqo_jyy/preview',
        description: 'No is signed by extending your thumb, index, and middle fingers, then bringing them together.',
        category: 'common'
      },
      {
        id: '43',
        letter: 'Good',
        videoUrl: 'https://drive.google.com/file/d/17-UlcU1KYlbGTNUFRQkI0qLklrqo_jyy/preview',
        description: 'Good is signed by placing your flat right hand against your lips, then moving it forward and down.',
        category: 'common'
      },
      {
        id: '44',
        letter: 'Bad',
        videoUrl: 'https://drive.google.com/file/d/17-UlcU1KYlbGTNUFRQkI0qLklrqo_jyy/preview',
        description: 'Bad is signed by placing your flat right hand in front of your face, then turning it down and away.',
        category: 'common'
      },
      {
        id: '45',
        letter: 'Love',
        videoUrl: 'https://drive.google.com/file/d/17-UlcU1KYlbGTNUFRQkI0qLklrqo_jyy/preview',
        description: 'Love is signed by crossing your arms over your chest, like hugging yourself.',
        category: 'common'
      },
      {
        id: '46',
        letter: 'Friend',
        videoUrl: 'https://drive.google.com/file/d/17-UlcU1KYlbGTNUFRQkI0qLklrqo_jyy/preview',
        description: 'Friend is signed by hooking your index fingers together.',
        category: 'common'
      }
    ];
    
    setSignData(expandedData);
    setFilteredData(expandedData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = signData.filter(item => 
        item.letter.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(signData);
    }
  }, [searchQuery, signData]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filterByCategory = (category: string) => {
    if (category === 'all') {
      setFilteredData(signData);
    } else {
      const filtered = signData.filter(item => item.category === category);
      setFilteredData(filtered);
    }
  };

  const handlePractice = (sign: SignData) => {
    // Navigate to practice page with sign data
    navigate('/practice', { state: { sign } });
    toast({
      title: "Practice Mode",
      description: `Starting practice for '${sign.letter}'`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Learn Sign Language</h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Explore our comprehensive library of sign language tutorials, categorized for easy learning.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search signs..."
              className="pl-10 w-full"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
        
        <Tabs defaultValue="all" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all" onClick={() => filterByCategory('all')}>All</TabsTrigger>
            <TabsTrigger value="alphabet" onClick={() => filterByCategory('alphabet')}>Alphabet</TabsTrigger>
            <TabsTrigger value="numbers" onClick={() => filterByCategory('numbers')}>Numbers</TabsTrigger>
            <TabsTrigger value="common" onClick={() => filterByCategory('common')}>Common Words</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-8">
            {isLoading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-pulse text-accent">Loading...</div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredData.map((sign) => (
                  <Card key={sign.id} className="overflow-hidden">
                    <CardHeader>
                      <CardTitle className="flex justify-between items-center">
                        <span>{sign.letter}</span>
                        <span className="text-sm px-2 py-1 bg-muted rounded-full text-muted-foreground">
                          {sign.category}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                        <iframe 
                          src={sign.videoUrl} 
                          className="w-full h-full" 
                          allow="autoplay"
                          allowFullScreen
                        ></iframe>
                      </div>
                      <CardDescription className="text-foreground/80">
                        {sign.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-end">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2 text-accent hover:text-accent-foreground"
                        onClick={() => handlePractice(sign)}
                      >
                        <BookOpen size={16} />
                        Practice this sign
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
            
            {!isLoading && filteredData.length === 0 && (
              <div className="text-center py-12 border border-dashed border-border rounded-lg">
                <p className="text-lg text-muted-foreground">No signs found for "{searchQuery}"</p>
                <p className="mt-2">Try searching for another term or browsing categories</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="alphabet" className="space-y-8">
            {/* Content for alphabet tab - handled by the filter function */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredData.map((sign) => (
                <Card key={sign.id} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>{sign.letter}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                      <iframe 
                        src={sign.videoUrl} 
                        className="w-full h-full" 
                        allow="autoplay"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <CardDescription className="text-foreground/80">
                      {sign.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-accent hover:text-accent-foreground"
                      onClick={() => handlePractice(sign)}
                    >
                      <BookOpen size={16} />
                      Practice this sign
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="numbers">
            {/* Content for numbers tab - handled by the filter function */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredData.map((sign) => (
                <Card key={sign.id} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>{sign.letter}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                      <iframe 
                        src={sign.videoUrl}
                        className="w-full h-full" 
                        allow="autoplay"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <CardDescription className="text-foreground/80">
                      {sign.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-accent hover:text-accent-foreground"
                      onClick={() => handlePractice(sign)}
                    >
                      <BookOpen size={16} />
                      Practice this sign
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="common">
            {/* Content for common words tab - handled by the filter function */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredData.map((sign) => (
                <Card key={sign.id} className="overflow-hidden">
                  <CardHeader>
                    <CardTitle>{sign.letter}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                      <iframe 
                        src={sign.videoUrl}
                        className="w-full h-full" 
                        allow="autoplay"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <CardDescription className="text-foreground/80">
                      {sign.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-end">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 text-accent hover:text-accent-foreground"
                      onClick={() => handlePractice(sign)}
                    >
                      <BookOpen size={16} />
                      Practice this sign
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Learn;
