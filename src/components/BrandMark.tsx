interface BrandMarkProps {
  size?: number
}

/**
 * Snapstitch brand mark: a rounded app-tile with three film frames —
 * a clean, modern "photo strip" glyph. Pure SVG so no image asset is needed.
 */
export default function BrandMark({ size = 36 }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Snapstitch logo"
    >
      <defs>
        <linearGradient id="snapstitch-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5B5BD6" />
          <stop offset="1" stopColor="#8A6CFF" />
        </linearGradient>
      </defs>

      {/* App tile */}
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#snapstitch-mark)" />

      {/* Film frames */}
      <rect x="17" y="15" width="30" height="7" rx="2.5" fill="#FFFFFF" opacity="0.95" />
      <rect x="17" y="28.5" width="30" height="7" rx="2.5" fill="#FFFFFF" opacity="0.95" />
      <rect x="17" y="42" width="30" height="7" rx="2.5" fill="#FFFFFF" opacity="0.95" />

      {/* Accent sparkle */}
      <circle cx="46" cy="12.5" r="2.6" fill="#FFE87A" />
    </svg>
  )
}