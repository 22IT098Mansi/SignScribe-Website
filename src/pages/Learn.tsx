
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SignData {
  id: string;
  letter: string;
  videoUrl: string;
  description: string;
  category: 'alphabet' | 'numbers' | 'common';
}

const Learn = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [signData, setSignData] = useState<SignData[]>([]);
  const [filteredData, setFilteredData] = useState<SignData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is a mock fetch - in reality, you would fetch from your Google Drive
    // For now, let's create mock data
    const mockData: SignData[] = [
      {
        id: '1',
        letter: 'A',
        videoUrl: 'https://drive.google.com/file/d/1D61fPSFSMEFzIbB9KL2gz1-TT8QeYDLf/view',
        description: 'The letter A is signed by making a closed fist with your thumb on the side, not wrapped around your fingers.',
        category: 'alphabet'
      },
      {
        id: '2',
        letter: 'B',
        videoUrl: 'https://drive.google.com/file/d/1DHUgUOmxRFm8qeQ3EK94D4b5eqOeD62e/view',
        description: 'The letter B is signed by holding up your palm, fingers together, pointing up.',
        category: 'alphabet'
      },
      {
        id: '3',
        letter: '1',
        videoUrl: 'https://drive.google.com/file/d/1zRZ0zxRwDdVvQeNmJubBLJWYYoRqKpRx/view',
        description: 'The number 1 is signed by pointing up with your index finger.',
        category: 'numbers'
      },
      {
        id: '4',
        letter: 'Hello',
        videoUrl: 'https://drive.google.com/file/d/1Ey7Cp1dtb45kDDuq7tLdJaYCrVVCOvMw/view',
        description: 'Hello is signed by extending your hand flat from your forehead outward.',
        category: 'common'
      }
    ];
    
    setSignData(mockData);
    setFilteredData(mockData);
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

  const convertGoogleDriveUrl = (url: string): string => {
    // Extract the file ID from Google Drive URL
    const fileId = url.split('/d/')[1]?.split('/view')[0];
    if (!fileId) return '';
    
    // Return the embed URL for video preview
    return `https://drive.google.com/file/d/${fileId}/preview`;
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
                          src={convertGoogleDriveUrl(sign.videoUrl)} 
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
                      <button className="text-sm text-accent hover:text-accent/90">
                        Practice this sign
                      </button>
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
                  {/* Same card content as above */}
                  <CardHeader>
                    <CardTitle>{sign.letter}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-md overflow-hidden bg-muted mb-4">
                      <iframe 
                        src={convertGoogleDriveUrl(sign.videoUrl)} 
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
                    <button className="text-sm text-accent hover:text-accent/90">
                      Practice this sign
                    </button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="numbers">
            {/* Content for numbers tab - handled by the filter function */}
            {/* Same structure as alphabet tab */}
          </TabsContent>
          
          <TabsContent value="common">
            {/* Content for common words tab - handled by the filter function */}
            {/* Same structure as alphabet tab */}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Learn;
