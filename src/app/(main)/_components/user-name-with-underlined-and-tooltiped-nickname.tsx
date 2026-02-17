import { Tooltip, TooltipTrigger } from '@/components/base/tooltip/tooltip';

interface IUserNameWithUnderlinedAndTooltipedNicknameProps {
  name: string;
  nickname: string;
}

export default function UserNameWithUnderlinedAndTooltipedNickname({
  name,
  nickname,
}: IUserNameWithUnderlinedAndTooltipedNicknameProps) {
  if (!name.includes(nickname)) {
    return (
      <>
        {name}
        <Tooltip arrow title="My Nickname!">
          <TooltipTrigger>({nickname})</TooltipTrigger>
        </Tooltip>
      </>
    );
  }

  const parts = name.split(nickname);

  return (
    <>
      {parts[0]}
      <Tooltip arrow title="My Nickname!">
        <TooltipTrigger className="underline decoration-brand-500 decoration-3">
          {nickname}
        </TooltipTrigger>
      </Tooltip>
      {parts[1]}
    </>
  );
}
