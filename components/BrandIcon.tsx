import { ICONS } from "@/lib/icons";

export default function BrandIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const icon = ICONS[name];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={icon.title}
      focusable="false"
      className={className}
    >
      <title>{icon.title}</title>
      <path d={icon.d} />
    </svg>
  );
}
