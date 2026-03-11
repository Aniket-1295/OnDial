import { useState } from "react";

const industries = [
  "Healthcare",
  "Retail & E-commerce",
  "Finance & Banking",
  "Real Estate",
  "Insurance",
  "Sales & Lead Generation",
  "Call Center & BPO",
  "Telecommunications",
  "Automotive",
  "Education",
  "Travel & Tourism",
  "Hospitality",
  "Legal",
  "Government",
  "Utilities",
  "Non-Profit Organizations",
  "Transportation & Logistics",
  "Manufacturing",
  "Construction",
  "Agriculture",
];

const resources = ["About", "Blog", "Contact Us"];

const NavBar = () => {
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(10,15,30,0.98) 0%, rgba(10,15,30,0.85) 100%)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(37,99,235,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="https://www.ondial.ai/img/logo/nor.png"
            alt="OnDial AI Logo"
            className="md:h-9 h-7 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-paragraph text-sm font-medium text-[#CBD5E1]">
          <a
            href="/"
            className="hover:text-white transition-colors"
          >
            Home
          </a>

          {/* Industries dropdown */}
          <div className="relative nav-group">
            <button
              className="flex items-center gap-1 hover:text-white transition-colors"
              onClick={() => setIndustriesOpen(!industriesOpen)}
            >
              Industries
              <svg
                className={`w-3 h-3 transition-transform ${industriesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {industriesOpen && (
              <div
                className="absolute top-full left-0 mt-2 rounded-xl shadow-2xl z-50 overflow-hidden"
                style={{
                  background: "#1E293B",
                  border: "1px solid rgba(37,99,235,0.2)",
                  minWidth: "220px",
                  maxHeight: "70vh",
                  overflowY: "auto",
                }}
              >
                {industries.map((ind) => (
                  <a
                    key={ind}
                    href="https://www.ondial.ai/industries"
                    className="block px-4 py-2.5 text-sm text-[#CBD5E1] hover:bg-[#2563EB22] hover:text-white transition-colors"
                  >
                    {ind}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://www.ondial.ai/services"
            className="hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="https://www.ondial.ai/pricing"
            className="hover:text-white transition-colors"
          >
            Pricing
          </a>

          {/* Resources dropdown */}
          <div className="relative nav-group">
            <button
              className="flex items-center gap-1 hover:text-white transition-colors"
              onClick={() => setResourcesOpen(!resourcesOpen)}
            >
              Resources
              <svg
                className={`w-3 h-3 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {resourcesOpen && (
              <div
                className="absolute top-full left-0 mt-2 rounded-xl shadow-2xl z-50 overflow-hidden"
                style={{
                  background: "#1E293B",
                  border: "1px solid rgba(37,99,235,0.2)",
                  minWidth: "160px",
                }}
              >
                {resources.map((res) => (
                  <a
                    key={res}
                    href={`https://www.ondial.ai/${res.toLowerCase().replace(" ", "-")}`}
                    className="block px-4 py-2.5 text-sm text-[#CBD5E1] hover:bg-[#2563EB22] hover:text-white transition-colors"
                  >
                    {res}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.ondial.ai/login"
            className="font-paragraph text-sm font-medium text-[#CBD5E1] hover:text-white transition-colors px-4 py-2"
          >
            Log In
          </a>
          <a
            href="https://www.ondial.ai/signup"
            className="font-paragraph text-sm font-bold text-white px-5 py-2.5 rounded-full transition-all hover:opacity-90 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #2563EB, #4F46E5)",
              boxShadow: "0 0 20px rgba(37,99,235,0.4)",
            }}
          >
            Sign Up →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden font-paragraph"
          style={{
            background: "#0F172A",
            borderTop: "1px solid rgba(37,99,235,0.15)",
          }}
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            <a href="/" className="text-[#CBD5E1] hover:text-white py-2 text-sm">Home</a>
            <a href="https://www.ondial.ai/services" className="text-[#CBD5E1] hover:text-white py-2 text-sm">Services</a>
            <a href="https://www.ondial.ai/pricing" className="text-[#CBD5E1] hover:text-white py-2 text-sm">Pricing</a>
            <a href="https://www.ondial.ai/about" className="text-[#CBD5E1] hover:text-white py-2 text-sm">About</a>
            <a href="https://www.ondial.ai/blog" className="text-[#CBD5E1] hover:text-white py-2 text-sm">Blog</a>
            <a href="https://www.ondial.ai/contact" className="text-[#CBD5E1] hover:text-white py-2 text-sm">Contact Us</a>
            <div className="flex gap-3 pt-2">
              <a
                href="https://www.ondial.ai/login"
                className="flex-1 text-center text-sm font-medium text-white border border-[#2563EB44] rounded-full py-2.5"
              >
                Log In
              </a>
              <a
                href="https://www.ondial.ai/signup"
                className="flex-1 text-center text-sm font-bold text-white rounded-full py-2.5"
                style={{ background: "linear-gradient(135deg, #2563EB, #4F46E5)" }}
              >
                Sign Up →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
