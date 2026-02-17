interface IUserNameWithUnderlinedNicknameProps {
  name: string;
  nickname: string;
}

export default function UserNameWithUnderlinedNickname({
  name,
  nickname,
}: IUserNameWithUnderlinedNicknameProps) {
  if (!name.includes(nickname)) {
    return (
      <>
        {name} ({nickname})
      </>
    );
  }

  const parts = name.split(nickname);

  return (
    <>
      {parts[0]}
      <span className="underline decoration-brand-500 decoration-4">
        {nickname}
      </span>
      {parts[1]}
    </>
  );
}
