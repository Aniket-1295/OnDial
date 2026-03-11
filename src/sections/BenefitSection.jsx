import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap";
import VideoPinSection from "../components/VideoPinSection";
import { trustPills } from "../constants";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".benefit-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
      },
    });

    revealTl
      .to(".benefit-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefit-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });

  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          {/* Section label */}
          <p
            className="text-sm font-medium tracking-widest uppercase mb-2 font-paragraph"
            style={{ color: "#06B6D4", letterSpacing: "0.15em" }}
          >
            Why Choose OnDial?
          </p>
          <p className="text-[#CBD5E1] font-paragraph text-center text-lg max-w-xl">
            Trusted by All Businesses Worldwide
          </p>

          {/* Animated clip-path titles — trust pillars */}
          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Ultra-Low Latency"}
              color={"#ffffff"}
              bg={"#2563EB"}
              className={"first-title"}
              borderColor={"#2563EB"}
            />
            <ClipPathTitle
              title={"Global Communication"}
              color={"#0A0F1E"}
              bg={"#06B6D4"}
              className={"second-title"}
              borderColor={"#06B6D4"}
            />
            <ClipPathTitle
              title={"Enterprise Security"}
              color={"#ffffff"}
              bg={"#4F46E5"}
              className={"third-title"}
              borderColor={"#4F46E5"}
            />
            <ClipPathTitle
              title={"Proven ROI"}
              color={"#0A0F1E"}
              bg={"#38BDF8"}
              className={"fourth-title"}
              borderColor={"#38BDF8"}
            />
          </div>

          <div className="md:mt-8 mt-6">
            <p className="text-[#64748B] font-paragraph">And much more ...</p>
          </div>

          {/* Trust pills grid */}
          <div className="mt-12 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl w-full">
            {trustPills.map((pill, i) => (
              <div key={i} className="trust-pill">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{pill.icon}</span>
                  <h3
                    className="font-bold text-white text-base"
                    style={{ fontFamily: "Antonio, sans-serif" }}
                  >
                    {pill.title}
                  </h3>
                </div>
                <p className="text-[#94A3B8] font-paragraph text-sm leading-relaxed">
                  {pill.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stat counters row */}
      <div
        className="mx-auto max-w-5xl mt-16 mb-10 px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center"
      >
        {[
          { val: "100+", label: "Languages" },
          { val: "200+", label: "Voice Variations" },
          { val: "80+", label: "Indian Voices" },
          { val: "<500ms", label: "Response Latency" },
          { val: "20+", label: "Industries" },
          { val: "24/7", label: "Uptime" },
        ].map((s, i) => (
          <div key={i} className="flex flex-col gap-1">
            <p
              className="font-bold text-2xl md:text-3xl text-white"
              style={{ fontFamily: "Antonio, sans-serif" }}
            >
              {s.val}
            </p>
            <p className="text-[#64748B] font-paragraph text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Video pin section */}
      <div className="relative overlay-box">
        <VideoPinSection />
      </div>
    </section>
  );
};

export default BenefitSection;
