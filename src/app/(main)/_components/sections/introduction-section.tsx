import { MarkerPin02, SlashCircle01 } from '@untitledui/icons';
import { INTRODUCTION_DATA } from '@/data/introduction';
import UserNameWithUnderlinedAndTooltipedNickname from '../user-name-with-underlined-and-tooltiped-nickname';

export default function IntroductionSection() {
  return (
    <div id="introduction" className="bg-primary">
      <h2 className="mb-4 text-2xl font-bold text-primary" data-aos="fade-up">
        👋 Hey! I am
      </h2>

      <div className="space-y-4 text-justify text-primary">
        <p data-aos="fade-right" data-aos-delay="50">
          <UserNameWithUnderlinedAndTooltipedNickname
            name={INTRODUCTION_DATA.user.name}
            nickname={INTRODUCTION_DATA.user.nickname}
          />
          , a Software Engineer focused on building scalable web applications, distributed systems, and cloud infrastructure. I care about clean software architecture, modern tooling, and continuous growth.
        </p>

        <p data-aos="fade-right" data-aos-delay="100">
          Over the years, I've built web applications and services using modern technologies, and I genuinely enjoy learning new things and improving my craft.
        </p>

        <p data-aos="fade-right" data-aos-delay="150">
          My deepest interests are in distributed systems, software architecture, and cloud computing, especially designing systems that scale well and stay maintainable.
        </p>
      </div>

      <div className="mt-8 space-y-2">
        <span
          className="flex items-center gap-2 text-sm"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <MarkerPin02 size={18} className="text-brand-500" />
          {INTRODUCTION_DATA.location.city},{' '}
          {INTRODUCTION_DATA.location.country}
        </span>
      </div>
    </div>
  );
}
