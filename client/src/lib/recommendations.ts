import { FormData, Recommendation } from '@/types/quiz';

/**
 * Generate personalized study recommendations based on user's form data
 */
export function generateRecommendations(formData: FormData): Recommendation {
  // Session structure recommendations
  const sessionStructure = generateSessionStructure(formData);
  
  // Study techniques recommendations based on learning style
  const techniques = generateTechniques(formData);
  
  // Environment and tools recommendations
  const environment = generateEnvironment(formData);
  
  // Motivational quote
  const motivationalQuote = generateMotivationalQuote(formData);
  
  return {
    sessionStructure,
    techniques,
    environment,
    motivationalQuote
  };
}

/**
 * Generate session structure recommendations
 */
function generateSessionStructure(formData: FormData): string[] {
  const structure: string[] = [];
  
  // Optimal session length based on attention span and break frequency
  let sessionLength: number;
  let breakLength: number;
  
  if (formData.breakFrequency === 'frequent') {
    sessionLength = Math.min(25, formData.attentionSpan);
    breakLength = 5;
  } else if (formData.breakFrequency === 'moderate') {
    sessionLength = Math.min(45, formData.attentionSpan);
    breakLength = 10;
  } else {
    sessionLength = Math.min(90, formData.attentionSpan);
    breakLength = 15;
  }
  
  structure.push(`${sessionLength}-minute focused study sessions`);
  structure.push(`${breakLength}-minute breaks between sessions`);
  
  // Recommend optimal time of day
  let optimalTimeText = '';
  switch (formData.studyTime) {
    case 'early-morning':
      optimalTimeText = 'Early morning is your optimal study time';
      break;
    case 'late-morning':
      optimalTimeText = 'Late morning is your optimal study time';
      break;
    case 'afternoon':
      optimalTimeText = 'Afternoon is your optimal study time';
      break;
    case 'evening':
      optimalTimeText = 'Evening is your optimal study time';
      break;
  }
  structure.push(optimalTimeText);
  
  // Longer break recommendation
  structure.push(`30-minute longer break after ${formData.breakFrequency === 'infrequent' ? 2 : 3} sessions`);
  
  return structure;
}

/**
 * Generate technique recommendations based on learning style
 */
function generateTechniques(formData: FormData): string[] {
  const techniques: string[] = [];
  
  // Learning style specific techniques
  switch (formData.learningStyle) {
    case 'visual':
      techniques.push('<strong>Visual mapping</strong>: Use diagrams, mind maps, and color-coding');
      techniques.push('<strong>Visualization</strong>: Create mental images of concepts and processes');
      break;
    case 'auditory':
      techniques.push('<strong>Audio recordings</strong>: Record and listen to study materials');
      techniques.push('<strong>Group discussions</strong>: Verbalize concepts and explain them aloud');
      break;
    case 'reading':
      techniques.push('<strong>Cornell note-taking</strong>: Structured note format with summary section');
      techniques.push('<strong>SQ3R method</strong>: Survey, Question, Read, Recite, Review');
      break;
    case 'kinesthetic':
      techniques.push('<strong>Practice exercises</strong>: Hands-on application of concepts');
      techniques.push('<strong>Teaching others</strong>: Explain concepts physically to reinforce learning');
      break;
  }
  
  // Universal techniques
  techniques.push(`<strong>The Pomodoro Technique</strong>: Timed work/break intervals`);
  
  // Motivation based on user preferences
  if (formData.motivationFactors.rewards) {
    techniques.push('<strong>Reward system</strong>: Small rewards after completing sessions');
  }
  
  // Distraction management
  if (formData.distraction === 'phone' || formData.distraction === 'social-media') {
    techniques.push('<strong>Digital minimalism</strong>: Reduce phone distractions during study');
  } else if (formData.distraction === 'multi-tasking') {
    techniques.push('<strong>Single-tasking focus</strong>: Dedicate full attention to one subject at a time');
  } else if (formData.distraction === 'procrastination') {
    techniques.push('<strong>Time blocking</strong>: Schedule specific times for study sessions');
  }
  
  return techniques;
}

/**
 * Generate environment recommendations
 */
function generateEnvironment(formData: FormData): string[] {
  const environment: string[] = [];
  
  // Study space recommendation
  if (formData.environment === 'quiet') {
    environment.push('<strong>Study space</strong>: Quiet environment with minimal distractions');
  } else {
    environment.push('<strong>Study space</strong>: Ambient environment with background activity or music');
  }
  
  // Tools recommendation based on learning style
  switch (formData.learningStyle) {
    case 'visual':
      environment.push('<strong>Tools</strong>: Mind mapping software and colorful note-taking tools');
      break;
    case 'auditory':
      environment.push('<strong>Tools</strong>: Voice recorder, text-to-speech software, noise-cancelling headphones');
      break;
    case 'reading':
      environment.push('<strong>Tools</strong>: Highlighters, sticky notes, digital note-taking apps');
      break;
    case 'kinesthetic':
      environment.push('<strong>Tools</strong>: Fidget tools, standing desk, flashcards for movement');
      break;
  }
  
  // Digital setup
  if (formData.distraction === 'phone' || formData.distraction === 'social-media') {
    environment.push('<strong>Digital setup</strong>: App blockers during study sessions');
  }
  
  // Physical items
  if (formData.motivationFactors.progress) {
    environment.push('<strong>Physical items</strong>: Task cards and visual progress trackers');
  } else if (formData.motivationFactors.goals) {
    environment.push('<strong>Physical items</strong>: Goal tracker and calendar for deadlines');
  } else {
    environment.push('<strong>Physical items</strong>: Timer and session checklist');
  }
  
  return environment;
}

/**
 * Generate a motivational quote based on user preferences
 */
function generateMotivationalQuote(formData: FormData): string {
  const quotes = [
    "Focus on progress, not perfection. Each study session is building your knowledge foundation, one block at a time. What matters most is consistency and intentional learning.",
    "Don't compare your chapter 1 to someone else's chapter 20. Your learning journey is unique, and every focused study session brings you closer to your goals.",
    "The difference between a successful student and others is not a lack of strength or knowledge, but rather a lack of will and structured routine.",
    "Your future is created by what you do today, not tomorrow. Make each study session count.",
    "Small daily improvements lead to stunning results over time. Trust your process and study routine."
  ];
  
  // Select quote based on user's biggest distraction
  let quoteIndex = 0;
  
  switch (formData.distraction) {
    case 'phone':
    case 'social-media':
      quoteIndex = 0;
      break;
    case 'multi-tasking':
      quoteIndex = 1;
      break;
    case 'procrastination':
      quoteIndex = 2;
      break;
    case 'environment':
      quoteIndex = 3;
      break;
    default:
      quoteIndex = 4;
  }
  
  return quotes[quoteIndex];
}
