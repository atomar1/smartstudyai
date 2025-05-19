# SmartStudy AI

SmartStudy AI is a web application that provides personalized study recommendations, curated educational resources, and a newsletter for learners. The platform uses an interactive quiz to tailor study plans and techniques to each user's learning style and preferences.

## Features

- **Personalized Study Quiz:** Answer questions about your learning style, attention span, motivation, and environment to receive a custom study plan.
- **Curated Resources:** Browse educational resources organized by skill level (Beginner, Intermediate, Advanced).
- **Resource Newsletter:** Subscribe to receive weekly curated resources and study tips based on your interests and skill level.
- **Modern UI:** Responsive design built with React, Tailwind CSS, and Radix UI components.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm start
   ```
   This will start both the client and server on port 5000.

3. **Open the app:**
   Visit [http://localhost:5000](http://localhost:5000) in your browser.

### Build for Production

```sh
npm run build
```

## Customization

- **Quiz logic:** See [`client/src/lib/recommendations.ts`](client/src/lib/recommendations.ts) and [`client/src/types/quiz.ts`](client/src/types/quiz.ts).
- **Newsletter:** See [`client/src/components/Newsletter.tsx`](client/src/components/Newsletter.tsx) and API in [`server/routes.ts`](server/routes.ts).
- **Resource sections:** See [`client/src/components/ResourcesSection.tsx`](client/src/components/ResourcesSection.tsx).

## License

MIT

---
