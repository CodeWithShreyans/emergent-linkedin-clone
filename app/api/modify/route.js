import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt || !prompt.trim()) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Make the request to the external API
    const response = await fetch('https://modifywithai.com/api/modify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.BACKEND_API_KEY
      },
      body: JSON.stringify({
        userId: 'abc',
        prompt: prompt,
        githubUsername: 'CodeWithShreyans',
        githubRepo: 'emergent-linkedin-clone',
        githubInstallationId: '93751008',
        commitToMain: true
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('External API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to process modification request' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Error in modify API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
