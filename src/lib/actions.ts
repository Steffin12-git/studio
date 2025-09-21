
'use server';

import { analyzeGithubRepo, AnalyzeGithubRepoOutput } from '@/ai/flows/analyze-github-repo-insights';
import { suggestCodeImprovements, SuggestCodeImprovementsOutput } from '@/ai/flows/suggest-code-improvements';

type ProjectAnalysisInput = {
  repoUrl: string;
  language: string;
};

export type ProjectAnalysisOutput = {
  insights: AnalyzeGithubRepoOutput;
  suggestions: SuggestCodeImprovementsOutput;
};

export async function getProjectAnalysis(input: ProjectAnalysisInput): Promise<ProjectAnalysisOutput> {
  try {
    const [insightsResult, suggestionsResult] = await Promise.all([
      analyzeGithubRepo({ repoUrl: input.repoUrl }),
      suggestCodeImprovements({ githubRepoUrl: input.repoUrl, programmingLanguage: input.language }),
    ]);

    return {
      insights: insightsResult,
      suggestions: suggestionsResult,
    };
  } catch (error) {
    console.error('Error getting project analysis:', error);
    throw new Error('Failed to analyze the project. Please try again later.');
  }
}
