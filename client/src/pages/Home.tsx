import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StudyQuiz from "@/components/StudyQuiz";
import ResourcesSection from "@/components/ResourcesSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SmartStudy - AI-Powered Study Habit Recommender</title>
        <meta 
          name="description" 
          content="SmartStudy helps you create personalized study routines based on your learning style, attention span, and schedule. Get AI-powered recommendations to improve your study habits."
        />
        <meta property="og:title" content="SmartStudy - AI-Powered Study Habit Recommender" />
        <meta 
          property="og:description" 
          content="Get personalized study routine recommendations based on your unique learning style and preferences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartstudy.app" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <StudyQuiz />
          <ResourcesSection />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </>
  );
}
