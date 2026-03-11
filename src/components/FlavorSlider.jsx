import { useGSAP } from "@gsap/react";
import { industryList } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {industryList.map((industry) => (
          <div
            key={industry.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${industry.rotation}`}
            style={{
              background: `linear-gradient(135deg, #1E293B 0%, #0F172A 100%)`,
              border: `1px solid ${industry.color}33`,
              borderRadius: "1.5rem",
              overflow: "hidden",
            }}
          >
            {/* Glow background blob */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at 30% 40%, ${industry.color} 0%, transparent 60%)`,
              }}
            />

            {/* Card content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
              {/* Top: icon + tag */}
              <div className="flex items-start justify-between">
                <span className="text-4xl md:text-5xl">{industry.icon}</span>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full font-paragraph"
                  style={{
                    background: `${industry.color}22`,
                    color: industry.color,
                    border: `1px solid ${industry.color}44`,
                  }}
                >
                  {industry.tag}
                </span>
              </div>

              {/* Bottom: title + body */}
              <div>
                <h1
                  className="text-white font-bold text-2xl md:text-3xl mb-3 leading-tight"
                  style={{
                    fontFamily: "Antonio, sans-serif",
                    fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                  }}
                >
                  {industry.name}
                </h1>
                <p
                  className="text-[#94A3B8] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.75rem, 1.2vw, 0.9rem)" }}
                >
                  {industry.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
