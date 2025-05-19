// Learning style preferences
export type LearningStyle = 'visual' | 'auditory' | 'reading' | 'kinesthetic' | null;

// Study time preferences
export type StudyTime = 'early-morning' | 'late-morning' | 'afternoon' | 'evening' | null;

// Break frequency options
export type BreakFrequency = 'frequent' | 'moderate' | 'infrequent';

// Environment preferences
export type Environment = 'quiet' | 'ambient' | null;

// Motivation factors
export interface MotivationFactors {
  rewards: boolean;
  goals: boolean;
  progress: boolean;
  social: boolean;
}

// Main distraction types
export type Distraction = 'phone' | 'social-media' | 'multi-tasking' | 'procrastination' | 'environment';

// Form data structure
export interface FormData {
  learningStyle: LearningStyle;
  attentionSpan: number;
  studyTime: StudyTime;
  breakFrequency: BreakFrequency;
  environment: Environment;
  motivationFactors: MotivationFactors;
  distraction: Distraction;
}

// Recommendation result structure
export interface Recommendation {
  sessionStructure: string[];
  techniques: string[];
  environment: string[];
  motivationalQuote: string;
}
