import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

const floatingBadges = [
  { icon: "⚡", text: "<500ms Response Time", pos: "top-[18%] left-[3%]" },
  { icon: "🌍", text: "100+ Languages", pos: "top-[35%] right-[2%]" },
  { icon: "📞", text: "24/7 Always On", pos: "top-[62%] left-[2%]" },
  { icon: "🔒", text: "GDPR Compliant", pos: "top-[75%] right-[3%]" },
];

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {/* Background gradient */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.08) 40%, rgba(10,15,30,0) 70%), radial-gradient(ellipse at 20% 80%, rgba(79,70,229,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Hero dashboard image */}
        <div
          className="absolute right-0 top-0 h-full flex items-center justify-end"
          style={{ width: isTablet ? "100%" : "52%" }}
        >
          <img
            src="https://www.ondial.ai/_next/image?url=%2Fimg%2Fvector%2Fvector5.png&w=3840&q=75"
            alt="OnDial AI Voice Agent Dashboard"
            className={`${isTablet ? "opacity-20 w-full h-full object-cover" : "w-full h-auto object-contain"}`}
            style={{
              filter: "drop-shadow(0 0 60px rgba(6,182,212,0.3)) drop-shadow(0 0 30px rgba(37,99,235,0.2))",
            }}
          />
        </div>

        {/* Floating stat badges */}
        {!isMobile &&
          floatingBadges.map((badge, i) => (
            <div
              key={i}
              className={`absolute ${badge.pos} stat-badge z-20`}
              style={{
                backdropFilter: "blur(8px)",
                background: "rgba(30,41,59,0.85)",
                boxShadow: "0 0 20px rgba(37,99,235,0.2)",
              }}
            >
              <span>{badge.icon}</span>
              <span className="font-paragraph text-xs font-medium text-[#CBD5E1]">
                {badge.text}
              </span>
            </div>
          ))}

        {/* Content */}
        <div className="hero-content opacity-0">
          {/* Badge pill */}
          <div
            className="mb-6 flex items-center gap-2 px-5 py-2 rounded-full font-paragraph text-sm font-medium text-[#06B6D4]"
            style={{
              background: "rgba(6,182,212,0.1)",
              border: "1px solid rgba(6,182,212,0.3)",
            }}
          >
            <span>🤖</span>
            <span>AI Business Calls. Future is Live.</span>
          </div>

          <div className="overflow-hidden">
            <h1 className="hero-title">Automate Your Calls</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>With OnDial AI</h1>
            </div>
          </div>

          <h2>
            Create voice agents that have natural, flowing conversations and
            provide 24/7 customer support with human-like understanding.
          </h2>

          <div className="flex flex-wrap gap-4 justify-center md:mt-10 mt-6 px-4">
            <a
              href="#contact"
              className="hero-button"
              style={{ textDecoration: "none", display: "inline-block" }}
            >
              Start Free Trial →
            </a>
            <a
              href="#contact"
              className="font-bold text-lg rounded-full md:p-5 p-3 md:px-16 px-10 text-white transition-all hover:opacity-80"
              style={{
                textDecoration: "none",
                display: "inline-block",
                border: "2px solid rgba(37,99,235,0.6)",
                background: "rgba(37,99,235,0.1)",
                backdropFilter: "blur(4px)",
              }}
            >
              Get a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
