import { Hourglass03 } from '@untitledui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/base/badges/badges';
import { formatToDisplayDate } from '@/utils/date-utils';

interface IExperienceCardProps {
  experience: IExperience;
}

export default function ExperienceCard({ experience }: IExperienceCardProps) {
  const exceedCurrentDate =
    experience.period.end !== undefined &&
    new Date().getTime() > experience.period.end?.getTime();

  return (
    <div className="flex flex-col items-start gap-2 text-primary sm:flex-row sm:gap-8">
      <Image
        src={experience.company.logoSrc}
        alt={experience.company.name}
        width={0}
        height={0}
        className="h-auto w-14"
        loading="lazy"
        data-aos="fade-up"
      />

      <div className="flex flex-col gap-2">
        <div data-aos="fade-up">
          <h5 className="text-lg font-bold">{experience.position}</h5>
          <span className="text-base">
            @
            {experience.company.website ? (
              <Link
                href={experience.company.website}
                className="decoration-brand-500 hover:text-brand-500 hover:underline"
              >
                {experience.company.name}
              </Link>
            ) : (
              <>{experience.company.name}</>
            )}
          </span>
        </div>

        <div data-aos="fade-up">
          <Badge className="flex gap-2">
            {!exceedCurrentDate && <Hourglass03 className="size-3.5" />}

            <div>
              {formatToDisplayDate(experience.period.start)} -{' '}
              {experience.period.end !== undefined
                ? formatToDisplayDate(experience.period.end)
                : 'Present'}
            </div>
          </Badge>
        </div>

        <div className="ml-4 text-tertiary sm:ml-0">
          {experience.done.map((haveDone, index) => (
            <li
              key={experience.company.name + '.' + haveDone}
              data-aos="fade-right"
              data-aos-delay={index * 50}
            >
              {haveDone}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
