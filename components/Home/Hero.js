import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <main className="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8 ">
        <div className="py-6 md:order-1 hidden md:block">
          <img src="/hero.png" alt="Astronaut in the air" />
        </div>
        <div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
            Empowering Object Recognition
          </h1>
          <p className="text-lg mt-4 text-slate-600 max-w-xl">
            Visual Cortex, your gateway to cutting-edge object recognition
            technology. Our platform harnesses the power of artificial
            intelligence and computer vision to revolutionize the way we
            perceive and understand the world around us.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/register"
              className="bg-black text-white p-4 px-8 rounded hover:bg-white hover:border-2 hover:text-black"
            >
              Try Now
            </Link>
            <Link
              size="lg"
              className="p-4 px-8"
              href="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
