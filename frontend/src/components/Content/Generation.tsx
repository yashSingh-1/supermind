// types/ad-generator.ts
interface AdGeneratorResponse {
    message: string;
    response: {
      heading: string;
      subheading: string;
      description: string;
      keywords: string[];
    };
  }
  
  // Server Action (app/actions/generate.ts)
  'use server'
  
  export async function generateAd(prompt: string) {
    try {
      const response = await fetch('http://localhost:8081/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
        cache: 'no-store'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data: AdGeneratorResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error in generateAd:', error);
      throw new Error(error instanceof Error ? error.message : 'Failed to generate ad');
    }
  }
  
  // Client Component (components/AdGenerator.tsx)
  'use client'
  
  import { useState } from 'react';
  import { Button } from "@/components/ui/button";
  import { Input } from "@/components/ui/input";
  
  export function AdGenerator() {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState<AdGeneratorResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setError(null);
  
      try {
        const response = await fetch('http://localhost:8081/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt }),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.error('Error:', error);
        setError(error instanceof Error ? error.message : 'Failed to generate ad');
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div className="max-w-2xl mx-auto p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="prompt" className="block text-sm font-medium">
              Enter your ad prompt
            </label>
            <Input
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your product or service..."
              disabled={isLoading}
              className="w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading || !prompt.trim()}
            className="w-full"
          >
            {isLoading ? 'Generating...' : 'Generate Ad'}
          </Button>
        </form>
  
        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded">
            {error}
          </div>
        )}
  
        {result && (
          <div className="mt-6 space-y-4">
            <h2 className="text-2xl font-bold">{result.response.heading}</h2>
            <h3 className="text-xl font-semibold">{result.response.subheading}</h3>
            <p className="text-gray-600">{result.response.description}</p>
            <div className="flex flex-wrap gap-2">
              {result.response.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  
  interface GeneratePageProps {
    searchParams: { prompt?: string }
  }
  
  export default async function GeneratePage({ searchParams }: GeneratePageProps) {
    const prompt = searchParams.prompt;
  
    if (!prompt) {
      return <div>No prompt provided</div>;
    }
  
    try {
      const data = await generateAd(prompt);
      
      return (
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Generated Ad</h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{data.response.heading}</h2>
            <h3 className="text-xl font-semibold">{data.response.subheading}</h3>
            <p className="text-gray-600">{data.response.description}</p>
            <div className="flex flex-wrap gap-2">
              {data.response.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    } catch (error) {
      return (
        <div className="max-w-2xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6">Error</h1>
          <p className="text-red-500">
            {error instanceof Error ? error.message : 'Failed to generate ad'}
          </p>
        </div>
      );
    }
  }