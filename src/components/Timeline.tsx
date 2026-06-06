const timelineData = [
  {
    year: "2023",
    title: "Started B.Tech AIML",
    description:
      "Began my journey in Artificial Intelligence, Machine Learning and software development at CMR Institute of Technology.",
  },

  {
    year: "2024",
    title: "MSME IDEA Hackathon 4.0",
    description:
      "Worked on sustainable textile recycling concepts and explored innovative eco-friendly product development.",
  },

  {
    year: "2025",
    title: "Freelance Full Stack Developer",
    description:
      "Built a full-stack automobile management platform for a real service business using Next.js, Node.js and MongoDB.",
  },

  {
    year: "2025",
    title: "Patent Filed",
    description:
      "Filed a patent for a Seed Embedded Organic Yoga Mat focused on sustainability and environmental impact.",
  },

  {
    year: "2026",
    title: "Student Placement Coordinator",
    description:
      "Coordinated placement activities and supported 70+ students during recruitment drives and placement preparation.",
  },

  {
    year: "2026",
    title: "DermaLens",
    description:
      "Developed an AI-powered dermatology image enhancement and confidence preservation system using OpenCV and Deep Learning.",
  },

  {
    year: "2026",
    title: "VigilXi",
    description:
      "Currently building an AI-powered surveillance intelligence platform using YOLOv8, OpenCV, FastAPI and React.",
    current: true,
  },
];

export default function Timeline() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">

      <h3 className="text-white text-2xl font-semibold">
        Engineering Journey
      </h3>

      <div className="mt-8 space-y-8">

        {timelineData.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-center"
          >
            <div className="w-4 h-4 rounded-full bg-cyan-400" />

            <div>
              <p className="text-cyan-400">
                {item.year}
              </p>

              <p className="text-white">
                {item.title}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}