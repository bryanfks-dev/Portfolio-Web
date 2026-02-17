import { Download01 } from '@untitledui/icons';
import { Button } from '@/components/base/buttons/button';

export default function DownloadCVButton() {
  const downloadCV = () => {
    open('/files/cv.pdf', '_blank');
  };

  return (
    <Button
      iconLeading={Download01}
      href="/"
      size="lg"
      className="w-full"
      onClick={downloadCV}
    >
      Download CV
    </Button>
  );
}
