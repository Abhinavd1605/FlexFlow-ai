import { lazy, Suspense } from 'react';
import { Loader2 } from 'lucide-react';

// Import the SplineScene component using named import
import { SplineScene } from './splite';

export default function LazySplineScene({ className, scene }: { className?: string; scene: string }) {
  return (
    <div className={className}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black/20 to-black/10 rounded-xl">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        }
      >
        <SplineScene 
          scene={scene} 
          className="w-full h-full" 
        />
      </Suspense>
    </div>
  );
}
