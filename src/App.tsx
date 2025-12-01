import { StickyNote } from "./components/StickyNote";
import Logo from "./imports/Logo-12-215";
import { WarpingBackground } from "./components/WarpingBackground";

export default function App() {
  return (
    <div
      className="min-h-screen bg-background flex flex-col items-center justify-center p-8 gap-0 relative overflow-hidden"
      style={{ fontFamily: "Sono, monospace" }}
    >
      <div className="absolute inset-0 z-0">
        <WarpingBackground />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="flex flex-col items-center gap-2 -translate-y-24">
          <div className="w-[80px] h-[74px]">
            <Logo />
          </div>

          {/* Studio Name */}
          <div className="text-foreground text-lg font-medium -translate-y-1">
            sololabs
          </div>
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-6xl flex flex-wrap justify-center gap-8 -mt-16">
          <StickyNote
            title="Coming soon..."
            color="yellow"
            rotation={-2}
          />
        </div>

        {/* Introduction Text */}
        <div className="text-foreground text-center px-4 max-w-xl mt-8">
          Hey, my name is Alex, it is just me here, vibecoding
          solo. Say{" "}
          <a
            href="mailto:hey@sololabs.studio"
            className="hover:bg-sky-200 dark:hover:bg-sky-900 transition-all px-1 rounded"
          >
            hey@sololabs.studio
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute bottom-4 w-full text-center text-foreground opacity-40 text-base z-10">
        © 2025 Solo Labs, LLC
      </div>
    </div>
  );
}