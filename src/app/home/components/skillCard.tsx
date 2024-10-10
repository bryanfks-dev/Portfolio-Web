import clsx from "clsx";
import Image from "next/image";

/**
 * SkillCard is a component that displays a skill card.
 *
 * @param {SkillProps} props - The properties of the skill card.
 *
 * @returns {JSX.Element} The skill card component.
 */
export default function SkillCard(props: SkillProps): JSX.Element {
  return (
    <div
      className={clsx(
        "flex h-20 w-20 items-center justify-center rounded-2xl md:h-32 md:w-32",
        props.favorite ? "bg-secondary" : "bg-primary",
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <span className="sr-only">{props.label}</span>

        <Image
          height={0}
          width={0}
          unoptimized
          className="h-auto w-10 rounded md:w-12"
          src={props.imageUrl}
          alt={props.label}
        />

        <span className="hidden font-bold text-text-secondary md:block">
          {props.label}
        </span>
      </div>
    </div>
  );
}
