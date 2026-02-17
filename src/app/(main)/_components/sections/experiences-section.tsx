import { EXPERIENCES_DATA } from '@/data/experiences';
import ExperienceCard from '../experience-card';

export default function ExperiencesSection() {
  return (
    <div id="experiences" className="bg-primary">
      <h2 className="mb-4 text-2xl font-bold text-primary" data-aos="fade-up">
        🧭 My Journeys
      </h2>

      <div className="space-y-6 text-justify text-primary">
        {EXPERIENCES_DATA.experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}
