import { useRef, useState } from "react";
import { faqList } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TestimonialSection = () => {
  const vdRef = useRef([]);
  const [openIndex, setOpenIndex] = useState(null);

  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="testimonials-section">
      {/* Rolling background text */}
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 style={{ color: "#1E293B" }} className="first-title">
          Everything
        </h1>
        <h1 style={{ color: "#2563EB" }} className="sec-title">
          You Need
        </h1>
        <h1 style={{ color: "#1E293B" }} className="third-title">
          To Know
        </h1>
      </div>

      {/* FAQ cards using pin-box / vd-card structure */}
      <div className="pin-box">
        {faqList.map((faq, index) => (
          <div
            key={index}
            ref={(el) => (vdRef.current[index] = el)}
            className={`vd-card ${faq.translation} ${faq.rotation}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{
              cursor: "pointer",
              background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
              border: "1px solid rgba(37,99,235,0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "1.5rem",
              minHeight: "180px",
            }}
          >
            {/* Question number + Q */}
            <div className="flex items-start gap-3">
              <span
                className="font-bold shrink-0"
                style={{
                  color: "#2563EB",
                  fontFamily: "Antonio, sans-serif",
                  fontSize: "1.5rem",
                  lineHeight: 1,
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="font-bold text-white leading-tight"
                style={{
                  fontFamily: "Antonio, sans-serif",
                  fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)",
                }}
              >
                {faq.q}
              </h3>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background: "rgba(37,99,235,0.2)",
                margin: "0.75rem 0",
              }}
            />

            {/* Answer — always visible at compact size */}
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
                color: "#94A3B8",
                lineHeight: 1.5,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: openIndex === index ? "unset" : 3,
                WebkitBoxOrient: "vertical",
              }}
            >
              {faq.a}
            </p>

            {/* Toggle hint */}
            <div
              className="flex justify-end mt-2"
              style={{ color: "#2563EB", fontSize: "0.75rem", fontFamily: "Inter, sans-serif" }}
            >
              {openIndex === index ? "↑ Less" : "↓ More"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
