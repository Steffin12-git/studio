'use client';

import { useEffect, useState } from 'react';
import { getProjectAnalysis, type ProjectAnalysisOutput } from '@/lib/actions';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AlertTriangle } from 'lucide-react';

type ProjectAnalysisProps = {
  repoUrl: string;
  language: string;
};

function AnalysisSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-24 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-24 w-full" />
    </div>
  );
}

export function ProjectAnalysis({ repoUrl, language }: ProjectAnalysisProps) {
  const [analysis, setAnalysis] = useState<ProjectAnalysisOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnalysis() {
      try {
        setLoading(true);
        setError(null);
        const result = await getProjectAnalysis({ repoUrl, language });
        setAnalysis(result);
      } catch (e: any) {
        setError(e.message || 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    }
    fetchAnalysis();
  }, [repoUrl, language]);

  if (loading) {
    return <AnalysisSkeleton />;
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Analysis Failed</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  if (!analysis) {
    return null;
  }

  return (
    <Accordion type="multiple" defaultValue={['insights', 'suggestions']} className="w-full">
      <AccordionItem value="insights">
        <AccordionTrigger className="font-headline text-lg">Project Insights</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div>
            <h4 className="font-semibold">Code Complexity</h4>
            <p className="text-sm text-muted-foreground">{analysis.insights.codeComplexity}</p>
          </div>
          <div>
            <h4 className="font-semibold">Potential Bugs</h4>
            <p className="text-sm text-muted-foreground">{analysis.insights.potentialBugs}</p>
          </div>
          <div>
            <h4 className="font-semibold">Security Flaws</h4>
            <p className="text-sm text-muted-foreground">{analysis.insights.securityFlaws}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="suggestions">
        <AccordionTrigger className="font-headline text-lg">Improvement Suggestions</AccordionTrigger>
        <AccordionContent className="space-y-4">
          <div>
            <h4 className="font-semibold">Code Simplification</h4>
            <p className="text-sm text-muted-foreground">{analysis.suggestions.codeSimplificationSuggestions}</p>
          </div>
          <div>
            <h4 className="font-semibold">Potential Bug Fixes</h4>
            <p className="text-sm text-muted-foreground">{analysis.suggestions.potentialBugFixes}</p>
          </div>
          <div>
            <h4 className="font-semibold">Security Enhancements</h4>
            <p className="text-sm text-muted-foreground">{analysis.suggestions.securityEnhancements}</p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
