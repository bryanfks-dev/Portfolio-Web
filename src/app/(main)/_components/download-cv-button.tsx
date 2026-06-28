import { Download01 } from '@untitledui/icons';
import { Button } from '@/components/base/buttons/button';

interface IDownloadCVButtonProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function DownloadCVButton({
  size = 'md',
}: IDownloadCVButtonProps) {
  const downloadCV = () => {
    open('/files/cv.pdf', '_blank');
  };

  return (
    <Button
      iconLeading={Download01}
      href="/"
      size={size}
      className="w-full"
      onClick={downloadCV}
    >
      Download CV
    </Button>
  );
}
