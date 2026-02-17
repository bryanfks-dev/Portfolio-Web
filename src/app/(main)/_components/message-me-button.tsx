import { Mail01 } from '@untitledui/icons';
import { Button } from '@/components/base/buttons/button';
import { MESSAGE_ME_DATA } from '@/data/message-me';

export default function MessageMeButton() {
  const getHref = () => {
    const params: string[] = [];

    if (MESSAGE_ME_DATA.subject) {
      params.push(`subject=${encodeURIComponent(MESSAGE_ME_DATA.subject)}`);
    }

    if (MESSAGE_ME_DATA.body) {
      params.push(`body=${encodeURIComponent(MESSAGE_ME_DATA.body)}`);
    }

    return `mailto:${MESSAGE_ME_DATA.email}${params.length ? `?${params.join('&')}` : ''}`;
  };

  return (
    <Button iconLeading={Mail01} size="lg" color="secondary" href={getHref()} />
  );
}
