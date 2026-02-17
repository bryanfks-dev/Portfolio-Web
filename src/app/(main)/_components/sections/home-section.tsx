import Link from 'next/link';
import { AvatarProfilePhoto } from '@/components/base/avatar/avatar-profile-photo';
import { HOME_DATA } from '@/data/home';
import DownloadCVButton from '../download-cv-button';
import MessageMeButton from '../message-me-button';
import UserNameWithUnderlinedNickname from '../user-name-with-underlined-nickname';

export default function HomeSection() {
  return (
    <section className="mx-8 my-16 flex flex-col gap-10 bg-primary md:mx-28 md:gap-16 lg:mx-72">
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-12">
        <AvatarProfilePhoto
          size="sm"
          src={HOME_DATA.avatar.src}
          alt={HOME_DATA.avatar.alt}
          className="mt-1 size-28 ring-4 ring-brand md:size-32 lg:size-38"
        />

        <div className="space-y-1 text-center text-primary lg:text-left">
          <h5 className="text-2xl font-bold lg:text-4xl" data-aos="fade-up">
            <UserNameWithUnderlinedNickname
              name={HOME_DATA.user.name}
              nickname={HOME_DATA.user.nickname}
            />
          </h5>
          <h6
            className="text-base text-tertiary lg:text-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {HOME_DATA.user.profesions!.join(' | ')}
          </h6>
        </div>
      </div>

      <div className="w-full">
        <nav className="flex w-full flex-col gap-4 text-base text-tertiary sm:flex-row sm:justify-center sm:gap-8">
          {HOME_DATA.socials.map((social, index) => (
            <li
              key={social.name}
              className="w-fit list-none hover:text-tertiary_hover"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 2)}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2"
                aria-label={social.name}
              >
                {social.icon}
                {social.name}
              </Link>
            </li>
          ))}
        </nav>
      </div>

      <div className="grid w-full grid-cols-3 gap-8 text-primary">
        {HOME_DATA.records.map((record, index) => (
          <div
            key={record.name}
            className="flex flex-col items-center text-center"
            data-aos="fade-up"
            data-aos-delay={100 * (index + 5)}
          >
            <span className="text-lg font-bold md:text-xl lg:text-2xl">
              {record.value}
              {record.valuePrefix}
            </span>
            <span className="text-sm md:text-base lg:text-lg">
              {record.name}
            </span>
          </div>
        ))}
      </div>

      <div className="flex gap-4">
        <div className="flex-1" data-aos="fade-up" data-aos-delay="800">
          <DownloadCVButton />
        </div>

        <div data-aos="fade-up" data-aos-delay="900">
          <MessageMeButton />
        </div>
      </div>
    </section>
  );
}
