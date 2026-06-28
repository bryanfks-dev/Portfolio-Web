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
          . I am an undergraduate student majoring in Computer Science at Bina
          Nusantara University.
        </p>

        <p data-aos="fade-right" data-aos-delay="100">
          I have extensive experience in building web applications and services,
          using modern technologies. I am a self-taught developer who is enjoys
          learning new things and improving my skills.
        </p>

        <p data-aos="fade-right" data-aos-delay="150">
          I have a deep interest for building scalable distributed systems,
          software architecture, software infrastructure, and cloud computing.
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

        {!INTRODUCTION_DATA.bigFanOfVibeCode && (
          <span
            className="flex items-center gap-2 text-sm"
            data-aos="fade-right"
            data-aos-delay="250"
          >
            <SlashCircle01 size={18} className="text-red-500" />
            Not a big fan of vibe code
          </span>
        )}
      </div>
    </div>
  );
}
