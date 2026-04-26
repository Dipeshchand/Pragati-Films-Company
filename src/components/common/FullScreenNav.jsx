
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { style } from "framer-motion/client";

function FullScreenNav({ isOpen, onClose }) {
  const navRef = useRef(null);
  const tlRef = useRef(null);

  const navItems = [
    { title: "Home", path: "/home" },
    { title: "Gallery", path: "/gallery" },
    { title: "WeddingFilms", path: "/weddingFilms" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "PortfolioUpload", path: "/portfolioUpload" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(".nav-link", { y: 60, opacity: 0 });

      tlRef.current = gsap.timeline({ paused: true });

      tlRef.current
        .set(navRef.current, { display: "block" })
        .from(".stair-nav", {
          height: 0,
          stagger: { amount: 0.2 },
          duration: 0.4,
          ease: "power2.out",
        })
        .to(
          ".nav-link",
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!tlRef.current) return;

    if (isOpen) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [isOpen]);

  const handleHover = (e) => {
    const moveEls = e.currentTarget.querySelectorAll(".moveX");

    gsap.killTweensOf(moveEls);

    gsap.to(moveEls, {
      xPercent: -100,
      duration: 4,
      ease: "none",
      repeat: -1,
    });
  };

  const handleLeave = (e) => {
    const moveEls = e.currentTarget.querySelectorAll(".moveX");

    gsap.killTweensOf(moveEls);
    gsap.set(moveEls, { xPercent: 0 });
  };

  return (
    <div
      ref={navRef}
      className="hidden fixed top-0 left-0 z-50 h-screen w-full overflow-hidden bg-black p-5 text-white"
    >
      {/* Stair background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="flex h-full w-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`stair-nav h-full w-1/5 ${
                i % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full px-2 md:px-10">
        {/* Top bar */}
        <div className="flex items-start justify-between">
          <div className="py-2">
            <h1 className="text-2xl font-extralight leading-tight tracking-[0.3em]" style={{fontFamily:""}}>Pragati Films</h1>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="relative flex h-12 w-12 items-center justify-center cursor-pointer"
          >
            <span className="absolute h-10 w-[2px] rotate-45 bg-[#D3FD50]" />
            <span className="absolute h-10 w-[2px] -rotate-45 bg-[#D3FD50]" />
          </button>
        </div>

        {/* Menu links */}
        <div className="mt-6 md:mt-10 max-h-[75vh] overflow-y-auto  ">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              onClick={onClose}
              className="block"
            >
              {/* border-white */}
              <div
                className="nav-link group relative overflow-hidden border-t  cursor-pointer"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              >
                {/* Main title */}
                <h1 className="relative z-10 py-3 tracking-[0.1em] text-center text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw]  uppercase leading-[0.9]  transition-opacity duration-300 group-hover:opacity-0" style={{fontFamily:"new1"}}>
                  {item.title}
                </h1>

                {/* Hover marquee */}
                <div className="absolute inset-0 z-20 flex items-center overflow-hidden bg-[#D3FD50] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex w-max">
                    {[0, 1].map((i) => (
                      <div
                        key={i}
                        className="moveX flex shrink-0 items-center gap-6 px-8"
                      >
                        <h2 className="whitespace-nowrap text-[6vw] sm:text-[4vw] md:text-[2.5vw] uppercase text-black" style={{fontFamily:"new1"}}>
                          Click To View All
                        </h2>

                        <h2 className="whitespace-nowrap text-[6vw] sm:text-[4vw] md:text-[2.5vw] uppercase text-black" style={{fontFamily:"new2"}}>
                          Explore More
                        </h2>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="border-t border-white" />
        </div>
      </div>
    </div>
  );
}

export default FullScreenNav;