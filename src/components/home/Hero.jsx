import heroImage from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center px-8 md:px-16">
        {/* Main Heading */}
        <h1
          className="text-4xl md:text-6xl font-extralight leading-tight"
          style={{ fontFamily: "" }}
        >
          Capturing Love <br />
          In <span className="italic">Every Shade</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl text-gray-400 italic">
          Every wedding holds a story—of emotion, connection, and timeless
          beauty. We transform those fleeting moments into refined visuals and
          cinematic films that live beyond the day.
        </p>

        {/* Button */}
        <button className="mt-8 border border-white px-6 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
        onClick={()=>window.location.href="/weddingFilms"}
        >
          Begin Your Story
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden mt-10">
        <video
          src="/videos/videoss.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
