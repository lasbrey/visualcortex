import React from "react";

const Faq = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracki text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
          <div>
            <h3 className="font-semibold">What is object recognition?</h3>
            <p className="mt-1 text-gray-600">
              Object recognition is the process of identifying and classifying objects within an image or video. It involves detecting objects, determining their presence, and assigning labels or categories to them.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">How does an object recognition system work?</h3>
            <p className="mt-1 text-gray-600">
              Object recognition systems use various techniques such as deep learning, machine learning, and computer vision algorithms. These systems analyze input data, extract features, and match them against pre-defined patterns or models to identify objects accurately.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What are the applications of object recognition?</h3>
            <p className="mt-1 text-gray-600">
              Object recognition has numerous applications across industries including autonomous vehicles, surveillance, medical imaging, robotics, augmented reality, and retail. It enables machines to understand and interact with the surrounding environment effectively.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">What are the challenges in object recognition?</h3>
            <p className="mt-1 text-gray-600">
              Challenges in object recognition include handling occlusions, variations in lighting and viewpoint, dealing with cluttered backgrounds, and recognizing objects in complex scenes accurately. Additionally, ensuring real-time performance and scalability are also significant challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
