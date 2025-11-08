import { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
      </div>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {children}
      </div>
      
      <div className="mt-12 pt-8 border-t">
        <p className="text-muted-foreground text-sm">
          If you have any questions about this document, please contact us at{' '}
          <a href="mailto:legal@flexflow.ai" className="text-primary hover:underline">
            legal@flexflow.ai
          </a>
          .
        </p>
      </div>
    </div>
  );
};
