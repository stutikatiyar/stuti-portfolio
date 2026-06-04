export default function Stats() {
  const stats = [
    { value: "15+", label: "REST APIs Built" },
    { value: "70%", label: "Monitoring Reduction" },
    { value: "3+", label: "Production Projects" },
    { value: "70+", label: "Students Coordinated" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h3 className="text-4xl font-bold text-cyan-400">
              {stat.value}
            </h3>
            <p className="text-slate-400 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}