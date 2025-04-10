// API utility functions for Groq integration

// Maximum number of retries for failed requests
const MAX_RETRIES = 3;
// Timeout for each request in milliseconds
const REQUEST_TIMEOUT = 30000;
// Delay between retries in milliseconds
const RETRY_DELAY = 1000;

/**
 * Sleep function for delay between retries
 * @param ms Milliseconds to sleep
 */
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Creates an AbortController with a timeout
 * @param timeout Timeout in milliseconds
 */
const createAbortController = (timeout: number) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);
  return controller;
};

/**
 * Sends a message to the Groq API and returns the response
 * @param message The user's message to send to the API
 * @returns The AI response from Groq
 */
export async function sendMessageToGroq(message: string): Promise<string> {
  let lastError: Error | null = null;
  
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(`Attempt ${attempt}/${MAX_RETRIES} - Sending message to Groq API`);
      
      const controller = createAbortController(REQUEST_TIMEOUT);
      
      // Make the actual API call using the API key from environment variables
      const response = await fetch('https://api.groq.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama3-8b-8192',
          messages: [{ role: 'user', content: message }]
        }),
        signal: controller.signal
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const statusCode = response.status;
        const errorMessage = errorData?.error?.message || response.statusText;
        
        // Handle specific error cases
        if (statusCode === 429) {
          throw new Error('Rate limit exceeded. Please try again later.');
        } else if (statusCode === 401) {
          throw new Error('Authentication failed. Please check your API key.');
        } else if (statusCode >= 500) {
          throw new Error('Groq API service is currently unavailable. Please try again later.');
        }
        
        console.error(`Groq API error (${statusCode}):`, errorMessage);
        throw new Error(`Failed to get response from Groq API: ${errorMessage}`);
      }
      
      const data = await response.json();
      return data.choices[0].message.content;
      
    } catch (error) {
      lastError = error as Error;
      console.error(`Attempt ${attempt} failed:`, error);
      
      // Don't retry if it's an authentication error
      if (error instanceof Error && error.message.includes('Authentication failed')) {
        break;
      }
      
      // Don't retry on the last attempt
      if (attempt < MAX_RETRIES) {
        console.log(`Retrying in ${RETRY_DELAY}ms...`);
        await sleep(RETRY_DELAY);
      }
    }
  }
  
  // All retries failed
  console.error('All attempts to contact Groq API failed:', lastError);
  if (lastError?.message.includes('Authentication failed')) {
    return 'Sorry, there was an authentication error. Please contact support.';
  } else if (lastError?.message.includes('Rate limit exceeded')) {
    return 'Sorry, we\'re experiencing high demand. Please try again in a few minutes.';
  } else {
    return 'Sorry, there was an error communicating with the AI service. Please try again later.';
  }
}