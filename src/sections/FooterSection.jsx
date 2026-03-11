const FooterSection = () => {
  return (
    <section className="footer-section">
      {/* Gradient divider replacing footer-dip image */}
      <div
        className="w-full"
        style={{
          height: "120px",
          background:
            "linear-gradient(180deg, #0A0F1E 0%, #0F172A 50%, #0A0F1E 100%)",
          borderTop: "1px solid rgba(37,99,235,0.15)",
        }}
      />

      <div className="2xl:h-[110dvh] relative md:pt-[10vh] pt-[6vh]">
        {/* Big tagline */}
        <div className="overflow-hidden z-10">
          <h1
            className="general-title text-center py-5"
            style={{
              background: "linear-gradient(135deg, #2563EB, #06B6D4, #4F46E5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            #ONDIALAI
          </h1>
        </div>

        {/* OnDial logo */}
        <div className="flex-center mt-8 relative z-10">
          <img
            src="https://www.ondial.ai/_next/image?url=%2Fimg%2Flogo%2Fwhite-logo.png&w=256&q=100"
            alt="OnDial AI Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Tagline */}
        <p
          className="text-center font-paragraph text-[#64748B] mt-4 max-w-md mx-auto px-4 text-sm"
        >
          Empowering businesses with AI voice agents and innovative IT solutions
          for smarter, faster, and more connected growth.
        </p>

        {/* Contact email */}
        <div className="flex-center mt-4">
          <a
            href="mailto:contact@ondial.ai"
            className="font-paragraph text-sm text-[#06B6D4] hover:text-white transition-colors"
          >
            contact@ondial.ai
          </a>
        </div>

        {/* Social / CTA buttons */}
        <div className="flex-center gap-4 relative z-10 md:mt-10 mt-6">
          <a
            href="https://www.ondial.ai/contact"
            className="font-paragraph text-sm font-bold text-white px-6 py-3 rounded-full transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #2563EB, #4F46E5)",
              boxShadow: "0 0 20px rgba(37,99,235,0.3)",
            }}
          >
            Get Started Today →
          </a>
          <a
            href="https://www.ondial.ai/contact"
            className="font-paragraph text-sm font-medium text-white px-6 py-3 rounded-full transition-all hover:bg-[#ffffff1a]"
            style={{
              border: "1px solid rgba(37,99,235,0.4)",
            }}
          >
            Schedule Demo
          </a>
        </div>

        {/* Footer columns */}
        <div className="mt-20 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-[#CBD5E1] font-paragraph md:text-base font-medium">
          {/* Quick Links */}
          <div className="flex items-start md:gap-16 gap-8">
            <div>
              <p className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Quick Links</p>
              <div className="flex flex-col gap-2">
                {["Home", "About Us", "Services", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`https://www.ondial.ai/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-[#64748B] hover:text-[#06B6D4] transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Resources</p>
              <div className="flex flex-col gap-2">
                {["Blog", "Privacy Policy", "Terms of Service"].map((link) => (
                  <a
                    key={link}
                    href={`https://www.ondial.ai/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[#64748B] hover:text-[#06B6D4] transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="md:max-w-lg">
            <p className="text-white font-bold mb-2 text-sm uppercase tracking-wider">
              Transform Your Business Today
            </p>
            <p className="text-[#64748B] text-sm mb-4 font-paragraph">
              Experience how AI Voice Agents can boost productivity, cut costs,
              and improve customer satisfaction.
            </p>
            <div
              className="flex justify-between items-center py-3 px-4 rounded-xl"
              style={{
                border: "1px solid rgba(37,99,235,0.3)",
                background: "rgba(30,41,59,0.5)",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-white font-paragraph text-sm placeholder:text-[#475569] outline-none"
              />
              <button
                className="ml-3 text-[#06B6D4] hover:text-white transition-colors text-lg shrink-0"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="copyright-box">
          <p>© 2026 OnDial AI. All Rights Reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.ondial.ai/terms"
              className="hover:text-white transition-colors text-sm"
            >
              Terms and Conditions
            </a>
            <a
              href="https://www.ondial.ai/return-policy"
              className="hover:text-white transition-colors text-sm"
            >
              Return Policy
            </a>
            <a
              href="https://www.ondial.ai/privacy"
              className="hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
