import {
  FaCar,
  FaBriefcaseMedical,
  FaDatabase,
  FaBacterium,
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";

const features = [
  {
    title: "Enhanced Security Solutions",
    description:
      "Object recognition systems bolster security measures by accurately identifying and tracking objects of interest in surveillance footage.",
    icon: MdOutlineSecurity,
  },
  {
    title: "Autonomous Vehicles",
    description:
      "Object recognition plays a pivotal role in enabling autonomous vehicles to navigate safely and efficiently.",
    icon: FaCar,
  },
  {
    title: "Medical Imaging Diagnosis",
    description:
      "Object recognition technology enhances medical imaging by automatically identifying anatomical structures, abnormalities, and pathologies within radiological scans.",
    icon: FaBriefcaseMedical,
  },
  {
    title: "Retail Analytics",
    description:
      "In the retail sector, object recognition systems analyze customer behavior and product interactions to optimize store layout, inventory management, and marketing strategies. ",
    icon: FaDatabase,
  },
  {
    title: "Environmental Monitoring",
    description:
      "Object recognition enables automated monitoring of natural environments, wildlife habitats, and ecological phenomena.",
    icon: IoAnalyticsSharp,
  },
  {
    title: "Industrial Automation",
    description:
      "Object recognition technologies streamline industrial processes by automating visual inspection tasks, quality control, and inventory management.",
    icon: FaBacterium,
  },
];

const FeaturesSection = () => {
  return (
    <div className="mt-16 md:mt-0">
      <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        The Power of Object Recognition
      </h2>
      <p className="text-lg mt-4 text-slate-600">
        Explore our website to learn more about our capabilities, applications,
        and how we can empower your business or project today.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        {features.map((item, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
              <item.icon className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>{" "}
              <p className="text-slate-500 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
