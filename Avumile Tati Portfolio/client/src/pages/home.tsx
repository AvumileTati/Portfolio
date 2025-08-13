import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import CodeShowcase from "@/components/code-showcase";
import TechMetrics from "@/components/tech-metrics";
import GitHubActivity from "@/components/github-activity";
import ProjectsSection from "@/components/projects-section";
import AchievementsSection from "@/components/achievements-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CodeShowcase />
      <TechMetrics />
      <GitHubActivity />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
