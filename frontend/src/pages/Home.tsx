import HeroSection from '../components/layout/HeroSection';
import AboutSection from '../components/layout/AboutSection';
import SkillsSection from '../components/layout/SkillsSection';
import ProjectsSection from '../components/layout/ProjectsSection';
import ContactSection from '../components/layout/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen text-black bg-cream">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
