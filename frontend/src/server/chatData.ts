// app/actions/chat.ts
'use server'

interface AnalysisItem {
  answer: string;
  description: string;
}

interface AnalysisResponse {
  high_performing_hooks: AnalysisItem[];
  CTAs: AnalysisItem[];
  trends: AnalysisItem[];
  effective_solutions: AnalysisItem[];
  pain_points: AnalysisItem[];
}

interface LangflowResponse {
  response: AnalysisResponse;
  message: string;
}

export async function analyzeCategory(prompt: string): Promise<LangflowResponse> {
  try {
    const response = await fetch('http://localhost:8081/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
      // Add this if you're using Node.js 18+
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in analyzeCategory:', error);
    throw Error(error instanceof Error ? error.message : 'Failed to analyze category');
  }
}