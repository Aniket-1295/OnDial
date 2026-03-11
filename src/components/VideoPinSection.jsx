import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useGSAP(() => {
    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(6% at 50% 50%)",
        }}
        className="size-full video-box relative overflow-hidden"
      >
        {/* Background: OnDial dashboard image instead of video */}
        <img
          src="https://www.ondial.ai/_next/image?url=%2Fimg%2Fvector%2Fvector5.png&w=3840&q=75"
          alt="OnDial AI Platform"
          className="size-full absolute inset-0 object-cover object-center"
          style={{
            filter: "brightness(0.7)",
          }}
        />

        {/* Dark overlay with gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,15,30,0.85) 0%, rgba(37,99,235,0.3) 50%, rgba(10,15,30,0.85) 100%)",
          }}
        />

        {/* Center CTA content */}
        <div className="abs-center md:scale-100 scale-200 z-10 text-center px-4">
          {/* Spinning ring text */}
          <div className="relative flex items-center justify-center">
            {/* Pulsing rings */}
            <div
              className="absolute rounded-full border"
              style={{
                width: "12vw",
                height: "12vw",
                borderColor: "rgba(6,182,212,0.3)",
                animation: "spin 8s linear infinite",
              }}
            />
            <div
              className="absolute rounded-full border"
              style={{
                width: "9vw",
                height: "9vw",
                borderColor: "rgba(37,99,235,0.4)",
                animation: "spin 5s linear infinite reverse",
              }}
            />

            {/* Center CTA button */}
            <div className="play-btn" style={{ zIndex: 10 }}>
              <div className="flex flex-col items-center gap-1">
                <span style={{ fontSize: "2vw", color: "#06B6D4" }}>🤖</span>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "0.8vw",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Live
                </span>
              </div>
            </div>
          </div>

          {/* Overlay text */}
          <div className="mt-8">
            <h2
              style={{
                color: "#ffffff",
                fontFamily: "Antonio, sans-serif",
                fontSize: "clamp(1rem, 3vw, 2.5rem)",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to Scale?
            </h2>
            <a
              href="https://www.ondial.ai/contact"
              style={{
                display: "inline-block",
                marginTop: "1rem",
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(0.6rem, 1.2vw, 1rem)",
                padding: "0.6em 2em",
                borderRadius: "999px",
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(37,99,235,0.5)",
              }}
            >
              Get Started Today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPinSection;
