import { CAPABILITIES_DATA } from '@/data/capabilities';
import ToolBadge from '../tool-badge';

export default function CapabilitiesSection() {
  return (
    <div id="capabilities" className="bg-primary">
      <h2 className="mb-4 text-2xl font-bold" data-aos="fade-up">
        🛠️ My Capabilities
      </h2>

      <div className="space-y-4">
        <div className="space-y-1">
          <div
            className="flex items-center gap-2"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <div className="h-2 w-2 rounded-full bg-brand-500" />
            <span className="text-sm font-semibold">Prefered</span>
          </div>

          <div
            className="flex items-center gap-2"
            data-aos="fade-right"
            data-aos-delay="50"
          >
            <div className="h-2 w-2 rounded-full bg-gray-600" />
            <span className="text-sm font-semibold">Capable</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-primary sm:gap-4">
          {CAPABILITIES_DATA.tools.map((tool, index) => (
            <div
              key={tool.name}
              data-aos="zoom-in"
              data-aos-delay={50 * (index + 2)}
            >
              <ToolBadge tool={tool} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
