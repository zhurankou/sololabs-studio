export function SunLogo() {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-foreground"
    >
      {/* Main circle - hand-drawn irregular oval */}
      <ellipse
        cx="60"
        cy="60"
        rx="16"
        ry="18"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Smile - curved line inside */}
      <path 
        d="M 53 62 Q 60 67 67 62" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        fill="none"
      />
      
      {/* Sun rays - sketchy irregular angles and lengths */}
      {/* Top ray */}
      <line x1="60" y1="35" x2="59" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Top-right ray */}
      <line x1="71" y1="42" x2="80" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Right ray */}
      <line x1="79" y1="60" x2="95" y2="60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Bottom-right ray */}
      <line x1="74" y1="74" x2="86" y2="88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Bottom ray */}
      <line x1="60" y1="82" x2="61" y2="98" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Bottom-left ray */}
      <line x1="46" y1="76" x2="34" y2="90" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Left ray */}
      <line x1="41" y1="60" x2="25" y2="60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Top-left ray */}
      <line x1="47" y1="44" x2="36" y2="30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}