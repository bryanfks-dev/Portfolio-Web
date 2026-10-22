import {
  CAPABILITIES_DATA,
  CAPABILITIES_KEY_LABELS,
} from '@/data/capabilities';
import { ICapabilitiesData } from '@/types';
import ToolBadge from '../tool-badge';

export default function CapabilitiesSection() {
  return (
    <div id="capabilities" className="bg-primary">
      <h2 className="mb-4 text-2xl font-bold" data-aos="fade-up">
        🛠️&nbsp;&nbsp;&nbsp;My Capabilities
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

        <div className="flex flex-col gap-6 sm:gap-8">
          {Object.entries(CAPABILITIES_DATA).map(([category, tools], index) => (
            <div key={category} className="flex flex-col gap-2 sm:gap-4">
              <span
                className="font-semibold text-primary"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {CAPABILITIES_KEY_LABELS[category as keyof ICapabilitiesData]}
              </span>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool: ICapabilityTool) => (
                  <div
                    key={tool.name}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                  >
                    <ToolBadge tool={tool} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
