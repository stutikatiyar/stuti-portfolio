export default function AIDashboard() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
        <p className="text-slate-400 text-sm">Threat Detection</p>
        <h3 className="text-2xl font-bold mt-2">98%</h3>
        <p className="text-cyan-400 mt-2">High Confidence</p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
        <p className="text-slate-400 text-sm">DermaLens Analysis</p>
        <h3 className="text-2xl font-bold mt-2">Image Enhanced</h3>
        <p className="text-green-400 mt-2">Confidence Improved</p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
        <p className="text-slate-400 text-sm">REST APIs Built</p>
        <h3 className="text-2xl font-bold mt-2">15+</h3>
      </div>
    </div>
  );
}