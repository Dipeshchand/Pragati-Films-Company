import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/images/im1.jpg";
import img2 from "../assets/images/im2.jpg";
import img3 from "../assets/images/im3.jpg";
import img4 from "../assets/images/im4.jpg";
import img5 from "../assets/images/im5.jpg";
import img6 from "../assets/images/im6.jpg";
import img7 from "../assets/images/im7.jpg";
import img8 from "../assets/images/im8.jpg";
import img9 from "../assets/images/im9.jpg";
import img10 from "../assets/images/im10.jpg";
import img11 from "../assets/images/im11.jpg";
import img12 from "../assets/images/im12.jpg";
import img13 from "../assets/images/im13.jpg";
import img14 from "../assets/images/im14.jpg";

export default function Intropage() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  // ✅ define images FIRST
  const images = [
    img1, img2, img3, img4, img5,
    img7, img8, img9, img6,
    img10, img11, img12, img13, img14
  ];

  // ✅ preload function
  const preloadHomeAssets = async () => {
    let loaded = 0;
    const total = images.length;

    const updateProgress = () => {
      loaded++;
      setProgress(Math.floor((loaded / total) * 100));
    };

    const promises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
          updateProgress();
          resolve();
        };

        img.onerror = () => {
          updateProgress();
          resolve();
        };
      });
    });

    await Promise.all(promises);
  };

  useEffect(() => {
    preloadHomeAssets().then(() => {
      setReady(true);
    });
  }, []);

  let imageIndex = 0;

  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 w-full h-full">
        {Array.from({ length: 15 }).map((_, i) => {
          if (i === 7) {
            return (
              <div
                key={i}
                className="flex items-center justify-center bg-[#DCCDC2]"
              >
                <div className="text-center">
                  <h1 className="text-3xl md:text-5xl lending-tight tracking-[0.2em] mb-4" style={{fontFamily:"new1"}}>
                    Pragatifilms
                  </h1>

                  <button
                    disabled={!ready}
                    onClick={() => navigate("/home")}
                    className={`px-6 py-2.5 rounded-full text-white transition-all ${
                      ready
                        ? "bg-[#5A3F33] hover:scale-105"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {ready ? "STEP IN" : `Loading ${progress}%`}
                  </button>
                </div>
              </div>
            );
          }

          const img = images[imageIndex++];

          return (
            <div key={i} className="overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}