import { ArrowUpRight } from '@untitledui/icons';
import Link from 'next/link';

interface IVisitProjectUrlButtonProps {
  url: string;
}

export default function VisitProjectUrlButton({
  url,
}: IVisitProjectUrlButtonProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener"
      className="flex items-center gap-1 decoration-brand-500 hover:text-brand-500 hover:underline"
    >
      Visit the project <ArrowUpRight size={20} />
    </Link>
  );
}
