"use client";

import { AuroraBackgroundDemo } from "@/components/ui/aurora-background-demo";

export default function AuroraDemoPage() {
  return (
    <div className="min-h-screen">
      <AuroraBackgroundDemo />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Aurora Background Component</h2>
        <div className="max-w-3xl mx-auto bg-card p-6 rounded-lg shadow-lg">
          <p className="mb-4">
            This is a demo of the Aurora Background component. The component creates a beautiful, animated 
            background effect that can be used as a hero section or full-page background.
          </p>
          <p className="mb-6">
            The animation is fully responsive and works in both light and dark modes. The gradient colors 
            automatically adjust based on the current theme.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">How to use:</h3>
          <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm mb-6">
            {`import { AuroraBackground } from "@/components/ui/aurora-background";

function MyComponent() {
  return (
    <AuroraBackground>
      {/* Your content here */}
      <div className="relative z-10">
        <h1>Your Content</h1>
        <p>This content will appear over the animated background</p>
      </div>
    </AuroraBackground>
  );
}`}
          </pre>
          
          <h3 className="text-xl font-semibold mb-3">Props:</h3>
          <ul className="space-y-2 mb-6">
            <li><code className="bg-muted px-2 py-1 rounded">className</code> - Additional CSS classes for the container</li>
            <li><code className="bg-muted px-2 py-1 rounded">showRadialGradient</code> - Toggle the radial gradient mask (default: true)</li>
            <li><code className="bg-muted px-2 py-1 rounded">children</code> - The content to display over the background</li>
          </ul>
          
          <div className="flex justify-center mt-8">
            <a
              href="/"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
