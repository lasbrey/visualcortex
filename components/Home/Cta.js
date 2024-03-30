import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <div className="bg-black px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
      <h2 className="text-white text-3xl md:text-6xl">Empower Your Vision with Object Recognition.</h2>
      <p className="text-slate-500 mt-4 text-lg md:text-xl">
        Unleash the potential of AI-driven object recognition to revolutionize your applications and solutions.
      </p>
      <div className="flex mt-5 bg-white p-4 rounded">
        <Link href="/register">Try Now</Link>
      </div>
    </div>
  );
};

export default Cta;
