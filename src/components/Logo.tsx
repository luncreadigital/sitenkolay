type LogoProps = {
  variant?: "mark" | "full";
  theme?: "dark" | "light" | "white";
  className?: string;
};

export function Logo({ variant = "full", theme = "dark", className = "" }: LogoProps) {
  const navy = theme === "white" ? "#ffffff" : theme === "light" ? "#07162f" : "#F4F7FB";
  const blue = theme === "white" ? "#58A0FF" : "#0878FF";
  const wordNavy = theme === "light" ? "#0B1D36" : theme === "white" ? "#ffffff" : "#F4F7FB";
  const wordBlue = theme === "white" ? "#7EB3FF" : "#0066FF";

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 88 88" className="h-[1.25em] w-[1.25em]" fill="none" aria-hidden>
        <path
          d="M68 18H40C25.5 18 17 27.5 17 41.5C17 53.8 25.4 62 39 62H51"
          stroke={navy}
          strokeWidth="10"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M37 29H50C64.5 29 73 38.5 73 52.5C73 66.5 64.5 76 50 76H20"
          stroke={blue}
          strokeWidth="10"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
      {variant === "full" && (
        <span className="font-display text-[1.06em] font-medium leading-none tracking-[-0.045em]">
          <span style={{ color: wordNavy }}>siten</span>
          <span style={{ color: wordBlue }}>kolay</span>
        </span>
      )}
    </span>
  );
}
