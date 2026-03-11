import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { featureCards } from "../constants";

const MessageSection = () => {
  useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
    const secMsgSplit = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.to(firstMsgSplit.words, {
      color: "#ffffff",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });
    gsap.to(secMsgSplit.words, {
      color: "#ffffff",
      ease: "power1.in",
      stagger: 1,
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    const revealTl = gsap.timeline({
      delay: 1,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
      },
    });
    revealTl.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    const paragraphTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });
    paragraphTl.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Transform Business Communication</h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div
                className="md:pb-5 pb-3 px-5"
                style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)" }}
              >
                <h2 style={{ color: "#ffffff" }}>with OnDial</h2>
              </div>
            </div>

            <h1 className="second-message">
              AI Voice Agents for every business
            </h1>
          </div>

          {/* Sub-label */}
          <div className="flex-center md:mt-10 mt-6">
            <div className="max-w-xl px-6 text-center">
              <p
                className="text-sm font-medium tracking-widest uppercase"
                style={{ color: "#06B6D4", letterSpacing: "0.15em" }}
              >
                Everything You Need
              </p>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="mt-12 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {featureCards.map((card, i) => (
              <div key={i} className="feature-card group">
                <div className="feature-card-icon">
                  <span>{card.icon}</span>
                </div>
                <h3
                  className="font-bold text-lg text-white mt-2"
                  style={{ fontFamily: "Antonio, sans-serif" }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-paragraph text-sm text-[#94A3B8] leading-relaxed"
                  style={{ fontSize: "0.875rem" }}
                >
                  {card.body}
                </p>
                <span className="feature-tag">{card.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
