import {
  Clapperboard,
  Image as ImageIcon,
  Sparkles,
  Sparkle,
  Star,
  Zap,
} from "lucide-react"
import ModeCard from "../components/ModeCard"
import BrandMark from "../components/BrandMark"
import { type Mode } from "../types"

interface HomeScreenProps {
  onSelect: (mode: Mode) => void
}

const FLOATIES = [
  { Icon: Star, color: "#5B5BD6" },
  { Icon: Sparkles, color: "#2EB87D" },
  { Icon: Zap, color: "#FFB020" },
  { Icon: Star, color: "#FF7E9D" },
  { Icon: Sparkles, color: "#5B5BD6" },
  { Icon: Sparkle, color: "#2EB87D" },
]

export default function HomeScreen({ onSelect }: HomeScreenProps) {
  return (
    <div className="flex-1 min-h-0 flex flex-col relative overflow-hidden animate-screen-in">
      {/* Decorative floating icons */}
      {FLOATIES.map(({ Icon, color }, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute select-none pointer-events-none opacity-20"
          style={{
            left: `${6 + i * 16}%`,
            top: `${12 + ((i * 19) % 70)}%`,
            transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (10 + i * 5)}deg)`,
          }}
        >
          <Icon size={18 + (i % 3) * 10} strokeWidth={2} color={color} />
        </span>
      ))}

      {/* Centered stack: mark, wordmark, tagline, mode cards */}
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-7 z-10 py-6 px-4">
        <div className="flex items-center gap-3 animate-fade-up">
          <BrandMark size={56} />
          <span className="text-4xl sm:text-5xl font-bold tracking-tight text-booth-text">
            Snapstitch
          </span>
        </div>

        <div
          className="flex flex-col items-center gap-3 text-center animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <p className="max-w-md text-sm sm:text-base text-booth-muted font-medium leading-relaxed">
            Cute photo booths, right in your browser. Classic strips, pose
            challenges, or freeform polaroid collages.
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-booth-lavender/60 border border-booth-border px-3 py-1 text-xs font-bold text-booth-text">
            <span
              className="w-2 h-2 rounded-full bg-booth-success"
              aria-hidden="true"
            />
            No account · No uploads · Photos stay private
          </span>
          <p className="text-xs text-booth-muted font-semibold">
            Works in any modern browser · Camera optional · Try it with photos
          </p>
        </div>

        {/* Mode cards: one row on desktop */}
        <div
          className="flex items-center gap-6 flex-wrap justify-center animate-fade-up w-full"
          style={{ animationDelay: "160ms" }}
        >
          <ModeCard
            title="Classic Booth"
            description="Pick a layout — 3 or 4 shots, portrait strip or a 2×2 grid."
            icon={
              <Clapperboard size={40} strokeWidth={1.75} color="#FFFFFF" />
            }
            compact
            accent="#5B5BD6"
            bg="linear-gradient(135deg, #5B5BD6, #8A6CFF)"
            onClick={() => onSelect("classic")}
          />

          <div className="flex flex-row sm:flex-col items-center justify-center gap-2 w-full sm:w-auto text-booth-muted">
            <div className="h-px w-16 sm:h-16 sm:w-px bg-booth-border" />
            <span className="text-xs font-bold tracking-widest uppercase">
              or
            </span>
            <div className="h-px w-16 sm:h-16 sm:w-px bg-booth-border" />
          </div>

          <ModeCard
            title="Pose Match"
            description="Copy a reference pose and see how your shot compares."
            icon={<Sparkle size={40} strokeWidth={1.75} color="#FFFFFF" />}
            compact
            accent="#2EB87D"
            bg="linear-gradient(135deg, #2EB87D, #6FE0AB)"
            onClick={() => onSelect("pose-match")}
          />

          <div className="flex flex-row sm:flex-col items-center justify-center gap-2 w-full sm:w-auto text-booth-muted">
            <div className="h-px w-16 sm:h-16 sm:w-px bg-booth-border" />
            <span className="text-xs font-bold tracking-widest uppercase">
              or
            </span>
            <div className="h-px w-16 sm:h-16 sm:w-px bg-booth-border" />
          </div>

          <ModeCard
            title="Polaroid"
            description="Free-floating instant photos you arrange on a shared canvas."
            icon={<ImageIcon size={40} strokeWidth={1.75} color="#FFFFFF" />}
            compact
            accent="#FF7E9D"
            bg="linear-gradient(135deg, #FF7E9D, #FFB020)"
            onClick={() => onSelect("polaroid")}
          />
        </div>
      </div>
    </div>
  )
}