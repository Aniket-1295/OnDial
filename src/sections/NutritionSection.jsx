import { useMediaQuery } from "react-responsive";
import { statsList } from "../constants";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const languageCards = [
  { flag: "🇺🇸", region: "Pan-India", lang: "English", voices: "US Male/Female" },
  { flag: "🇮🇳", region: "Pan-India", lang: "English", voices: "Indian Male/Female" },
  { flag: "🇮🇳", region: "North India", lang: "Hindi", voices: "Native Male/Female" },
  { flag: "🇮🇳", region: "Gujarat", lang: "Gujarati", voices: "Gujarati Male/Female" },
];

const NutritionSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [lists, setLists] = useState(statsList);

  useEffect(() => {
    if (isMobile) {
      setLists(statsList.slice(0, 3));
    } else {
      setLists(statsList);
    }
  }, [isMobile]);

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });
    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="nutrition-section">
      {/* Decorative top gradient divider */}
      <div
        className="w-full h-24 md:h-32"
        style={{
          background:
            "linear-gradient(180deg, #0A0F1E 0%, #0F172A 100%)",
        }}
      />

      {/* Dashboard image */}
      <img
        src="https://www.ondial.ai/_next/image?url=%2Fimg%2Fvector%2Fvector5.png&w=3840&q=75"
        alt="OnDial AI Voice Agent Dashboard"
        className="big-img"
        style={{
          filter: "drop-shadow(0 0 60px rgba(6,182,212,0.25)) drop-shadow(0 0 120px rgba(37,99,235,0.15))",
          opacity: 0.85,
        }}
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        {/* Left: heading */}
        <div className="relative inline-block md:translate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">Connect in Every</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div
                className="pb-5 md:pt-0 pt-3 md:px-5 px-3"
                style={{ background: "linear-gradient(135deg, #2563EB, #06B6D4)" }}
              >
                <h2 className="text-white">Indian Language</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Center: description + language cards */}
        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-sm max-w-md flex flex-col gap-4">
            <p className="text-base md:text-right text-balance font-paragraph text-[#94A3B8] leading-relaxed">
              Bridge linguistic divides across India with our comprehensive
              language support. Our AI Voice Agents speak 9 Indian languages
              fluently, ensuring no customer feels left behind.
            </p>

            {/* Language Cards */}
            <div className="flex flex-col gap-2 mt-2">
              {languageCards.map((lc, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(30,41,59,0.6)",
                    border: "1px solid rgba(37,99,235,0.2)",
                  }}
                >
                  <span className="text-xl">{lc.flag}</span>
                  <div className="flex-1 text-left">
                    <p
                      className="text-xs text-[#94A3B8] font-paragraph"
                      style={{ marginBottom: 0 }}
                    >
                      {lc.region}
                    </p>
                    <p
                      className="text-sm font-bold text-white font-paragraph"
                      style={{ marginBottom: 0 }}
                    >
                      {lc.lang}
                    </p>
                  </div>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-paragraph"
                    style={{
                      background: "rgba(6,182,212,0.15)",
                      color: "#06B6D4",
                    }}
                  >
                    {lc.voices}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: stat counters */}
        <div className="nutrition-box">
          <div className="list-wrapper">
            {lists.map((stat, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph text-[#06B6D4]">{stat.label}</p>
                  <p className="font-paragraph text-sm mt-2 text-[#64748B]">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold text-white">
                    {stat.amount}
                  </p>
                </div>

                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
