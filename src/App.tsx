export default function App() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#f8e46f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: '"Open Sans", sans-serif',
      }}
    >
      {/* Centered content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          width: "320px",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            transform: "translateX(-8px)",
          }}
        >
          <img
            src="/logo.svg"
            alt="Sololabs logo"
            style={{ width: "88px", height: "88px", display: "block" }}
          />
          <p
            style={{
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "normal",
              letterSpacing: "-2px",
              color: "#000000",
              textAlign: "center",
              whiteSpace: "nowrap",
              transform: "translateX(-2px)",
            }}
          >
            Sololabs
          </p>
        </div>

        {/* Description */}
        <div
          style={{
            fontWeight: 400,
            fontSize: "16px",
            letterSpacing: "-0.7px",
            color: "#000000",
            textAlign: "center",
            width: "100%",
          }}
        >
          <p style={{ lineHeight: "normal", marginBottom: "6px" }}>
            We are a digital product studio specializing in software design and
            development.{" "}
          </p>
          <p style={{ lineHeight: "normal", marginBottom: "6px" }}>
            Our services include product strategy, UX/UI design, prototyping,
            design systems, and web/mobile development.
          </p>
          <p style={{ lineHeight: "normal", marginBottom: "6px" }}>&#8203;</p>
          <p style={{ fontWeight: 600, lineHeight: "normal" }}>
            <a
              href="mailto:hey@sololabs.studio"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              hey@sololabs.studio
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <p
        style={{
          position: "absolute",
          bottom: "32px",
          width: "280px",
          fontWeight: 400,
          fontSize: "14px",
          lineHeight: "normal",
          letterSpacing: "-0.7px",
          color: "#8e8e93",
          textAlign: "center",
        }}
      >
        © 2025 Solo Labs, LLC
      </p>
    </div>
  );
}
