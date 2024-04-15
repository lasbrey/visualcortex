import React from "react";
import Features from "@/components/Home/Features";


const Dashboard = () => {
  return (
    <section>
      <div className="bg-black mb-10">
        <div className=" flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-gray-50">
            Object Search Engine Reverse Image Search
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
            Find where images appear online. How to use Visual Cortex
          </p>
          <div className="flex flex-wrap items-center justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900"
            >
              Upload
            </button>
            <div>
                <input className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-100 text-gray-900 w-full" type="text" placeholder="Paste or Enter Image Url"/>
            </div>
          </div>
        </div>
      </div>
      <Features/>
    </section>
  );
};

export default Dashboard;
