import heroImage from "../../assets/images/g6.jpg";

const Hero = () => {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row">
      {/* LEFT SIDE */}
     

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden mt-10 ">
       <img src={heroImage} alt="" />
       </div>

       <div className="w-full md:w-1/2 bg-black text-white flex flex-col justify-center px-8 md:px-16">
        {/* Main Heading */}
        <h1
          className=" md:text-6xl font-extralight leading-tight"
          style={{ fontFamily: "new1" }}
        >
          Capturing Love, Beyond  <br />
          In <span className="italic">Moments</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 text-xl italic">
         We craft timeless visual stories that celebrate the depth, emotion, and elegance of your wedding. Every frame is thoughtfully composed to preserve not just how your day looked—but how it felt.
        </p>


      </div>
    </section>
  );
};

export default Hero;
