'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import CapabilitiesSection from './_components/sections/capabilities-section';
import ExperiencesSection from './_components/sections/experiences-section';
import HomeSection from './_components/sections/home-section';
import IntroductionSection from './_components/sections/introduction-section';
import ProjectsSection from './_components/sections/projects-section';
import ToggleViewButton from './_components/toggle-view-button';
import UnifiedSection from './_components/unified-section';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <HomeSection />
      <UnifiedSection initialIdentifier="projects">
        <UnifiedSection.Trigger>
          <div data-aos="fade-up" data-aos-delay="800">
            <ToggleViewButton />
          </div>
        </UnifiedSection.Trigger>

        <UnifiedSection.Content identitifer="projects">
          <ProjectsSection />
        </UnifiedSection.Content>
        <UnifiedSection.Content identitifer="experiences">
          <ExperiencesSection />
        </UnifiedSection.Content>
        <UnifiedSection.Content identitifer="about">
          <IntroductionSection />

          <hr className="h-1 w-full border-tertiary" data-aos="fade-up" />

          <CapabilitiesSection />
        </UnifiedSection.Content>
      </UnifiedSection>
    </>
  );
}
