import { Badge } from '@/components/base/badges/badges';

interface IToolBadgeProps {
  tool: ICapabilityTool;
}

export default function ToolBadge({ tool }: IToolBadgeProps) {
  return (
    <Badge
      className="flex gap-1.5"
      type="color"
      color={tool.prefered !== undefined && tool.prefered ? 'brand' : 'gray'}
      size="lg"
    >
      <div className="size-4">{tool.logo}</div>
      {tool.name}
    </Badge>
  );
}
