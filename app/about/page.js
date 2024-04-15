import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="text-center mt-16">
          <div className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            About Image Object Detection
          </div>
          <div className="text-lg mt-4 text-slate-600">
            Learn about the power of image object detection.
          </div>
        </div>
        <div className="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
          <h2 className="font-bold text-3xl text-gray-800">
            Empowering Vision with Image Object Detection
          </h2>
          <p className="text-lg leading-relaxed text-slate-500">
            Image object detection technology enables computers to identify and
            locate objects within images or videos. By leveraging advanced
            algorithms and machine learning techniques, object detection systems
            can detect various objects, such as people, vehicles, animals, and
            more, in digital images or video streams.
          </p>
          <p className="text-lg leading-relaxed text-slate-500">
            This technology has numerous applications across industries,
            including:
            <ul className="list-disc pl-6 mt-2">
              <li>Enhanced security and surveillance systems</li>
              <li>Autonomous vehicles for safe navigation</li>
              <li>Medical imaging for diagnosis and treatment planning</li>
              <li>Retail analytics and customer behavior analysis</li>
              <li>Industrial automation and quality control</li>
              <li>Environmental monitoring and wildlife conservation</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
