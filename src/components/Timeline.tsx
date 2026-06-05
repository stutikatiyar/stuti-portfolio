const timelineData = [
  {
    year: "2023",
    title: "Started B.Tech AIML",
  },
  {
    year: "2024",
    title: "Patent Application",
  },
  {
    year: "2025",
    title: "Placement Coordinator",
  },
  {
    year: "2025",
    title: "DermaLens",
  },
  {
    year: "2026",
    title: "VigilXi",
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